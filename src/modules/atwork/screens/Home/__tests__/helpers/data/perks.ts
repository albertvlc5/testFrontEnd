import { IPerk, IPerkTransformed } from '../../../interfaces/perk.interface';
import { ProductType } from '../../../interfaces/product-type.enum';

const perkDataMock = [
  {
    type: ProductType.SALARY_ADVANCEMENT,
    amountDeductible: 100,
    totalAmountAvailable: 900,
    symbol: 'R$',
  },
  {
    type: ProductType.PAYROLL,
    amountDeductible: null,
    totalAmountAvailable: 10000,
    symbol: 'R$',
  },
];

const perksTransformedDataMock = {
  totalAmount: 10900,
  salaryAdvancement: {
    amountDeductible: 100,
    totalAmountAvailable: 900,
    currency: 'R$',
  },
  payroll: {
    amountDeductible: null,
    totalAmountAvailable: 10000,
    currency: 'R$',
  },
};

export const getPerksTransformedDataMock = (): IPerkTransformed =>
  JSON.parse(JSON.stringify(perksTransformedDataMock));

export const getPerkDataMock = (): IPerk[] =>
  JSON.parse(JSON.stringify(perkDataMock));
