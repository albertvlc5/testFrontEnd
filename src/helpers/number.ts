import 'intl';
import 'intl/locale-data/jsonp/pt';
export const formatNumberByLocale = (value: number, locale = 'pt-Br'): string =>
  new Intl.NumberFormat(locale, { minimumFractionDigits: 2 }).format(value);

export const formatMoney2Numeral = (money: string): number => {
  const [value, cents] = String(money).split(',');
  return Number([value.replace(/\D+/g, ''), cents].join('.'));
};

export const numberToCurrencyIntl = (
  value: number = 0,
  locale = 'pt-BR',
  currency = 'BRL',
) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
