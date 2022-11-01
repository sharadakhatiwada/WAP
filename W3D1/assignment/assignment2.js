/* eslint-disable*/
function factorial(number, result = 1) {
  if (number === 1) {
    return result;
  }
  result = result * number;
  return factorial(number - 1, result);
}
console.log(factorial(4));
