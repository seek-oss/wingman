import type {
  ApplicationPrivacyConsent,
  ApplicationQuestion,
  ApplicationQuestionnaireComponent,
} from '../../types/seekApi.graphql';

import type {
  FormComponent,
  GraphqlComponentInput,
  PrivacyConsent,
  Question,
  QuestionType,
} from './types';

const mapPrivacyConsent = (
  component: ApplicationPrivacyConsent,
): PrivacyConsent => ({
  componentTypeCode: 'PrivacyConsent',
  privacyPolicyUrl: component.privacyPolicyUrl,
  value: component.id.value,
  descriptionHtml: component.descriptionHtml || '',
});

const mapQuestion = (component: ApplicationQuestion): Question => ({
  componentTypeCode: 'Question',
  questionHtml: component.questionHtml,
  responseChoice: component.responseChoice
    ? component.responseChoice.map((r) => ({
        text: r.text,
        value: r.id.value,
        preferredIndicator: r.preferredIndicator,
      }))
    : [],
  responseTypeCode: component.responseTypeCode as QuestionType,
  value: component.id.value,
});

export const mapApplicationQuestionnaireToFormComponent = (
  components: ApplicationQuestionnaireComponent[],
): FormComponent[] =>
  components.map((component) =>
    component.componentTypeCode === 'PrivacyConsent'
      ? mapPrivacyConsent(component as ApplicationPrivacyConsent)
      : mapQuestion(component as ApplicationQuestion),
  );

export const mapGraphqlToFormComponent = (
  graphqlInput: GraphqlComponentInput[],
): FormComponent[] =>
  graphqlInput.map((component) =>
    component.componentTypeCode === 'PrivacyConsent'
      ? component.privacyConsent
      : component.question,
  );
