import { Card, Radio, Stack, Text } from 'braid-design-system';
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
  const onChange = (event: React.FormEvent<HTMLFormElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <Card>
      <Stack space="medium">
        <Text size="large">{title}</Text>
        <Stack space="small">
          {choices.map((choice) => (
            <Radio
              checked={choice === value}
              id={componentId('single-select', id, choice)}
              key={choice}
              label={choice}
              value={choice}
              onChange={onChange}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

export default SingleSelect;
