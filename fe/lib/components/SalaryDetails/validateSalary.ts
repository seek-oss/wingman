import type { TextField } from 'braid-design-system';
import type { ComponentProps } from 'react';

import { MAX_CHAR_LIMIT } from './SalaryDetails';
import type { SalaryError } from './types';

interface Validation {
  tone: Exclude<ComponentProps<typeof TextField>['tone'], 'caution'>;
  message?: string;
}

export const validateMinAmount = (
  minAmount: string,
  errors?: SalaryError,
): Validation => {
  if (errors?.minimumAmount?.message) {
    return {
      tone: 'critical',
      message: errors.minimumAmount.message,
    };
  }

  if (!minAmount) {
    return { tone: 'neutral' };
  }

  const n = Number(minAmount);

  if (n < 0) {
    return {
      tone: 'critical',
      message: 'Must be positive',
    };
  }

  return { tone: 'neutral' };
};

export const validateMaxAmount = (
  minAmount: string,
  maxAmount: string,
  errors?: SalaryError,
): Validation => {
  if (errors?.maximumAmount?.message) {
    return {
      tone: 'critical',
      message: errors.maximumAmount.message,
    };
  }

  if (
    Boolean(minAmount) &&
    Boolean(maxAmount) &&
    Number(maxAmount) < Number(minAmount)
  ) {
    return {
      tone: 'critical',
      message: 'Must be greater than minimum',
    };
  }

  return { tone: 'neutral' };
};

export const validateDescription = (
  description: string,
  errors?: SalaryError,
): Validation => {
  if (errors?.description?.message) {
    return {
      tone: 'critical',
      message: errors.description.message,
    };
  }

  if (description.length > MAX_CHAR_LIMIT) {
    return {
      tone: 'critical',
      message: `Must not exceed ${MAX_CHAR_LIMIT} characters`,
    };
  }

  return { tone: 'neutral' };
};
