export interface SalaryError {
  description?: { message: string };
  maximumAmount?: { message: string };
  minimumAmount?: { message: string };
}

export interface PayTypeChange {
  key: 'payType';
  basisCode: string;
  intervalCode: string;
}

export interface PayRangeChange {
  key: 'minimumAmount' | 'maximumAmount';
  amount: string;
}

export interface SalaryCurrencyChange {
  key: 'currency';
  currency: string;
}

export interface SalaryDescriptionChange {
  key: 'description';
  description: string;
}
