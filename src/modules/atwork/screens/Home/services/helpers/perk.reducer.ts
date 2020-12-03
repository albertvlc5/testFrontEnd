import { ProductType } from '../../interfaces/product-type.enum';
import { IPerk, IPerkTransformed } from '../../interfaces/perk.interface';

export const initialPerkTransformed = {
  totalAmount: 0,
  salaryAdvancement: {
    totalAmountAvailable: 0,
    amountDeductible: 0,
    currency: '',
  },
  payroll: {
    amountDeductible: undefined,
    totalAmountAvailable: 0,
    currency: '',
  },
};

export const perkReducer = (acumulator: IPerkTransformed, item: IPerk) => {
  const salaryAdvancement =
    item.type === ProductType.SALARY_ADVANCEMENT
      ? {
          totalAmountAvailable: item.totalAmountAvailable,
          amountDeductible: item.amountDeductible,
          currency: item.symbol,
        }
      : acumulator.salaryAdvancement;

  const payroll =
    item.type === ProductType.PAYROLL
      ? {
          amountDeductible: item.amountDeductible,
          currency: item.symbol,
          totalAmountAvailable: item.totalAmountAvailable,
        }
      : acumulator.payroll;

  return {
    totalAmount: acumulator.totalAmount + item.totalAmountAvailable,
    salaryAdvancement: salaryAdvancement,
    payroll: payroll,
  };
};
