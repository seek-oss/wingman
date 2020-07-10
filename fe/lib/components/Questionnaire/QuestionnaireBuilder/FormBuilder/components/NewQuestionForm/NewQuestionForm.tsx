import {
  Actions,
  Box,
  Button,
  Card,
  Dropdown,
  Heading,
  Stack,
} from 'braid-design-system';
import React, { useContext, useState } from 'react';

import {
  FreeTextQuestion,
  ResponseChoice,
  SelectionQuestion,
} from '../../../../questionTypes';
import { OptionListItem, QuestionType } from '../../../../types';
import { StateContext, actionCreators } from '../../state/formBuilderState';

import QuestionInputFields from './components/QuestionInputFields';

interface NewQuestionFormProps {
  hideForm: () => void;
  initialValues: FreeTextQuestion | SelectionQuestion | typeof blankFormValues;
}

const blankFormValues = {
  value: '',
  responseTypeCode: '' as const,
  responseChoice: [] as ResponseChoice[],
  questionHtml: '',
};

export default ({
  hideForm,
  initialValues = blankFormValues,
}: NewQuestionFormProps) => {
  const { dispatch } = useContext(StateContext);
  const [questionType, setQuestionType] = useState<QuestionType | ''>(
    initialValues.responseTypeCode,
  );
  const [selectOptions, setSelectOptions] = useState<OptionListItem[]>(
    'responseChoice' in initialValues ? initialValues.responseChoice : [],
  );
  const [questionText, setQuestionText] = useState(initialValues.questionHtml);

  const aggregatedState = {
    questionText: { value: questionText, set: setQuestionText },
    options: { value: selectOptions, set: setSelectOptions },
  };

  const saveThisQuestion = () => {
    if (questionType !== '') {
      if (initialValues.value) {
        const creator = actionCreators.update[questionType];
        creator(dispatch)(initialValues.value, questionText, selectOptions);
      } else {
        const creator = actionCreators.add[questionType];
        creator(dispatch)(questionText, selectOptions);
      }
      hideForm();
    }
  };

  return (
    <Card>
      <Stack space="large">
        <Box>
          <Heading level="3">
            {initialValues.value ? 'Edit' : 'New'} Question
          </Heading>
        </Box>

        <Dropdown
          id="questionType"
          label="Question type"
          placeholder="Please select question type"
          value={questionType}
          onChange={(event) =>
            setQuestionType(event.currentTarget.value as any)
          }
        >
          <option value="FreeText">Free Text</option>
          <option value="SingleSelect">Single Select</option>
          <option value="MultiSelect">Multi Select</option>
        </Dropdown>

        {questionType === '' ? undefined : (
          <QuestionInputFields
            questionType={questionType}
            state={aggregatedState}
          />
        )}

        <Box>
          <Actions>
            <Button onClick={saveThisQuestion}>Save</Button>
            <Button onClick={hideForm} weight="weak">
              Cancel
            </Button>
          </Actions>
        </Box>
      </Stack>
    </Card>
  );
};
