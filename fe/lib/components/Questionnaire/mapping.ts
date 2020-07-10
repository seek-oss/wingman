import {
  ApplicationPrivacyConsent,
  ApplicationQuestion,
  ApplicationQuestionnaireComponent,
} from '../../types/seek.graphql';

import { FormComponent, PrivacyConsent, Question } from './questionTypes';
import { QuestionType } from './types';

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
    ? component.responseChoice.map(r => ({
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
  components.map(component =>
    component.componentTypeCode === 'PrivacyConsent'
      ? mapPrivacyConsent(component as ApplicationPrivacyConsent)
      : mapQuestion(component as ApplicationQuestion),
  );
