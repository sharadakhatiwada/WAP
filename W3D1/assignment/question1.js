/* eslint-disable*/
let total = 0;
function getSum(array) {
  if (array.length === 0) {
    return total;
  }
  let element = array.pop();

  total = total + element;
  return getSum(array);
}
let sum = [1, 2, 3, 4];
console.log(getSum(sum));
