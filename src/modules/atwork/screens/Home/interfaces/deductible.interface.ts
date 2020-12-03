import { ProductType } from './product-type.enum';

export interface IDeductible {
  type: ProductType;
  amountDeductibleThisMonth: number;
  symbol: string;
  dueDate: string;
  totalAmoutRequested?: number;
  totalAmountDeducted?: number;
  totalInstallments?: number;
  installmentsDeducted?: number;
}

export interface IDiscount {
  type: ProductType;
  amount: number;
}

export interface IPayrollDeductible {
  type: ProductType;
  amountDeductibleThisMonth: number;
  currency: string;
  dueDate: string;
  totalAmoutRequested?: number;
  totalAmountDeducted?: number;
  totalInstallments?: number;
  installmentsDeducted?: number;
}

export interface IDeductibleTransformed {
  totalDiscounts: number;
  dueDate: string;
}
