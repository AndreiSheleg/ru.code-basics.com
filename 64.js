// BEGIN (write your solution here)
const multiplyNumbersFromRange = (start, finish) => {
let i = start;
let multip = 1;

while (i <= finish) {
  multip = multip * i;
  i = i + 1;
};

  return multip;
}
// END
