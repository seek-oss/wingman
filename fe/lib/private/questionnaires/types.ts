/* eslint-disable new-cap */

import * as t from 'runtypes';

export type FreeTextQuestion = t.Static<typeof FreeTextQuestion>;

export type ResponseChoice = t.Static<typeof ResponseChoice>;

export type SelectionQuestion = t.Static<typeof SelectionQuestion>;

export type Question = t.Static<typeof Question>;

export type WebUrl = t.Static<typeof WebUrl>;

export type PrivacyConsent = t.Static<typeof PrivacyConsent>;

export type FormComponent = Question | PrivacyConsent;

const ResponseTypeCode = t.Union(
  t.Literal('FreeText'),
  t.Literal('SingleSelect'),
  t.Literal('MultiSelect'),
);

const WebUrl = t.Record({
  url: t.String,
});

const PrivacyConsent = t.Record({
  value: t.String,
  privacyPolicyUrl: WebUrl,
  componentTypeCode: t.Literal('PrivacyConsent'),
  descriptionHtml: t.String.nullable().optional(),
});

const baseQuestionFields = {
  /**
   * The identifier of the question is represented as `value`.
   */
  value: t.String,
  questionHtml: t.String,
  responseTypeCode: ResponseTypeCode,
  componentTypeCode: t.Literal('Question'),
};

const FreeTextQuestion = t.Record({
  ...baseQuestionFields,
  responseTypeCode: t.Literal('FreeText'),
});

const ResponseChoice = t.Record({
  text: t.String,
  value: t.String.nullable().optional(),
  preferredIndicator: t.Boolean,
});

const SelectionQuestion = t.Record({
  ...baseQuestionFields,
  responseTypeCode: t.Union(
    t.Literal('SingleSelect'),
    t.Literal('MultiSelect'),
  ),
  responseChoice: t.Array(ResponseChoice),
});

const Question = t.Union(FreeTextQuestion, SelectionQuestion);

export const GraphqlComponentInput = t.Union(
  t.Record({
    componentTypeCode: t.Literal('PrivacyConsent'),
    privacyConsent: PrivacyConsent,
  }),
  t.Record({
    componentTypeCode: t.Literal('Question'),
    question: Question,
  }),
);

export type GraphqlComponentInput = t.Static<typeof GraphqlComponentInput>;

const QuestionnaireMutationVariableInput = t.Record({
  input: t.Record({
    applicationQuestionnaire: t.Record({
      hirerId: t.String,
      components: t.Array(GraphqlComponentInput),
    }),
  }),
});

export type MutationVariableInput = t.Static<
  typeof QuestionnaireMutationVariableInput
>;

export const validateQueryInput = (input: unknown): MutationVariableInput =>
  QuestionnaireMutationVariableInput.check(input);

export type QuestionType = t.Static<typeof ResponseTypeCode>;
export type ComponentType = 'Question' | 'PrivacyConsent';
