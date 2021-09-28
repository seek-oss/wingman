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
import {
  validateMaximumPay,
  validateMinimumPay,
  validateSalaryDescription,
  validateSalaryType,
} from './validateSalary';

export const MAX_CHAR_LIMIT = 50;

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

  // Add blurredMaxPay as a mechanism to only validate once a user has lost focus on the text field
  const [{ maxPay, blurredMaxPay }, setMaxPay] = useState({
    maxPay: initialMaximumPay ?? '',
    blurredMaxPay: initialMaximumPay ?? '',
  });
  const [salaryType, setSalaryType] = useState(initialSalaryType ?? 'Salaried');
  const [salaryDescription, setSalaryDescription] = useState(
    initialSalaryDescription ?? '',
  );

  const minPayValidation = validateMinimumPay(minPay, errors);
  const maxPayValidation = validateMaximumPay(minPay, blurredMaxPay, errors);
  const salaryDescriptionValidation = validateSalaryDescription(
    salaryDescription,
    errors,
  );
  const salaryTypeValidation = validateSalaryType(errors);

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
        tone={salaryTypeValidation.tone}
        message={salaryTypeValidation.message}
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
              tone={minPayValidation.tone}
              message={minPayValidation.message}
              placeholder="Minimum"
              type="number"
            />
          </Column>
          <Column width="1/2">
            <TextField
              id="maximumPay"
              aria-label="maximum-pay"
              onChange={({ currentTarget: { value } }) => {
                setMaxPay({ maxPay: value, blurredMaxPay });
              }}
              onBlur={({ currentTarget: { value } }) => {
                setMaxPay({ maxPay, blurredMaxPay: value });
                onBlur({ key: 'maximumPay', amount: value });
              }}
              onClear={() => onBlur({ key: 'maximumPay', amount: '' })}
              value={maxPay}
              tone={maxPayValidation.tone}
              message={maxPayValidation.message}
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
        tone={salaryDescriptionValidation.tone}
        message={
          salaryDescriptionValidation.message ??
          'e.g $50,000 + car + annual bonus'
        }
        characterLimit={MAX_CHAR_LIMIT}
      />
    </Stack>
  );
};
