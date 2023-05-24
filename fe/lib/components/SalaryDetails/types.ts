const DEFAULT_SALARY_CURRENCY = 'AUD';

export const SALARY_CURRENCIES = {
  default: DEFAULT_SALARY_CURRENCY,
  active: [
    DEFAULT_SALARY_CURRENCY,
    'HKD',
    'IDR',
    'MYR',
    'NZD',
    'PHP',
    'SGD',
    'THB',
    'USD',
  ],
  legacy: ['BDT', 'CNY', 'EUR', 'GBP', 'INR', 'JPY', 'VND'],
} as const;

type ActiveSalaryCurrency = (typeof SALARY_CURRENCIES)['active'][number];

type LegacySalaryCurrency = (typeof SALARY_CURRENCIES)['legacy'][number];

export type SalaryCurrency = ActiveSalaryCurrency | LegacySalaryCurrency;

export type SalaryBasis = 'Hourly' | 'Salaried' | 'SalariedPlusCommission';

export type SalaryInterval = 'Hour' | 'Month' | 'Year';

export interface SalaryError {
  description?: { message: string };
  maximumAmount?: { message: string };
  minimumAmount?: { message: string };
}

interface SalaryCodes {
  basisCode: SalaryBasis;
  intervalCode: SalaryInterval;
}

export interface PayTypeChange extends SalaryCodes {
  key: 'payType';
  payType: PayType;
}

export interface PayRangeChange {
  key: 'minimumAmount' | 'maximumAmount';
  amount: string;
}

export interface SalaryCurrencyChange {
  key: 'currency';
  currency: SalaryCurrency;
}

export interface SalaryDescriptionChange {
  key: 'description';
  description: string;
}

export type PayType =
  | 'Hourly rate'
  | 'Monthly salary'
  | 'Annual salary'
  | 'Annual plus commission';

export const payTypes: Record<PayType, SalaryCodes> = {
  'Hourly rate': {
    basisCode: 'Hourly',
    intervalCode: 'Hour',
  },
  'Monthly salary': {
    basisCode: 'Salaried',
    intervalCode: 'Month',
  },
  'Annual salary': {
    basisCode: 'Salaried',
    intervalCode: 'Year',
  },
  'Annual plus commission': {
    basisCode: 'SalariedPlusCommission',
    intervalCode: 'Year',
  },
};

/**
 * TODO: replace this with `Location.currencies` from the SEEK API.
 */
export const salaryCurrencyForCountryCode: Record<
  string,
  ActiveSalaryCurrency
> = {
  AU: 'AUD',
  HK: 'HKD',
  ID: 'IDR',
  MY: 'MYR',
  NZ: 'NZD',
  PH: 'PHP',
  SG: 'SGD',
  TH: 'THB',
  US: 'USD',
};
