export type Currency = 'AUD' | 'NZD' | 'GBP';
export type SalaryType = 'Salaried' | 'Hourly' | 'SalariedPlusCommission';
export type Interval = 'Hour' | 'Year';

export interface SalaryError {
  basisCode?: { message: string };
  minimumAmount?: { message: string };
  maximumAmount?: { message: string };
  description?: { message: string };
}

export interface SalaryTypeChange {
  key: 'basisCode';
  salary: {
    code: SalaryType;
    interval: Interval;
  };
}

export interface PayAmountChange {
  key: 'minimumAmount' | 'maximumAmount';
  amount: string;
}

export interface SalaryDescriptionChange {
  key: 'description';
  description: string;
}

interface SalaryTypeRadioItem {
  label: string;
  value: SalaryType;
}

export const salaryTypes: SalaryTypeRadioItem[] = [
  { label: 'Annual salary', value: 'Salaried' },
  { label: 'Hourly rate', value: 'Hourly' },
  { label: 'Annual and commission', value: 'SalariedPlusCommission' },
];

export const currencies: Record<Currency, string> = {
  AUD: '($AUD)',
  NZD: '($NZD)',
  GBP: '(£GBP)',
};
