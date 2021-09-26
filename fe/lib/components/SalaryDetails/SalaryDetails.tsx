import {
  Column,
  Columns,
  Heading,
  RadioGroup,
  RadioItem,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { useState } from 'react';

import {
  Currency,
  PayAmountChange,
  SalaryDescriptionChange,
  SalaryError,
  SalaryType,
  SalaryTypeChange,
  currencies,
  salaryTypes,
} from './types';

const MAX_CHAR_LIMIT = 50;

export interface SalaryDetailsProps {
  currency: Currency;
  initialMinimumPay?: string;
  initialMaximumPay?: string;
  initialSalaryDescription?: string;
  initialSalaryType?: SalaryType;
  errors?: SalaryError;
  onBlur: (
    item: SalaryTypeChange | PayAmountChange | SalaryDescriptionChange,
  ) => void;
}

export const SalaryDetails = (props: SalaryDetailsProps) => {
  const {
    currency,
    errors,
    initialMinimumPay,
    initialMaximumPay,
    initialSalaryType,
    initialSalaryDescription,
    onBlur,
  } = props;

  const [minPay, setMinPay] = useState(initialMinimumPay ?? '');
  const [maxPay, setMaxPay] = useState(initialMaximumPay ?? '');
  const [salaryType, setSalaryType] = useState(initialSalaryType ?? 'Salaried');
  const [salaryDescription, setSalaryDescription] = useState(
    initialSalaryDescription ?? '',
  );

  const exceededCharLimit = salaryDescription.length > MAX_CHAR_LIMIT;
  const payShownOnAdTone =
    errors?.salaryDescription?.message || exceededCharLimit
      ? 'critical'
      : 'neutral';
  const payShownOnAdMessage = exceededCharLimit
    ? `Maximum character limit is ${MAX_CHAR_LIMIT}`
    : 'e.g $50,000 + car + annual bonus';

  return (
    <Stack space="xlarge">
      <Heading level="3">Pay details</Heading>

      <RadioGroup
        id="salaryType"
        value={salaryType}
        onChange={({ currentTarget: { value } }) => {
          setSalaryType(value as SalaryType);
          onBlur({ key: 'salaryType', type: value as SalaryType });
        }}
        tone={errors?.salaryType?.message ? 'critical' : 'neutral'}
        message={errors?.salaryType?.message}
        label="Pay type"
      >
        {salaryTypes.map(({ label, value }) => (
          <RadioItem key={value} label={label} value={value} />
        ))}
      </RadioGroup>

      <Stack space="small">
        <Text weight="strong">Pay range {currencies[currency]}</Text>
        <Text size="small" tone="secondary">
          Select a pay range to offer candidates.
        </Text>
        <Columns space="medium" collapseBelow="tablet">
          <Column width="1/2">
            <TextField
              id="minimumPay"
              aria-label="minimum-pay"
              onChange={({ currentTarget: { value } }) => setMinPay(value)}
              onBlur={({ currentTarget: { value } }) =>
                onBlur({ key: 'minimumPay', amount: value })
              }
              onClear={() => onBlur({ key: 'minimumPay', amount: '' })}
              value={minPay}
              tone={errors?.minimumPay?.message ? 'critical' : 'neutral'}
              message={errors?.minimumPay?.message}
              placeholder="Minimum"
              type="number"
            />
          </Column>
          <Column width="1/2">
            <TextField
              id="maximumPay"
              aria-label="maximum-pay"
              onChange={({ currentTarget: { value } }) => setMaxPay(value)}
              onBlur={({ currentTarget: { value } }) =>
                onBlur({ key: 'maximumPay', amount: value })
              }
              onClear={() => onBlur({ key: 'maximumPay', amount: '' })}
              value={maxPay}
              tone={errors?.maximumPay?.message ? 'critical' : 'neutral'}
              message={errors?.maximumPay?.message}
              placeholder="Maximum"
              type="number"
            />
          </Column>
        </Columns>
      </Stack>

      <TextField
        id="salaryDescription"
        label="Pay shown on your ad"
        secondaryLabel="Optional"
        onChange={({ currentTarget }) =>
          setSalaryDescription(currentTarget.value)
        }
        onBlur={({ currentTarget: { value } }) =>
          onBlur({ key: 'salaryDescription', description: value })
        }
        onClear={() => onBlur({ key: 'salaryDescription', description: '' })}
        value={salaryDescription}
        placeholder={'Example content'}
        tone={payShownOnAdTone}
        message={errors?.salaryDescription?.message ?? payShownOnAdMessage}
        characterLimit={MAX_CHAR_LIMIT}
      />
    </Stack>
  );
};
