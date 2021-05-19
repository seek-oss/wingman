import { TextField } from 'braid-design-system';
import React from 'react';

interface QuestionFieldProps {
  value: string;
  setValue: (value: string) => void;
}

export default ({ value, setValue }: QuestionFieldProps) => (
  <TextField
    id="id"
    label="Question"
    onClear={() => setValue('')}
    value={value}
    onChange={(event) => setValue(event.currentTarget.value)}
  />
);
