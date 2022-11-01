/* eslint-disable*/
// function factorial(n, j) {
//   let result = 1;
//   for (let i = 0; i < j; i++) {
//     result *= n;
//   }
//   return result;
// }
// factorial(2, 2);

// let sum = 0;
// function findSum(n) {
//   if (n == 0) return n;
//   return n + findSum(n - 1);
// }

// console.log(findSum(10));

let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null,
};
let node4 = {
  name: "label",
  value: "Name",
  children: null,
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null,
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5],
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

function print(node) {
  if (node == null) {
    return;
  }
  let output = { name: node.name, value: node.value };
  if (node.children !== null) {
    for (let child of node.children) {
      print(child);
    }
  }

  console.log(output);
}
print(node1);
