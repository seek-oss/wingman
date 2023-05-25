import {
  Box,
  Column,
  Columns,
  Dropdown,
  Heading,
  RadioGroup,
  RadioItem,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { useEffect, useId, useState } from 'react';

import {
  type PayRangeChange,
  type PayType,
  type PayTypeChange,
  SALARY_CURRENCIES,
  type SalaryCurrency,
  type SalaryCurrencyChange,
  type SalaryDescriptionChange,
  type SalaryError,
  payTypes,
} from './types';
import {
  validateDescription,
  validateMaxAmount,
  validateMinAmount,
} from './validateSalary';

import * as styles from './styles.css';

export const MAX_CHAR_LIMIT = 50;

export interface SalaryDetailsProps {
  errors?: SalaryError;
  initialCurrency?: SalaryCurrency;
  initialDescription?: string;
  initialMaximumAmount?: string;
  initialMinimumAmount?: string;
  initialPayType?: PayType;
  onBlur: (
    item:
      | PayRangeChange
      | PayTypeChange
      | SalaryCurrencyChange
      | SalaryDescriptionChange,
  ) => void;
}

function useEffectfulState<T>(initialState: T) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (initialState) {
      setState(initialState);
    }
  }, [initialState]);

  return [state, setState] as const;
}

export const SalaryDetails = ({
  errors,
  initialCurrency = SALARY_CURRENCIES.default,
  initialDescription = '',
  initialMaximumAmount = '',
  initialMinimumAmount = '',
  initialPayType = 'Annual salary',
  onBlur,
}: SalaryDetailsProps) => {
  const id = useId();

  const [currency, setCurrency] = useEffectfulState(initialCurrency);
  const [description, setDescription] = useEffectfulState(initialDescription);
  const [max, setMax] = useEffectfulState(initialMaximumAmount);
  const [min, setMin] = useEffectfulState(initialMinimumAmount);
  const [payType, setPayType] = useEffectfulState<PayType>(initialPayType);

  // We validate `blurredMax` only after a user has tabbed off the text field
  const [blurredMax, setBlurredMax] = useEffectfulState(initialMaximumAmount);

  const validation = {
    description: validateDescription(description, errors),
    max: validateMaxAmount(min, blurredMax, errors),
    min: validateMinAmount(min, errors),
  };

  return (
    <Stack space="xlarge">
      <Heading level="3">Pay details</Heading>

      <Stack space="small">
        <RadioGroup
          aria-label="Pay type"
          id={`${id}-pay-type`}
          onChange={(event) => {
            const value = event.currentTarget.value as PayType;

            setPayType(value);
            onBlur({
              ...payTypes[value],
              key: 'payType',
              payType: value,
            });
          }}
          size="small"
          value={payType}
        >
          {Object.keys(payTypes).map((key) => (
            <RadioItem key={key} label={key} value={key} />
          ))}
        </RadioGroup>
      </Stack>

      <Stack space="small">
        <Text weight="strong">Pay range</Text>

        <Text size="small" tone="secondary">
          Enter a pay range to offer candidates (this will not show on your ad).
        </Text>

        <Columns collapseBelow="desktop" space="small">
          <Column>
            <Dropdown
              aria-label="Currency"
              id={`${id}-currency`}
              onChange={(event) => {
                const value = event.currentTarget.value as SalaryCurrency;
                setCurrency(value);
                onBlur({
                  key: 'currency',
                  currency: value,
                });
              }}
              value={currency}
            >
              {SALARY_CURRENCIES.active.map((code) => (
                <option key={code}>{code}</option>
              ))}
            </Dropdown>
          </Column>

          <Column>
            <TextField
              aria-label="Minimum amount"
              id={`${id}-min`}
              message={validation.min.message}
              onBlur={(event) =>
                onBlur({
                  key: 'minimumAmount',
                  amount: event.currentTarget.value,
                })
              }
              onChange={(event) => setMin(event.currentTarget.value)}
              onClear={() => {
                const amount = '';
                setMin(amount);
                onBlur({
                  key: 'minimumAmount',
                  amount,
                });
              }}
              placeholder="Minimum"
              tone={validation.min.tone}
              type="number"
              value={min}
            />
          </Column>

          <Column width="content">
            <Box
              alignItems="center"
              className={styles.fieldHeight}
              display="flex"
            >
              <Text size="small">to</Text>
            </Box>
          </Column>

          <Column>
            <TextField
              aria-label="Maximum amount"
              id={`${id}-max`}
              onBlur={(event) => {
                const amount = event.currentTarget.value;
                setBlurredMax(amount);
                onBlur({ key: 'maximumAmount', amount });
              }}
              onChange={(event) => setMax(event.currentTarget.value)}
              onClear={() => {
                const amount = '';
                setMax(amount);
                setBlurredMax(amount);
                onBlur({ key: 'maximumAmount', amount });
              }}
              message={validation.max.message}
              placeholder="Maximum"
              tone={validation.max.tone}
              type="number"
              value={max}
            />
          </Column>

          <Column width="content">
            <Box
              alignItems="center"
              className={styles.fieldHeight}
              display="flex"
            >
              <Text size="small">
                per {payTypes[payType].intervalCode.toLowerCase()}
              </Text>
            </Box>
          </Column>
        </Columns>
      </Stack>

      <TextField
        id={`${id}-description`}
        label="Pay shown on your ad"
        secondaryLabel="optional"
        onBlur={({ currentTarget: { value } }) => {
          setDescription('');
          onBlur({ key: 'description', description: value });
        }}
        onChange={({ currentTarget }) => setDescription(currentTarget.value)}
        onClear={() => onBlur({ key: 'description', description: '' })}
        value={description}
        tone={validation.description.tone}
        message={
          validation.description.message ?? 'e.g. $50,000 + annual bonus'
        }
        characterLimit={MAX_CHAR_LIMIT}
      />
    </Stack>
  );
};
