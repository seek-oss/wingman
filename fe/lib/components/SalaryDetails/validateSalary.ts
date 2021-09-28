import { TextField } from 'braid-design-system';
import { ComponentProps } from 'react';

import { MAX_CHAR_LIMIT } from './SalaryDetails';
import { SalaryError } from './types';

interface Validation {
  tone: ComponentProps<typeof TextField>['tone'];
  message?: string;
}

export const validateSalaryType = (errors?: SalaryError): Validation => {
  if (errors?.salaryType?.message) {
    return {
      tone: 'critical',
      message: errors.salaryType.message,
    };
  }

  return { tone: 'neutral' };
};

export const validateMinimumPay = (
  minPay: string,
  errors?: SalaryError,
): Validation => {
  if (errors?.minimumPay?.message) {
    return {
      tone: 'critical',
      message: errors.minimumPay.message,
    };
  }

  if (Boolean(minPay) && Number(minPay) < 0) {
    return {
      tone: 'critical',
      message: 'Minimum pay must be greater than 0',
    };
  }

  return { tone: 'neutral' };
};

export const validateMaximumPay = (
  minPay: string,
  maxPay: string,
  errors?: SalaryError,
): Validation => {
  if (errors?.maximumPay?.message) {
    return {
      tone: 'critical',
      message: errors.maximumPay.message,
    };
  }

  if (Boolean(minPay) && Boolean(maxPay) && Number(maxPay) < Number(minPay)) {
    return {
      tone: 'critical',
      message: 'Maximum pay must be greater than minimum',
    };
  }

  return { tone: 'neutral' };
};

export const validateSalaryDescription = (
  salaryDescription: string,
  errors?: SalaryError,
): Validation => {
  if (errors?.salaryDescription?.message) {
    return {
      tone: 'critical',
      message: errors.salaryDescription.message,
    };
  }

  if (salaryDescription.length > MAX_CHAR_LIMIT) {
    return {
      tone: 'critical',
      message: `Maximum character limit is ${MAX_CHAR_LIMIT}`,
    };
  }

  return { tone: 'neutral' };
};
