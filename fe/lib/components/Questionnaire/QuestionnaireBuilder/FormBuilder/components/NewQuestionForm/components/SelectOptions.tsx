import {
  Actions,
  Button,
  Column,
  Columns,
  Stack,
  TextField,
} from 'braid-design-system';
import React, { useState } from 'react';

import type { HookSetterFn, OptionListItem } from '../../../../../types';

import CentredFlexBox from './CentredFlexBox';
import DisplayOption from './DisplayOption';

interface SelectOptionsProps {
  options: OptionListItem[];
  setOptionList: HookSetterFn<OptionListItem[]>;
}

const splitArrayAt = <T extends any>(inputArray: T[], index: number) => {
  const beforeItem = inputArray.slice(0, index);
  const afterItem = inputArray.slice(index + 1);
  const item = inputArray[index];
  return { beforeItem, item, afterItem };
};

export default ({ options, setOptionList }: SelectOptionsProps) => {
  const [option, setOption] = useState('');

  const submitHandler = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setOptionList([...options, { text: option, preferredIndicator: false }]);
    setOption('');
  };

  const setPreferred = (itemText: string, newStatus: boolean) => {
    const itemIndex = options.findIndex(({ text }) => text === itemText);
    const { beforeItem, afterItem, item } = splitArrayAt(options, itemIndex);

    setOptionList([
      ...beforeItem,
      {
        text: item.text,
        preferredIndicator: newStatus,
      },
      ...afterItem,
    ]);
  };

  const removeItem = (itemText: string) => () => {
    const itemIndex = options.findIndex(({ text }) => text === itemText);
    const { beforeItem, afterItem } = splitArrayAt(options, itemIndex);
    setOptionList([...beforeItem, ...afterItem]);
  };

  const setOptionToTargetValue = (event: React.FormEvent<HTMLInputElement>) =>
    setOption(event.currentTarget.value);

  const setOptionToBlank = () => setOption('');

  return (
    <Stack space="medium">
      <form onSubmit={submitHandler}>
        <Columns alignY="bottom" space="small">
          <Column width="4/5">
            <TextField
              id="id"
              label="Add options"
              onClear={setOptionToBlank}
              value={option}
              onChange={setOptionToTargetValue}
            />
          </Column>
          <Column>
            <CentredFlexBox justifyContent="flexEnd">
              <Actions>
                <Button onClick={submitHandler}>Add</Button>
              </Actions>
            </CentredFlexBox>
          </Column>
        </Columns>
      </form>

      <Stack space="small">
        {options.map(({ text, preferredIndicator }, index) => (
          <DisplayOption
            key={text}
            text={text}
            showDivider={index !== 0}
            preferredIndicator={preferredIndicator}
            setPreferred={setPreferred}
            removeItem={removeItem(text)}
          />
        ))}
      </Stack>
    </Stack>
  );
};
