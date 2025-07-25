export const toPersianNumber = (number: number | string) => {
  const persianDigits = {
    '0': '۰',
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
  };

  // Convert input to string and remove any existing commas or underscores
  const cleanedNumber = String(number).replace(/[_,]/g, '');

  // Add thousand separators to the cleaned number (in standard digits)
  const numberWithSeparators = cleanedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Convert to Persian digits
  const persianNumber = numberWithSeparators.replace(/[0-9]/g, (digit) => persianDigits[digit as keyof typeof persianDigits]);

  return persianNumber;
};