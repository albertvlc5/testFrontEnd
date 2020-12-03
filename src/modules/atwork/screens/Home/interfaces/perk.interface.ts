import { ProductType } from './product-type.enum';

export interface IPerk {
  type: ProductType;
  amountDeductible: number;
  totalAmountAvailable: number;
  symbol: string;
}

export interface IPerkSalaryAdvancement {
  amountDeductible: number;
  totalAmountAvailable: number;
  currency: string;
}

export interface IPerkPayroll {
  amountDeductible?: number;
  totalAmountAvailable: number;
  currency: string;
}

export interface IPerkTransformed {
  totalAmount: number;
  salaryAdvancement: IPerkSalaryAdvancement;
  payroll: IPerkPayroll;
}
