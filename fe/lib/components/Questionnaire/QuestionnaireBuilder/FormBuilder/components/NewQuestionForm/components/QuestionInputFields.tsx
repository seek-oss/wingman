import { Stack, TextField } from 'braid-design-system';
import React from 'react';

import type { QuestionType, ResponseChoice } from '../../../../../types';

import SelectOptions from './SelectOptions';

interface StateProp<T> {
  error?: string;
  value: T;
  set: (value: T) => void;
}

interface QuestionInputFieldsProps {
  questionType: QuestionType | '';
  state: {
    questionText: StateProp<string>;
    options: StateProp<ResponseChoice[]>;
  };
}

export default ({ questionType, state }: QuestionInputFieldsProps) => (
  <Stack space="large">
    <TextField
      id="questionnaireBuilderQuestionHtml"
      label="Question"
      message={state.questionText.error}
      onChange={(event) => state.questionText.set(event.currentTarget.value)}
      onClear={() => state.questionText.set('')}
      value={state.questionText.value}
      tone={state.questionText.error ? 'critical' : undefined}
    />

    {['SingleSelect', 'MultiSelect'].includes(questionType) && (
      <SelectOptions
        options={state.options.value}
        setOptionList={state.options.set}
      />
    )}
  </Stack>
);
