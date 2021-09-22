import {
  Column,
  Columns,
  Heading,
  Inline,
  RadioGroup,
  RadioItem,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { useState } from 'react';

interface SalaryDetailsProps {
  initialPayType?: string;
  initialMinimumPay?: number;
  initialMaximumPay?: number;
  onBlur: (key: string, value: string) => void;
}

export const SalaryDetails = (props: SalaryDetailsProps) => {
  const {} = props;

  const [payType, setPayType] = useState('annualSalary');
  const [payInformation, setPayInformation] = useState('');

  const exceededCharLimit = payInformation.length > 50;

  return (
    <Stack space="xlarge">
      <Heading level="3">Pay details</Heading>

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

      <Stack space="small">
        <Text weight="strong">Pay range</Text>
        <Text size="small" tone="secondary">
          Select a pay range to offer candidates.
        </Text>
        <Columns space="medium">
          <Column>
            <TextField
              id="minPay"
              aria-label="maximum-pay"
              onChange={() => {}}
              value={''}
              placeholder={'Minimum'}
            />
          </Column>
          <Column>
            <TextField
              id="maxPay"
              aria-label="maximum-pay"
              onChange={() => {}}
              value={''}
              placeholder={'Maximum'}
            />
          </Column>
        </Columns>
      </Stack>

      <Stack space="small">
        <Inline space="small">
          <Text weight="strong">Pay shown on your ad</Text>
          <Text tone="secondary">(Optional)</Text>
        </Inline>

        <TextField
          id="customisePayInfo"
          aria-label="customise-pay-information"
          onChange={({ currentTarget }) =>
            setPayInformation(currentTarget.value)
          }
          value={payInformation}
          placeholder={'Example content'}
          tone={exceededCharLimit ? 'critical' : 'neutral'}
          message={
            exceededCharLimit
              ? 'Maximum character limit is 50'
              : 'e.g $50,000 + car + annual bonus'
          }
          characterLimit={50}
        />
      </Stack>
    </Stack>
  );
};
