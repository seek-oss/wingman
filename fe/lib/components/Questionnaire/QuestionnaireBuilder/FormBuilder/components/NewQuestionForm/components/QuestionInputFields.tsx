import { Stack } from 'braid-design-system';
import React from 'react';

import type { ResponseChoice } from '../../../../../questionTypes';
import type { QuestionType } from '../../../../../types';

import QuestionField from './QuestionField';
import SelectOptions from './SelectOptions';

interface StateProp<T> {
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
  <Stack space="medium">
    <QuestionField
      key="questionField"
      value={state.questionText.value}
      setValue={state.questionText.set}
    />
    {['SingleSelect', 'MultiSelect'].includes(questionType) && (
      <SelectOptions
        options={state.options.value}
        setOptionList={state.options.set}
      />
    )}
  </Stack>
);
