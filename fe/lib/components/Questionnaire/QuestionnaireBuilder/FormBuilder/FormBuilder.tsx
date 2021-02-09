import { Alert, Card, IconAdd, Stack, Text } from 'braid-design-system';
import React, { useEffect, useReducer, useState } from 'react';

import { TextLinkButton } from '../../components/TextLinkButton';
import { MAX_NUMBER_OF_COMPONENTS } from '../../constants';
import type {
  FormComponent,
  PrivacyConsent,
  SelectionQuestion,
} from '../../questionTypes';

import NewPrivacyConsentForm from './components/NewPrivacyConsentForm/NewPrivacyConsentForm';
import NewQuestionForm from './components/NewQuestionForm/NewQuestionForm';
import CentredFlexBox from './components/NewQuestionForm/components/CentredFlexBox';
import PrivacyConsentEntry from './components/PrivacyConsentEntry';
import QuestionListEntry from './components/QuestionListEntry';
import {
  StateContext,
  actionCreators,
  formBuilderStateReducer,
} from './state/formBuilderState';

interface FormBuilderProps {
  externalFormState?: FormComponent[];
  onChange: (components: FormComponent[]) => void;
}

export const FormBuilder = ({
  externalFormState,
  onChange,
}: FormBuilderProps) => {
  const blankQuestionFormValues = ({
    value: '',
    responseTypeCode: '',
    responseChoice: [],
    questionHtml: '',
  } as unknown) as SelectionQuestion;

  const blankPrivacyConsentFormValues = {
    value: '',
    privacyPolicyUrl: {
      url: '',
    },
    descriptionHtml: '',
  } as PrivacyConsent;

  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showPrivacyConsentForm, setShowPrivacyConsentForm] = useState(false);
  const [state, dispatch] = useReducer(
    formBuilderStateReducer,
    externalFormState || [],
  );

  useEffect(() => {
    if (externalFormState) {
      const creator = actionCreators.import;
      creator(dispatch)(externalFormState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalFormState]);

  useEffect(() => {
    if (onChange) {
      onChange(state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const onClickAddQuestion = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setShowQuestionForm(true);
  };

  const onClickAddPrivacyConsent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setShowPrivacyConsentForm(true);
  };

  const displayFormOrAddButton = () => {
    if (showQuestionForm) {
      return (
        <NewQuestionForm
          key="newQuestionForm"
          hideForm={() => setShowQuestionForm(false)}
          initialValues={blankQuestionFormValues}
        />
      );
    }

    return (
      state.length < MAX_NUMBER_OF_COMPONENTS && (
        <Card key="questionCard">
          <Text>
            <TextLinkButton onClick={onClickAddQuestion} width="full">
              <CentredFlexBox justifyContent="spaceBetween">
                Add a question
                <IconAdd />
              </CentredFlexBox>
            </TextLinkButton>
          </Text>
        </Card>
      )
    );
  };

  const displayPrivacyConsentAddButton = () => {
    const privacyComponent = state.find(
      (fc): fc is PrivacyConsent => fc.componentTypeCode === 'PrivacyConsent',
    );

    if (typeof privacyComponent !== 'undefined') {
      return (
        <PrivacyConsentEntry
          privacyConsent={privacyComponent}
          key={privacyComponent.value}
        />
      );
    }

    if (showPrivacyConsentForm) {
      return (
        <NewPrivacyConsentForm
          hideForm={() => setShowPrivacyConsentForm(false)}
          key="newPrivacyConsentForm"
          initialValues={blankPrivacyConsentFormValues}
        />
      );
    }

    return (
      state.length < MAX_NUMBER_OF_COMPONENTS && (
        <Card key="privacyConsentCard">
          <Text>
            <TextLinkButton onClick={onClickAddPrivacyConsent} width="full">
              <CentredFlexBox justifyContent="spaceBetween">
                Add a privacy consent component
                <IconAdd />
              </CentredFlexBox>
            </TextLinkButton>
          </Text>
        </Card>
      )
    );
  };

  const renderEntries = (component: FormComponent) => {
    if (component.componentTypeCode === 'Question') {
      return <QuestionListEntry question={component} key={component.value} />;
    }
    return null;
  };

  return (
    <StateContext.Provider value={{ dispatch, state }}>
      <Stack space="none" dividers>
        {state.map((component) => renderEntries(component))}
        {displayFormOrAddButton()}
        {displayPrivacyConsentAddButton()}
        {state.length === MAX_NUMBER_OF_COMPONENTS && (
          <Alert>
            <Text>Max number of components reached</Text>
          </Alert>
        )}
      </Stack>
    </StateContext.Provider>
  );
};
