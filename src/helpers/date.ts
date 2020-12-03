export const getPreviousMonthNameByLocale = (
  dateStr: string,
  locale = 'pt-BR',
) => {
  const date = new Date(dateStr);
  const month = date.getUTCMonth();
  const previousMonth = month === 0 ? 11 : month - 1;

  const monthName = new Date(
    date.getUTCFullYear(),
    previousMonth,
    1,
  ).toLocaleString(locale, { month: 'long' });

  return monthName;
};
