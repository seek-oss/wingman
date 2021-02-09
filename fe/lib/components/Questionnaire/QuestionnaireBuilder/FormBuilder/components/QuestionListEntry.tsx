import { Box, Card, Stack, Text } from 'braid-design-system';
import React, { useContext, useState } from 'react';

import type {
  FreeTextQuestion,
  SelectionQuestion,
} from '../../../questionTypes';
import { StateContext, actionCreators } from '../state/formBuilderState';

import NewQuestionForm from './NewQuestionForm/NewQuestionForm';
import QuestionEntryMenu from './QuestionEntryMenu';

const questionTypeDisplayNames = {
  FreeText: 'Free text',
  SingleSelect: 'Single select',
  MultiSelect: 'Multi select',
} as const;

interface QuestionListEntryProps {
  question: FreeTextQuestion | SelectionQuestion;
}

const QuestionListEntry = ({ question }: QuestionListEntryProps) => {
  const { dispatch } = useContext(StateContext);
  const [showEditForm, setShowEditForm] = useState(false);

  const onClickDelete = (
    questionToDelete: FreeTextQuestion | SelectionQuestion,
  ) => () => {
    actionCreators.delete(dispatch)(questionToDelete.value);
  };

  const onClickEdit = () => {
    setShowEditForm(true);
  };

  return showEditForm ? (
    <NewQuestionForm
      hideForm={() => setShowEditForm(false)}
      initialValues={question}
    />
  ) : (
    <Card>
      <Box display="flex" justifyContent="spaceBetween">
        <Stack space="small">
          <Text size="large">{question.questionHtml}</Text>
          <Text tone="secondary" size="small">
            {questionTypeDisplayNames[question.responseTypeCode]}
          </Text>
        </Stack>
        <QuestionEntryMenu
          onClickDelete={onClickDelete(question)}
          onClickEdit={onClickEdit}
        />
      </Box>
    </Card>
  );
};

export default QuestionListEntry;
