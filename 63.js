// @ts-check
/* eslint operator-assignment: 0 */

const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  let i = initialNumber;

  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');
  // END
};

export default printNumbers;
