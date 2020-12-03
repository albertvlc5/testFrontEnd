import { getPreviousMonthNameByLocale } from '../date';

describe('getPreviousMonthNameByLocale', () => {
  it('should return the previous name of a month from the following date 2020-01-01', () => {
    const date = '2020-01-01';
    expect(getPreviousMonthNameByLocale(date)).toBe('dezembro');
  });

  it('should return the previous name of a month from the following date 2020-01-31', () => {
    const date = '2020-01-31';
    expect(getPreviousMonthNameByLocale(date)).toBe('dezembro');
  });

  it('should return the previous name of a month from the following date 2020-03-01', () => {
    const date = '2020-03-01';
    expect(getPreviousMonthNameByLocale(date)).toBe('fevereiro');
  });

  it('should return the previous name of a month from the following date 2020-12-31', () => {
    const date = '2020-12-31';
    expect(getPreviousMonthNameByLocale(date)).toBe('novembro');
  });

  it('should return the previous name of a month from the following date 2020-02-29', () => {
    const date = '2020-02-29';
    expect(getPreviousMonthNameByLocale(date)).toBe('janeiro');
  });
});
