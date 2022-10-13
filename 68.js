1// BEGIN (write your solution here)
2const filterString = (str, char) => {
3let result = '';
4let i = 0;
5while (i < str.length) {
6  if (str[i] !== char) {
7    result = `${result}${str[i]}`;
8  };
9  i++;
10}
11  return result;
12}
13// END
