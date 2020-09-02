/* eslint-disable new-cap */
import {
  Array,
  Boolean,
  Literal,
  Partial,
  Record as RTRecord,
  Static,
  String,
  Union,
} from 'runtypes';

import { QuestionType } from './types';

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
  value: string;
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

const PrivacyConsent = RTRecord({
  value: String,
  privacyPolicyUrl: RTRecord({
    url: String,
  }),
  componentTypeCode: Literal('PrivacyConsent'),
}).And(
  Partial({
    descriptionHtml: String,
  }),
);

const BaseQuestion = RTRecord({
  value: String,
  questionHtml: String,
  responseTypeCode: Union(
    Literal('FreeText'),
    Literal('SingleSelect'),
    Literal('MultiSelect'),
  ),
  componentTypeCode: Literal('Question'),
});

const FreeTextQuestion = BaseQuestion.And(
  RTRecord({
    responseTypeCode: Literal('FreeText'),
  }),
);

const ResponseChoice = RTRecord({
  text: String,
  value: String,
  preferredIndicator: Boolean,
});

const SelectionQuestion = BaseQuestion.And(
  RTRecord({
    responseTypeCode: Union(Literal('SingleSelect'), Literal('MultiSelect')),
    responseChoice: Array(ResponseChoice),
  }),
);

export const GraphqlComponentInput = RTRecord({
  componentTypeCode: Literal('PrivacyConsent'),
  privacyConsent: PrivacyConsent,
}).Or(
  RTRecord({
    componentTypeCode: Literal('Question'),
    question: FreeTextQuestion.Or(SelectionQuestion),
  }),
);

export type GraphqlComponentInput = Static<typeof GraphqlComponentInput>;

const QuestionnaireMutationVariableInput = RTRecord({
  input: RTRecord({
    applicationQuestionnaire: RTRecord({
      hirerId: String,
      components: Array(GraphqlComponentInput),
    }),
  }),
});

export type MutationVariableInput = Static<
  typeof QuestionnaireMutationVariableInput
>;

export const validateQueryInput = (input: unknown): MutationVariableInput =>
  QuestionnaireMutationVariableInput.check(input);
