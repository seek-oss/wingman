/* eslint-disable new-cap */

import * as t from 'runtypes';

import type { QuestionType } from './types';

interface BaseQuestion {
  // This is the ID of the question, but GraphQL has it as `value`
  value: string;

  questionHtml: string;
  responseTypeCode: QuestionType;
  componentTypeCode: 'Question';
}

export interface FreeTextQuestion extends BaseQuestion {
  responseTypeCode: 'FreeText';
}

export interface ResponseChoice {
  text: string;
  value?: string;
  preferredIndicator: boolean;
}

export interface SelectionQuestion extends BaseQuestion {
  responseTypeCode: 'SingleSelect' | 'MultiSelect';
  responseChoice: ResponseChoice[];
}

export type Question = FreeTextQuestion | SelectionQuestion;

export type WebUrl = {
  url: string;
};

export interface PrivacyConsent {
  value: string;
  privacyPolicyUrl: WebUrl;
  descriptionHtml?: string;
  componentTypeCode: 'PrivacyConsent';
}

export type FormComponent = Question | PrivacyConsent;

const PrivacyConsent = t.Record({
  value: t.String,
  privacyPolicyUrl: t.Record({
    url: t.String,
  }),
  componentTypeCode: t.Literal('PrivacyConsent'),
  descriptionHtml: t.String.optional(),
});

const baseQuestionFields = {
  value: t.String,
  questionHtml: t.String,
  responseTypeCode: t.Union(
    t.Literal('FreeText'),
    t.Literal('SingleSelect'),
    t.Literal('MultiSelect'),
  ),
  componentTypeCode: t.Literal('Question'),
};

const FreeTextQuestion = t.Record({
  ...baseQuestionFields,
  responseTypeCode: t.Literal('FreeText'),
});

const ResponseChoice = t.Record({
  text: t.String,
  value: t.String,
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

export const GraphqlComponentInput = t.Union(
  t.Record({
    componentTypeCode: t.Literal('PrivacyConsent'),
    privacyConsent: PrivacyConsent,
  }),
  t.Record({
    componentTypeCode: t.Literal('Question'),
    question: t.Union(FreeTextQuestion, SelectionQuestion),
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
