import {
  getDeductibleDataMock,
  getDeductibleTransformedDataMock,
} from '../../../__tests__/helpers/data/deductible';
import {
  deductibleReducer,
  initialDeductibleTransformed,
} from '../deductible.reducer';

describe('deductible helper', () => {
  const deductibleDataMock = getDeductibleDataMock();
  const deductibleTransformedDataMock = getDeductibleTransformedDataMock();
  it('should transform from deductible to deductibleTransformed', () => {
    const result = deductibleDataMock.reduce(
      deductibleReducer,
      initialDeductibleTransformed,
    );

    expect(result).toEqual(deductibleTransformedDataMock);
  });
});
