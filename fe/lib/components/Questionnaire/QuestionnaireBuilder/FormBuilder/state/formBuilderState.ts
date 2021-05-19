import React from 'react';
import { v4 as uuid } from 'uuid';

import type {
  FormComponent,
  FreeTextQuestion,
  PrivacyConsent,
  QuestionType,
  ResponseChoice,
  SelectionQuestion,
} from '../../../types';

export interface DeleteComponentAction {
  type: 'DELETE_COMPONENT';
  fieldId: string;
}

export interface AddComponentAction {
  type: 'ADD_COMPONENT';
  newValue: FormComponent;
  fieldId: string;
}

export interface EditComponentAction {
  type: 'EDIT_COMPONENT';
  newValue: FormComponent;
}

export interface ReplaceComponentsAction {
  type: 'IMPORT_COMPONENTS';
  newValue: FormComponent[];
}

const createAddPrivacyConsentAction = (
  dispatch: React.Dispatch<AddComponentAction>,
) => (descriptionHtml: string, url: string) => {
  const newValue: PrivacyConsent = {
    value: uuid(),
    privacyPolicyUrl: {
      url,
    },
    descriptionHtml,
    componentTypeCode: 'PrivacyConsent',
  };
  dispatch({ type: 'ADD_COMPONENT', fieldId: newValue.value, newValue });
};

const createAddFreeTextQuestionAction = (
  dispatch: React.Dispatch<AddComponentAction>,
) => (questionText: string) => {
  const newValue: FreeTextQuestion = {
    value: uuid(),
    questionHtml: questionText,
    responseTypeCode: 'FreeText',
    componentTypeCode: 'Question',
  };
  dispatch({ type: 'ADD_COMPONENT', fieldId: newValue.value, newValue });
};

const createAddSelectQuestionAction = (
  questionType: Exclude<QuestionType, 'FreeText'>,
) => (dispatch: React.Dispatch<AddComponentAction>) => (
  questionText: string,
  options: ResponseChoice[],
) => {
  const responseChoice = options.map(({ text, preferredIndicator }) => ({
    text,
    preferredIndicator,
    value: text.replace(/ /g, '').toLowerCase(),
  }));
  const newValue: SelectionQuestion = {
    value: uuid(),
    componentTypeCode: 'Question',
    questionHtml: questionText,
    responseTypeCode: questionType,
    responseChoice,
  };
  dispatch({ type: 'ADD_COMPONENT', fieldId: newValue.value, newValue });
};

const createDeleteFreeTextAction = (
  dispatch: React.Dispatch<DeleteComponentAction>,
) => (questionId: string) => {
  dispatch({ type: 'DELETE_COMPONENT', fieldId: questionId });
};

const importComponentsAction = (
  dispatch: React.Dispatch<ReplaceComponentsAction>,
) => (value: FormComponent[]) => {
  dispatch({ type: 'IMPORT_COMPONENTS', newValue: value });
};

const createEditPrivacyConsentAction = (
  dispatch: React.Dispatch<EditComponentAction>,
) => (questionId: string, descriptionHtml: string, url: string) => {
  const newValue: PrivacyConsent = {
    value: questionId,
    privacyPolicyUrl: {
      url,
    },
    descriptionHtml,
    componentTypeCode: 'PrivacyConsent',
  };
  dispatch({ type: 'EDIT_COMPONENT', newValue });
};

const createEditFreeTextQuestionAction = (
  dispatch: React.Dispatch<EditComponentAction>,
) => (questionId: string, questionText: string) => {
  const newValue: FreeTextQuestion = {
    value: questionId,
    questionHtml: questionText,
    responseTypeCode: 'FreeText',
    componentTypeCode: 'Question',
  };
  dispatch({ type: 'EDIT_COMPONENT', newValue });
};

const createEditSelectQuestionAction = (
  questionType: Exclude<QuestionType, 'FreeText'>,
) => (dispatch: React.Dispatch<EditComponentAction>) => (
  questionId: string,
  questionText: string,
  options: ResponseChoice[],
) => {
  const responseChoice = options.map(({ text, preferredIndicator }) => ({
    text,
    preferredIndicator,
    value: text.replace(/ /g, '').toLowerCase(),
  }));
  const newValue: SelectionQuestion = {
    value: questionId,
    questionHtml: questionText,
    responseTypeCode: questionType,
    responseChoice,
    componentTypeCode: 'Question',
  };
  dispatch({ type: 'EDIT_COMPONENT', newValue });
};

export const actionCreators = {
  add: {
    FreeText: createAddFreeTextQuestionAction,
    SingleSelect: createAddSelectQuestionAction('SingleSelect'),
    MultiSelect: createAddSelectQuestionAction('MultiSelect'),
    PrivacyConsent: createAddPrivacyConsentAction,
  },
  update: {
    FreeText: createEditFreeTextQuestionAction,
    SingleSelect: createEditSelectQuestionAction('SingleSelect'),
    MultiSelect: createEditSelectQuestionAction('MultiSelect'),
    PrivacyConsent: createEditPrivacyConsentAction,
  },
  delete: createDeleteFreeTextAction,
  import: importComponentsAction,
} as const;

interface StateContextType {
  state: FormComponent[];
  dispatch: React.Dispatch<
    | AddComponentAction
    | DeleteComponentAction
    | EditComponentAction
    | ReplaceComponentsAction
  >;
}
export const StateContext = React.createContext<StateContextType>({
  state: [],
  // tslint:disable-next-line
  dispatch: () => {},
});

const splitArrayAt = <T extends any>(inputArray: T[], index: number) => {
  const beforeItem = inputArray.slice(0, index);
  const afterItem = inputArray.slice(index + 1);
  const item = inputArray[index];
  return { beforeItem, item, afterItem };
};

export const formBuilderStateReducer = (
  state: FormComponent[],
  action:
    | AddComponentAction
    | DeleteComponentAction
    | EditComponentAction
    | ReplaceComponentsAction,
) => {
  const editComponent = (item: FormComponent) => {
    const itemEditIndex = state.findIndex(({ value }) => value === item.value);
    const { beforeItem, afterItem } = splitArrayAt(state, itemEditIndex);
    return [...beforeItem, item, ...afterItem];
  };

  switch (action.type) {
    case 'ADD_COMPONENT':
      return [...state, action.newValue];
    case 'DELETE_COMPONENT':
      const itemIndex = state.findIndex(
        ({ value }) => value === action.fieldId,
      );
      const { beforeItem, afterItem } = splitArrayAt(state, itemIndex);
      return [...beforeItem, ...afterItem];
    case 'EDIT_COMPONENT':
      return editComponent(action.newValue);
    case 'IMPORT_COMPONENTS':
      return action.newValue;
  }
};
