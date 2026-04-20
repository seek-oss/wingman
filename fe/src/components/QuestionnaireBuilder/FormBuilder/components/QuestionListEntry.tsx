import { Column, Columns, Stack, Text } from 'braid-design-system';
import { useContext, useState } from 'react';

import type {
  FreeTextQuestion,
  SelectionQuestion,
} from '../../../../private/questionnaires/types';
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

  const onClickDelete =
    (questionToDelete: FreeTextQuestion | SelectionQuestion) => () => {
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
    <Columns alignY="center" space="small">
      <Column>
        <Stack space="small">
          <Text size="large">{question.questionHtml}</Text>
          <Text tone="secondary" size="small">
            {questionTypeDisplayNames[question.responseTypeCode]}
          </Text>
        </Stack>
      </Column>

      <Column width="content">
        <QuestionEntryMenu
          onClickDelete={onClickDelete(question)}
          onClickEdit={onClickEdit}
        />
      </Column>
    </Columns>
  );
};

export default QuestionListEntry;
