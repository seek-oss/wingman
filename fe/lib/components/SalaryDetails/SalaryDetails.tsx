import type { ApolloClient } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
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

import type {
  CurrenciesQuery,
  CurrenciesQueryVariables,
  PayType,
  PayTypesQuery,
  PayTypesQueryVariables,
} from '../../types/seekApi.graphql';

import { CURRENCIES, PAY_TYPES } from './queries';
import type {
  PayRangeChange,
  PayTypeChange,
  SalaryCurrencyChange,
  SalaryDescriptionChange,
  SalaryError,
} from './types';
import {
  validateDescription,
  validateMaxAmount,
  validateMinAmount,
} from './validateSalary';

import * as styles from './styles.css';

export const MAX_CHAR_LIMIT = 50;

export interface SalaryDetailsProps {
  client?: ApolloClient;
  context?: Record<string, unknown>;
  currencyUsageTypeCode?: 'SEEKMarket' | 'All';
  errors?: SalaryError;
  initialCurrency?: string;
  initialDescription?: string;
  initialMaximumAmount?: string;
  initialMinimumAmount?: string;
  initialBasisCode?: string;
  initialIntervalCode?: string;
  onBlur: (
    item:
      | PayRangeChange
      | PayTypeChange
      | SalaryCurrencyChange
      | SalaryDescriptionChange,
  ) => void;
  schemeId: string;
}

function useEffectfulState<T>(initialState: T) {
  const [state, setState] = useState(initialState);

  // Make sure we rerender the input UI when the state value is reset
  useEffect(() => {
    if (initialState || initialState === '') {
      setState(initialState);
    }
  }, [initialState]);

  return [state, setState] as const;
}

export const SalaryDetails = ({
  client,
  context,
  currencyUsageTypeCode = 'SEEKMarket',
  errors,
  initialCurrency = 'AUD',
  initialDescription = '',
  initialMaximumAmount = '',
  initialMinimumAmount = '',
  initialBasisCode = 'Salaried',
  initialIntervalCode = 'Year',
  onBlur,
  schemeId,
}: SalaryDetailsProps) => {
  const id = useId();

  const { data: payTypesData } = useQuery<
    PayTypesQuery,
    PayTypesQueryVariables
  >(PAY_TYPES, {
    client,
    context,
    fetchPolicy: 'cache-first',
    variables: { schemeId },
  });

  const { data: currenciesData } = useQuery<
    CurrenciesQuery,
    CurrenciesQueryVariables
  >(CURRENCIES, {
    client,
    context,
    fetchPolicy: 'cache-first',
    variables: { usageTypeCode: currencyUsageTypeCode },
  });

  const [currency, setCurrency] = useEffectfulState(initialCurrency);
  const [description, setDescription] = useEffectfulState(initialDescription);
  const [max, setMax] = useEffectfulState(initialMaximumAmount);
  const [min, setMin] = useEffectfulState(initialMinimumAmount);
  const [payType, setPayType] = useEffectfulState(
    `${initialBasisCode}.${initialIntervalCode}`,
  );

  // We validate `blurredMax` only after a user has tabbed off the text field
  const [blurredMax, setBlurredMax] = useEffectfulState(initialMaximumAmount);

  const validation = {
    description: validateDescription(description, errors),
    max: validateMaxAmount(min, blurredMax, errors),
    min: validateMinAmount(min, errors),
  };

  const payTypes =
    payTypesData?.payTypes.reduce<Record<string, PayType>>(
      (acc, data) => ({
        ...acc,
        [`${data.basisCode}.${data.intervalCode}`]: data,
      }),
      {},
    ) ?? {};

  return (
    <Stack space="xlarge">
      <Heading level="3">Pay details</Heading>

      <Stack space="small">
        <RadioGroup
          aria-label="Pay type"
          id={`${id}-pay-type`}
          onChange={(event) => {
            const value = event.currentTarget.value;
            const [basisCode, intervalCode] = value.split('.');

            setPayType(value);
            onBlur({
              key: 'payType',
              basisCode,
              intervalCode,
            });
          }}
          size="small"
          value={payType}
        >
          {Object.entries(payTypes).map(([key, data]) => (
            <RadioItem key={key} label={data.label} value={key} />
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
                const value = event.currentTarget.value;
                setCurrency(value);
                onBlur({
                  key: 'currency',
                  currency: value,
                });
              }}
              value={currency}
            >
              {(currenciesData?.currencies ?? []).map(({ code }) => (
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
                per {payTypes[payType]?.intervalCode.toLowerCase()}
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
