import { ProductType } from '../../../interfaces/product-type.enum';
import {
  IDeductible,
  IDeductibleTransformed,
} from '../../../interfaces/deductible.interface';

const deductibleDataMock = [
  {
    type: ProductType.SALARY_ADVANCEMENT,
    amountDeductibleThisMonth: 100,
    symbol: 'R$',
    dueDate: '2020-07-23',
  },
];

const deductibleTransformedDataMock = {
  totalDiscounts: 100,
  dueDate: '2020-07-23',
};

export const getDeductibleDataMock = (): IDeductible[] =>
  JSON.parse(JSON.stringify(deductibleDataMock));

export const getDeductibleTransformedDataMock = (): IDeductibleTransformed =>
  JSON.parse(JSON.stringify(deductibleTransformedDataMock));
