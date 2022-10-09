/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
const joinNumbersFromRange = (start, finish) => {
  let result = '';
  let i = start;
  
  while (i <= finish) {
    result = `${result}${i}`
    i = i + 1;
  };
  return result;
}
// END

export default joinNumbersFromRange;
