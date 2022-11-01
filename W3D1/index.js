/* eslint-disable*/
function print(list) {
  let current = list;
  while (true) {
    console.log(current.value);
    if (current.next == null) {
      break;
    }
    current = current.next;
  }
}

function printRecursion(ele) {
  console.log(ele.value);
  if (ele.next == null) return;
  printRecursion(ele.next);
}

let el4 = {
  value: 4,
  next: null,
};
let el3 = {
  value: 3,
  next: el4,
};
let el2 = {
  value: 2,
  next: el3,
};
let list = {
  value: 1,
  next: el2,
};
printRecursion(list);
