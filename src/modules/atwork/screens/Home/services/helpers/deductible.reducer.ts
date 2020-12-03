import {
  IDeductible,
  IDeductibleTransformed,
} from '../../interfaces/deductible.interface';

export const initialDeductibleTransformed = {
  totalDiscounts: 0,
  dueDate: '',
};

export const deductibleReducer = (
  acumulator: IDeductibleTransformed,
  item: IDeductible,
) => ({
  totalDiscounts: acumulator.totalDiscounts + item.amountDeductibleThisMonth,
  dueDate: item.dueDate,
});
