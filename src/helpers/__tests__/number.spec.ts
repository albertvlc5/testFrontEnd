import { formatNumberByLocale, formatMoney2Numeral } from '../number';

describe('Format number', () => {
  it('should format a given currency according to the pt-BR format', () => {
    expect(formatNumberByLocale(20000)).toEqual('20.000,00');
  });
  it('should return a number with the thousands dot and the decimals with a comma', () => {
    expect(formatNumberByLocale(20000.9)).toEqual('20.000,90');
  });
  it('should return string money formatted to number', () => {
    const value = 'R$250,00';
    expect(formatMoney2Numeral(value)).toEqual(250);
  });
});
