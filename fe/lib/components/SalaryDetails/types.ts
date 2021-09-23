export type Currency = 'AUD' | 'NZD' | 'GBP';
export type PayType = 'Salaried' | 'Hourly' | 'SalariedPlusCommission';

export interface SalaryError {
  payType?: { message: string };
  minPay?: { message: string };
  maxPay?: { message: string };
  payShownOnAd?: { message: string };
}

export interface PayTypeChange {
  key: 'payType';
  type: PayType;
}

export interface PayAmountChange {
  key: 'minPay' | 'maxPay';
  amount: string;
}

export interface PayDescriptionChange {
  key: 'payShownOnAd';
  description: string;
}

interface PayTypeRadioItem {
  label: string;
  value: PayType;
}

export const payTypes: PayTypeRadioItem[] = [
  { label: 'Annual salary', value: 'Salaried' },
  { label: 'Hourly rate', value: 'Hourly' },
  { label: 'Annual and commision', value: 'SalariedPlusCommission' },
];

export const currencies: Record<Currency, string> = {
  AUD: '($AUD)',
  NZD: '($NZD)',
  GBP: '(£GBP)',
};
