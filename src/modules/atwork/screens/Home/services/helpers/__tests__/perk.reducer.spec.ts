import {
  getPerkDataMock,
  getPerksTransformedDataMock,
} from '../../../__tests__/helpers/data/perks';
import { initialPerkTransformed, perkReducer } from '../perk.reducer';

describe('perk reducer', () => {
  const perkDataMock = getPerkDataMock();
  const perksTransformedDataMock = getPerksTransformedDataMock();
  it('should transform from perk to perkTransformed', () => {
    const result = perkDataMock.reduce(perkReducer, initialPerkTransformed);

    expect(result).toEqual(perksTransformedDataMock);
  });
});
