export type Currency = 'AUD' | 'NZD' | 'GBP';
export type SalaryType = 'Salaried' | 'Hourly' | 'SalariedPlusCommission';

export interface SalaryError {
  salaryType?: { message: string };
  minimumPay?: { message: string };
  maximumPay?: { message: string };
  salaryDescription?: { message: string };
}

export interface SalaryTypeChange {
  key: 'salaryType';
  type: SalaryType;
}

export interface PayAmountChange {
  key: 'minimumPay' | 'maximumPay';
  amount: string;
}

export interface SalaryDescriptionChange {
  key: 'salaryDescription';
  description: string;
}

interface SalaryTypeRadioItem {
  label: string;
  value: SalaryType;
}

export const salaryTypes: SalaryTypeRadioItem[] = [
  { label: 'Annual salary', value: 'Salaried' },
  { label: 'Hourly rate', value: 'Hourly' },
  { label: 'Annual and commision', value: 'SalariedPlusCommission' },
];

export const currencies: Record<Currency, string> = {
  AUD: '($AUD)',
  NZD: '($NZD)',
  GBP: '(£GBP)',
};
