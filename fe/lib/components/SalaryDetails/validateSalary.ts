import { TextField } from 'braid-design-system';
import { ComponentProps } from 'react';

import { SalaryError } from './types';

interface Validation {
  tone: ComponentProps<typeof TextField>['tone'];
  message?: string;
}

export const validateSalaryType = (errors?: SalaryError): Validation => {
  if (errors?.basisCode?.message) {
    return {
      tone: 'critical',
      message: errors.basisCode.message,
    };
  }

  return { tone: 'neutral' };
};

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

  if (Boolean(minAmount) && Number(minAmount) < 0) {
    return {
      tone: 'critical',
      message: 'Minimum pay must be greater than 0',
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
      message: 'Maximum pay must be greater than minimum',
    };
  }

  return { tone: 'neutral' };
};

export const validateDescription = (errors?: SalaryError): Validation => {
  if (errors?.description?.message) {
    return {
      tone: 'critical',
      message: errors.description.message,
    };
  }

  return { tone: 'neutral' };
};
