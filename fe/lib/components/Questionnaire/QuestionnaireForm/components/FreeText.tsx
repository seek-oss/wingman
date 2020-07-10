import { Card, Stack, Text, Textarea } from 'braid-design-system';
import React from 'react';

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
    <Card>
      <Stack space="medium">
        <Text size="large">{title}</Text>
        <Textarea id="id" value={value} onChange={onChange} />
      </Stack>
    </Card>
  );
};

export default FreeText;
