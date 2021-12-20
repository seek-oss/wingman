import {
  Dropdown,
  RadioGroup,
  RadioItem,
  Stack,
  Text,
} from 'braid-design-system';
import React from 'react';

import { componentId } from './componentId';

interface SingleSelectProps {
  choices: string[];
  value: string;
  setValue: (value: string) => void;
  id: string;
  title: string;
}

const SingleSelect = ({
  choices,
  value,
  setValue,
  id,
  title,
}: SingleSelectProps) => {
  const onChange = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue(event.currentTarget.value);
  };

  return (
    <Stack space="medium">
      <Text id={componentId('single-select-label', id)} weight="strong">
        {title}
      </Text>

      {choices.length > 5 ? (
        <Dropdown
          aria-labelledby={componentId('single-select-label', id)}
          id={componentId('single-select', id)}
          onChange={onChange}
          value={value}
        >
          {choices.map((choice) => (
            <option key={choice}>{choice}</option>
          ))}
        </Dropdown>
      ) : (
        <RadioGroup
          aria-labelledby={componentId('single-select-label', id)}
          id={componentId('single-select', id)}
          onChange={onChange}
          value={value}
        >
          {choices.map((choice) => (
            <RadioItem key={choice} label={choice} value={choice} />
          ))}
        </RadioGroup>
      )}
    </Stack>
  );
};

export default SingleSelect;
