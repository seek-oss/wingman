import { RadioGroup, RadioItem, Stack } from 'braid-design-system';
import React, { useState } from 'react';

interface SalaryDetailsProps {}

export const SalaryDetails = (props: SalaryDetailsProps) => {
  const {} = props;

  const [payType, setPayType] = useState('annualSalary');

  return (
    <Stack space="small">
      <RadioGroup
        id="payType"
        value={payType}
        onChange={({ currentTarget: { value } }) => setPayType(value)}
        label="Pay type"
      >
        <RadioItem label="Annual salary" value="annualSalary" />
        <RadioItem label="Hourly rate" value="hourlyRate" />
        <RadioItem label="Annual and commision" value="annualCommision" />
      </RadioGroup>
    </Stack>
  );
};
