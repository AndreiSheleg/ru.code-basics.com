// BEGIN
const getHiddenCard = (cardNumber, starsCount = 6) => {
  const visibleDigitsLine = cardNumber.slice(12);
  return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
};
// END
