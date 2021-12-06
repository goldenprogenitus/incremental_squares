export const formatNumbers = number => {
  const length = Math.ceil(Math.log10(number + 1));
  if (length >= 4 && length < 7) {
    return formatString(number, length, 3, 2, "K");
  }
  if (length >= 7 && length < 10) {
    return formatString(number, length, 6, 5, "M");
  }
  if (length >= 10 && length < 13) {
    return formatString(number, length, 9, 8, "B");
  }
  if (length >= 13 && length < 16) {
    return formatString(number, length, 12, 11, "T");
  }
  if (length >= 16 && length < 19) {
    return formatString(number, length, 15, 14, "Q");
  }
  if (length >= 19 && length < 22) {
    return formatString(number, length, 18, 17, "Qi");
  }
  if (length >= 22 && length < 25) {
    return formatString(number, length, 21, 20, "Si");
  }
  if (length >= 25 && length < 28) {
    return formatString(number, length, 24, 23, "Sep");
  }
  if (length >= 28 && length < 31) {
    return formatString(number, length, 27, 26, "Oct");
  }
  if (length >= 31 && length < 34) {
    return formatString(number, length, 30, 29, "Ni");
  }
  if (length >= 34 && length < 37) {
    return formatString(number, length, 33, 32, "Dec");
  }
  if (length >= 37) {
    return `${number.toString().substring(0, 1)}.${number
      .toString()
      .substring(1, 3)}x10e${length}`;
  }
  return Math.round(number * 100) / 100;
};

const formatString = (number, length, first, second, letter) =>
  `${number.toString().substring(0, length - first)}.${number
    .toString()
    .substring(length - first, length - second)}${letter}`;
