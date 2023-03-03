import {
  Actions,
  Box,
  Button,
  Dropdown,
  Heading,
  Stack,
} from 'braid-design-system';
import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import type {
  FreeTextQuestion,
  QuestionType,
  ResponseChoice,
  SelectionQuestion,
} from '../../../../../private/questionnaires/types';
import { createResolver } from '../../../../../utils';
import { StateContext, actionCreators } from '../../state/formBuilderState';

import QuestionInputFields from './components/QuestionInputFields';

interface FormValues {
  questionHtml: string;
  questionType?: QuestionType;
  responseChoice: ResponseChoice[];
  value?: string;
}

interface NewQuestionFormProps {
  hideForm: () => void;
  initialValues: FreeTextQuestion | SelectionQuestion;
}

const resolver = createResolver<FormValues>((values, errors) => {
  if (!values.questionType) {
    errors.questionType = {
      type: 'required',
      message: 'Select a question type',
    };
  } else if (
    values.questionType === 'FreeText' &&
    values.responseChoice?.length
  ) {
    errors.questionType = {
      type: 'validate',
      message: 'Omit any response options',
    };
  } else if (
    values.questionType !== 'FreeText' &&
    (!values.responseChoice || values.responseChoice.length < 2)
  ) {
    errors.questionType = {
      type: 'validate',
      message: 'Provide at least two response options',
    };
  }

  if (!values.questionHtml) {
    errors.questionHtml = {
      type: 'required',
      message: 'Enter a question',
    };
  }
});

export default ({ hideForm, initialValues }: NewQuestionFormProps) => {
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      questionHtml: initialValues.questionHtml,
      questionType: initialValues.responseTypeCode,
      responseChoice:
        'responseChoice' in initialValues ? initialValues.responseChoice : [],
    },
    resolver,
  });

  const questionHtmlValue = watch('questionHtml');
  const questionTypeValue = watch('questionType');
  const responseChoiceValue = watch('responseChoice');

  useEffect(
    () => clearErrors('questionType'),
    [clearErrors, responseChoiceValue.length],
  );

  const { dispatch } = useContext(StateContext);

  const aggregatedState = {
    questionText: {
      error: errors.questionHtml?.message,
      value: questionHtmlValue,
      set: (value: string) =>
        setValue('questionHtml', value, { shouldValidate: true }),
    },
    options: {
      value: responseChoiceValue,
      set: (value: ResponseChoice[]) =>
        setValue('responseChoice', value, { shouldValidate: true }),
    },
  };

  const createQuestion = ({
    questionHtml,
    questionType,
    responseChoice,
  }: FormValues) => {
    if (!questionType) {
      return;
    }

    if (initialValues.value) {
      const creator = actionCreators.update[questionType];
      creator(dispatch)(initialValues.value, questionHtml, responseChoice);
    } else {
      const creator = actionCreators.add[questionType];
      creator(dispatch)(questionHtml, responseChoice);
    }

    hideForm();
  };

  return (
    <form onSubmit={handleSubmit(createQuestion)}>
      <Stack space="large">
        <Box>
          <Heading level="3">
            {initialValues.value ? 'Edit' : 'New'} question
          </Heading>
        </Box>

        <Controller
          control={control}
          defaultValue={initialValues.responseTypeCode}
          name="questionType"
          render={({ field }) => (
            <Dropdown
              {...field}
              id={field.name}
              label="Type"
              message={errors.questionType?.message}
              placeholder="Select a question type"
              tone={errors.questionType ? 'critical' : undefined}
              value={questionTypeValue ?? ''}
            >
              <option value="FreeText">Free Text</option>
              <option value="SingleSelect">Single Select</option>
              <option value="MultiSelect">Multi Select</option>
            </Dropdown>
          )}
        />

        {questionTypeValue ? (
          <QuestionInputFields
            questionType={questionTypeValue}
            state={aggregatedState}
          />
        ) : null}

        <Box>
          <Actions>
            <Button type="submit">Save</Button>
            <Button onClick={hideForm} variant="transparent">
              Cancel
            </Button>
          </Actions>
        </Box>
      </Stack>
    </form>
  );
};
