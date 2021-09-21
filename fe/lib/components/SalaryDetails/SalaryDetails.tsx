import {
  Column,
  Columns,
  Heading,
  RadioGroup,
  RadioItem,
  Secondary,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { useState } from 'react';

interface SalaryDetailsProps {
  initialPayType?: string;
  initialMinimumPay?: number;
  initialMaximumPay?: number;
}

export const SalaryDetails = (props: SalaryDetailsProps) => {
  const {} = props;

  const [payType, setPayType] = useState('annualSalary');
  const [payInformation, setPayInformation] = useState('');

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
        <Heading level="4">Pay range</Heading>
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
        <Heading level="4">
          Customise the pay information displayed on your ad{' '}
          <Secondary>(Optional)</Secondary>
        </Heading>
        <TextField
          id="customisePayInfo"
          aria-label="customise-pay-information"
          onChange={({ currentTarget }) => {
            // @TODO: Marry up with character limit
            setPayInformation(currentTarget.value);
          }}
          value={payInformation}
          placeholder={'Example content'}
          characterLimit={50}
        />
        <Columns space="none">
          <Column>
            <Text size="xsmall" tone="secondary">
              e.g $50,000 + car + annual bonus
            </Text>
          </Column>
          <Column width="content">
            <Text size="xsmall" tone="secondary">
              Blah
            </Text>
          </Column>
        </Columns>
      </Stack>
    </Stack>
  );
};
