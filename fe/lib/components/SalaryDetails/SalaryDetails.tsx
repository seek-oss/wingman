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
  PayDescriptionChange,
  PayType,
  PayTypeChange,
  SalaryError,
  currencies,
  payTypes,
} from './types';

const MAX_CHAR_LIMIT = 50;

export interface SalaryDetailsProps {
  currency: Currency;
  initialMinimumPay?: string;
  initialMaximumPay?: string;
  initialPayType?: PayType;
  errors?: SalaryError;
  onBlur: (
    item: PayTypeChange | PayAmountChange | PayDescriptionChange,
  ) => void;
}

export const SalaryDetails = (props: SalaryDetailsProps) => {
  const {
    currency,
    errors,
    initialMinimumPay,
    initialMaximumPay,
    initialPayType,
    onBlur,
  } = props;

  const [minPay, setMinPay] = useState(initialMinimumPay ?? '');
  const [maxPay, setMaxPay] = useState(initialMaximumPay ?? '');
  const [payType, setPayType] = useState(initialPayType ?? 'Salaried');
  const [payInformation, setPayInformation] = useState('');

  const exceededCharLimit = payInformation.length > MAX_CHAR_LIMIT;
  const payShownOnAdTone =
    errors?.payShownOnAd?.message || exceededCharLimit ? 'critical' : 'neutral';
  const payShownOnAdMessage = exceededCharLimit
    ? `Maximum character limit is ${MAX_CHAR_LIMIT}`
    : 'e.g $50,000 + car + annual bonus';

  return (
    <Stack space="xlarge">
      <Heading level="3">Pay details</Heading>

      <RadioGroup
        id="payType"
        value={payType}
        onChange={({ currentTarget: { value } }) => {
          setPayType(value as PayType);
          onBlur({ key: 'payType', type: value as PayType });
        }}
        tone={errors?.payType?.message ? 'critical' : 'neutral'}
        message={errors?.payType?.message}
        label="Pay type"
      >
        {payTypes.map(({ label, value }) => (
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
              id="minPay"
              aria-label="minimum-pay"
              onChange={({ currentTarget: { value } }) => setMinPay(value)}
              onBlur={({ currentTarget: { value } }) =>
                onBlur({ key: 'minPay', amount: value })
              }
              onClear={() => onBlur({ key: 'minPay', amount: '' })}
              value={minPay}
              tone={errors?.minPay?.message ? 'critical' : 'neutral'}
              message={errors?.minPay?.message}
              placeholder="Minimum"
              type="number"
            />
          </Column>
          <Column width="1/2">
            <TextField
              id="maxPay"
              aria-label="maximum-pay"
              onChange={({ currentTarget: { value } }) => setMaxPay(value)}
              onBlur={({ currentTarget: { value } }) =>
                onBlur({ key: 'maxPay', amount: value })
              }
              onClear={() => onBlur({ key: 'maxPay', amount: '' })}
              value={maxPay}
              tone={errors?.maxPay?.message ? 'critical' : 'neutral'}
              message={errors?.maxPay?.message}
              placeholder="Maximum"
              type="number"
            />
          </Column>
        </Columns>
      </Stack>

      <TextField
        id="payShownOnAd"
        label="Pay shown on your ad"
        secondaryLabel="Optional"
        onChange={({ currentTarget }) => setPayInformation(currentTarget.value)}
        onBlur={({ currentTarget: { value } }) =>
          onBlur({ key: 'payShownOnAd', description: value })
        }
        onClear={() => onBlur({ key: 'payShownOnAd', description: '' })}
        value={payInformation}
        placeholder={'Example content'}
        tone={payShownOnAdTone}
        message={errors?.payShownOnAd?.message ?? payShownOnAdMessage}
        characterLimit={MAX_CHAR_LIMIT}
      />
    </Stack>
  );
};
