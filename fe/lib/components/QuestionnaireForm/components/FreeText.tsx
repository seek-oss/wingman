import { Stack, Text, Textarea } from 'braid-design-system';
import React from 'react';

import { componentId } from './componentId';

interface FreeTextProps {
  value: string;
  setValue: (value: string) => void;
  title: string;
}

const FreeText = ({ value, setValue, title }: FreeTextProps) => {
  const onChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };
  return (
    <Stack space="medium">
      <Text id={componentId('free-text-label', title)} weight="strong">
        {title}
      </Text>

      <Textarea
        aria-labelledby={componentId('free-text-label', title)}
        id={componentId('free-text', title)}
        value={value}
        onChange={onChange}
      />
    </Stack>
  );
};

export default FreeText;
