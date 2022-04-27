export const categoryOptions = [
  { value: 'misc', label: 'Miscellaneous' },
  { value: 'car', label: 'Car' },
  { value: 'food', label: 'Food' },
  { value: 'housing', label: 'Housing' },
  { value: 'fuel', label: 'Fuel' },
  { value: 'utilities', label: 'Utilities' },
  { value: 'phone', label: 'Phone' },
  { value: 'investments', label: 'Investments' },
];

export const monthDict = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export function compareMonths(stra, strb) {
  const amonth = stra.split('/')[0];
  const ayear = stra.split('/')[1];
  const bmonth = strb.split('/')[0];
  const byear = strb.split('/')[1];
  if (ayear > byear) return 1;
  else if (byear > ayear) return -1;
  else {
    if (amonth - bmonth > 0) return 1;
    else return -1;
  }
}
