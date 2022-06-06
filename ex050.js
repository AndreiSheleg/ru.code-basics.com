// BEGIN (write your solution here)
const getHiddenCard = (cardNumber, base = 4) => {
  const result = cardNumber.slice(-4);
  return `${'*'.repeat(base)}${result}`;
};
// END

export default getHiddenCard;
