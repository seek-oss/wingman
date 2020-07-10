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
