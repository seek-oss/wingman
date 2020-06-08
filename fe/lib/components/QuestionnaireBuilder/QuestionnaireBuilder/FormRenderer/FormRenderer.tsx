import { Stack } from 'braid-design-system';
import React, { useReducer } from 'react';

import {
  FormComponent,
  FreeTextQuestion,
  PrivacyConsent,
  Question,
  SelectionQuestion,
} from '../../questionTypes';

import FreeText from './components/FreeText';
import MultiSelect from './components/MultiSelect';
import PrivacyConsentRenderer from './components/PrivacyConsent';
import SingleSelect from './components/SingleSelect';
import {
  FormUpdateAction,
  createUpdateFieldAction,
  formStateReducer,
} from './state/formRendererState';

interface RenderSchemaProps {
  formComponents: FormComponent[];
}

const renderQuestion = (
  component: FreeTextQuestion | SelectionQuestion,
  index: number,
  state: {
    [x: string]: any;
  },
  dispatch: React.Dispatch<FormUpdateAction>,
) => {
  switch (component.responseTypeCode) {
    case 'SingleSelect':
      return (
        <SingleSelect
          key={component.value}
          value={state[component.value]}
          setValue={createUpdateFieldAction<string>(component.value, dispatch)}
          choices={component.responseChoice.map((choice) => choice.text)}
          id={component.value}
          title={`${index + 1}. ${component.questionHtml}`}
        />
      );
    case 'MultiSelect':
      return (
        <MultiSelect
          key={component.value}
          value={state[component.value]}
          setValue={createUpdateFieldAction<string[]>(
            component.value,
            dispatch,
          )}
          options={component.responseChoice.map((choice) => choice.text)}
          id={component.value}
          title={`${index + 1}. ${component.questionHtml}`}
        />
      );
    case 'FreeText':
      return (
        <FreeText
          key={component.value}
          value={state[component.value]}
          setValue={createUpdateFieldAction<string>(component.value, dispatch)}
          title={`${index + 1}. ${component.questionHtml}`}
        />
      );
  }
};

const renderPrivacyConsent = (component: PrivacyConsent) => (
  <PrivacyConsentRenderer
    key={component.value}
    privacy={component}
    title="Privacy consent"
  />
);

export const FormRenderer = ({ formComponents }: RenderSchemaProps) => {
  const [state, dispatch] = useReducer(formStateReducer, {});

  const questions = formComponents
    .filter((fc): fc is Question => fc.componentTypeCode === 'Question')
    .map((component, index) =>
      renderQuestion(component, index, state, dispatch),
    );

  const privacyComponent = formComponents.find(
    (fc): fc is PrivacyConsent => fc.componentTypeCode === 'PrivacyConsent',
  );

  const privacy = privacyComponent
    ? renderPrivacyConsent(privacyComponent)
    : null;

  return (
    <Stack space="medium">
      {questions}
      {privacy}
    </Stack>
  );
};
