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
  validateDescription,
  validateMaxAmount,
  validateMinAmount,
  validateSalaryType,
} from './validateSalary';

export interface SalaryDetailsProps {
  currency: Currency;
  initialMinimumAmount?: string;
  initialMaximumAmount?: string;
  initialDescription?: string;
  initialBasisCode?: SalaryType;
  errors?: SalaryError;
  onBlur: (
    item: SalaryTypeChange | PayAmountChange | SalaryDescriptionChange,
  ) => void;
}

export const SalaryDetails = (props: SalaryDetailsProps) => {
  const {
    currency,
    errors,
    initialMinimumAmount,
    initialMaximumAmount,
    initialBasisCode,
    initialDescription,
    onBlur,
  } = props;

  const [minAmount, setMinAmount] = useState(initialMinimumAmount ?? '');

  // `blurredMaxAmount` is used to validate the maximum pay only after a user has tabbed off the text field
  const [{ maxAmount, blurredMaxAmount }, setMaxPay] = useState({
    maxAmount: initialMaximumAmount ?? '',
    blurredMaxAmount: initialMaximumAmount ?? '',
  });
  const [salaryType, setSalaryType] = useState(initialBasisCode ?? 'Salaried');
  const [description, setDescription] = useState(initialDescription ?? '');

  const minAmountValidation = validateMinAmount(minAmount, errors);
  const maxAmountValidation = validateMaxAmount(
    minAmount,
    blurredMaxAmount,
    errors,
  );
  const descriptionValidation = validateDescription(errors);
  const salaryTypeValidation = validateSalaryType(errors);

  return (
    <Stack space="xlarge">
      <Heading level="3">Pay details</Heading>

      <RadioGroup
        id="salaryType"
        value={salaryType}
        onChange={({ currentTarget: { value } }) => {
          const type = value as SalaryType;

          setSalaryType(type);
          onBlur({
            key: 'basisCode',
            salary: {
              code: type,
              interval: type === 'Hourly' ? 'Hour' : 'Year',
            },
          });
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
          Enter a pay range to offer candidates
        </Text>
        <Columns space="medium" collapseBelow="tablet">
          <Column width="1/2">
            <TextField
              id="minimumAmount"
              aria-label="minimum-amount"
              onChange={({ currentTarget: { value } }) => setMinAmount(value)}
              onBlur={({ currentTarget: { value } }) =>
                onBlur({ key: 'minimumAmount', amount: value })
              }
              onClear={() => onBlur({ key: 'minimumAmount', amount: '' })}
              value={minAmount}
              tone={minAmountValidation.tone}
              message={minAmountValidation.message}
              placeholder="Minimum"
              type="number"
            />
          </Column>
          <Column width="1/2">
            <TextField
              id="maximumAmount"
              aria-label="maximum-amount"
              onChange={({ currentTarget: { value } }) => {
                setMaxPay({ maxAmount: value, blurredMaxAmount });
              }}
              onBlur={({ currentTarget: { value } }) => {
                setMaxPay({ maxAmount, blurredMaxAmount: value });
                onBlur({ key: 'maximumAmount', amount: value });
              }}
              onClear={() => onBlur({ key: 'maximumAmount', amount: '' })}
              value={maxAmount}
              tone={maxAmountValidation.tone}
              message={maxAmountValidation.message}
              placeholder="Maximum"
              type="number"
            />
          </Column>
        </Columns>
      </Stack>

      <TextField
        id="salaryDescription"
        label="Pay shown on your ad"
        secondaryLabel="optional"
        onChange={({ currentTarget }) => setDescription(currentTarget.value)}
        onBlur={({ currentTarget: { value } }) =>
          onBlur({ key: 'description', description: value })
        }
        onClear={() => onBlur({ key: 'description', description: '' })}
        value={description}
        placeholder={'Example content'}
        tone={descriptionValidation.tone}
        message={descriptionValidation.message ?? 'E.g. $50,000 + annual bonus'}
      />
    </Stack>
  );
};
