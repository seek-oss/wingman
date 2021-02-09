import { Stack } from 'braid-design-system';
import React from 'react';

import type {
  HookSetterFn,
  OptionListItem,
  QuestionType,
} from '../../../../../types';

import QuestionField from './QuestionField';
import SelectOptions from './SelectOptions';

interface StateProp<T> {
  value: T;
  set: HookSetterFn<T>;
}

interface QuestionInputFieldsProps {
  questionType: QuestionType | '';
  state: {
    questionText: StateProp<string>;
    options: StateProp<OptionListItem[]>;
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
