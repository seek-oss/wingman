import {
  Column,
  Columns,
  Heading,
  RadioGroup,
  RadioItem,
  Stack,
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

type OnBlur = PayTypeChange | PayAmountChange | PayDescriptionChange;

interface SalaryDetailsProps {
  currency: Currency;
  initialMinimumPay?: string;
  initialMaximumPay?: string;
  initialPayType?: PayType;
  errors?: SalaryError;
  onBlur: ({ key, value }: OnBlur) => void;
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
    errors?.payType?.message || exceededCharLimit ? 'critical' : 'neutral';
  const payShownOnAdMessage =
    errors?.payType?.message ?? exceededCharLimit
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
          onBlur({ key: 'payType', value: value as PayType });
        }}
        tone={errors?.payType?.message ? 'critical' : 'neutral'}
        message={errors?.payType?.message}
        label="Pay type"
      >
        {payTypes.map(({ label, value }) => (
          <RadioItem key={value} label={label} value={value} />
        ))}
      </RadioGroup>

      <Columns space="medium" alignY="bottom">
        <Column>
          <TextField
            id="minPay"
            label={`Pay range ${currencies[currency]}`}
            description="Select a pay range to offer candidates."
            onChange={({ currentTarget: { value } }) => setMinPay(value)}
            onBlur={({ currentTarget: { value } }) =>
              onBlur({ key: 'minPay', value })
            }
            onClear={() => onBlur({ key: 'minPay', value: '' })}
            value={minPay}
            tone={errors?.minPay?.message ? 'critical' : 'neutral'}
            message={errors?.minPay?.message}
            placeholder="Minimum"
            type="number"
          />
        </Column>
        <Column>
          <TextField
            id="maxPay"
            aria-label="maximum-pay"
            onChange={({ currentTarget: { value } }) => setMaxPay(value)}
            onBlur={({ currentTarget: { value } }) =>
              onBlur({ key: 'maxPay', value })
            }
            onClear={() => onBlur({ key: 'maxPay', value: '' })}
            value={maxPay}
            tone={errors?.maxPay?.message ? 'critical' : 'neutral'}
            message={errors?.maxPay?.message}
            placeholder="Maximum"
            type="number"
          />
        </Column>
      </Columns>

      <TextField
        id="payShownOnAd"
        label="Pay shown on your ad"
        secondaryLabel="Optional"
        onChange={({ currentTarget }) => setPayInformation(currentTarget.value)}
        onBlur={({ currentTarget: { value } }) =>
          onBlur({ key: 'payShownOnAd', value })
        }
        onClear={() => onBlur({ key: 'payShownOnAd', value: '' })}
        value={payInformation}
        placeholder={'Example content'}
        tone={payShownOnAdTone}
        message={payShownOnAdMessage}
        characterLimit={MAX_CHAR_LIMIT}
      />
    </Stack>
  );
};
