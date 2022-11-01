/* eslint-disable*/
function contains(elements, item, indx = 0) {
  if (indx === elements.length) {
    return false;
  }
  if (elements[indx] === item) {
    return true;
  }
  return contains(elements, indx + 1);
}

// let elements = ["apple, ball", "grapes"];
// console.log(contains(0, elements));
let elements = "apple".split("");
console.log(contains(elements, "a"));

function concateNate(strElements, indx = 0, output = "") {
  if (indx === strElements.length) {
    return output;
  }
  output = output + strElements[indx];
  return concateNate(strElements, indx + 1, output);
}

let strEle = ["apple", "banana", "orange"];
console.log(concateNate(strEle));

//find last index of element
function findLastIndex(arrElements, item, indx = 0, lastIndex = -1) {
  if (arrElements.length === indx) {
    return lastIndex;
  }
  if (arrElements[indx] === item) {
    return indx;
  }
  return findLastIndex(arrElements, item, indx + 1, lastIndex);
}
let fruits = ["apple", "ball", "cat", "apple", "ball"];
console.log(findLastIndex(fruits, "ball"));

//find last index of element

function findIndex(arrElements, item, index = 0) {
  if (arrElements.length === index) {
    return -1;
  }
  if (arrElements[index] === item) {
    return index;
  }
  return findIndex(arrElements, item, index + 1);
}
let items = ["apple", "samsung", "nokia", "apple"];
console.log(findIndex(items, "oppo"));
