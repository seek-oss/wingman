export type Currency = 'AUD' | 'NZD' | 'GBP';
export type PayType = 'Salaried' | 'Hourly' | 'SalariedPlusCommission';

interface PayTypeLabels {
  label: string;
  value: PayType;
}

export interface SalaryError {
  payType?: { message: string };
  minPay?: { message: string };
  maxPay?: { message: string };
  payShownOnAd?: { message: string };
}

export interface PayTypeChange {
  key: 'payType';
  value: PayType;
}

export interface PayAmountChange {
  key: 'minPay' | 'maxPay';
  value: string;
}

export interface PayDescriptionChange {
  key: 'payShownOnAd';
  value: string;
}

export const payTypes: PayTypeLabels[] = [
  { label: 'Annual salary', value: 'Salaried' },
  { label: 'Hourly rate', value: 'Hourly' },
  { label: 'Annual and commision', value: 'SalariedPlusCommission' },
];

export const currencies: Record<Currency, string> = {
  AUD: '($AUD)',
  NZD: '($NZD)',
  GBP: '(£GBP)',
};
