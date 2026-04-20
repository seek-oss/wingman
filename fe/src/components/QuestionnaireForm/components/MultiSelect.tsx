import { Checkbox, Stack, Text } from 'braid-design-system';
import type React from 'react';

import { componentId } from './componentId';

interface MultiSelectProps {
  options: string[];
  value: string[];
  setValue: (value: string[]) => void;
  id: string;
  title: string;
}

const MultiSelect = ({
  options,
  value,
  setValue,
  id,
  title,
}: MultiSelectProps) => {
  const onChange =
    (choice: string) => (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget.checked) {
        const newValues = [...(value || []), choice];

        setValue(newValues);
      } else {
        const newValues = value.filter((val) => val !== choice);

        setValue(newValues);
      }
    };

  return (
    <Stack space="medium">
      <Text weight="strong">{title}</Text>

      {options.map((choice) => (
        <Checkbox
          checked={value && value.includes(choice)}
          id={componentId('multi-select', id, choice)}
          key={choice}
          label={choice}
          reserveMessageSpace={false}
          onChange={onChange(choice)}
        />
      ))}
    </Stack>
  );
};

export default MultiSelect;
