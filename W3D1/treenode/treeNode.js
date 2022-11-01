/* eslint-disable*/
function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function consolingLog(node) {
  if (node == null) {
    return;
  }
  console.log(node.value);
  for (let child of node.descendents) consolingLog(child);
}
// consolingLog(abe);
// function contains(node, type) {
//   if (node == null) {
//     return false;
//   }
//   console.log(node);
//   for (let child of node.descendents) {
//     return contains(child, type);
//   }
//   if (node.value == type) {
//     return true;
//   } else return false;
// }
// console.log(contains(abe, "Bart"));

function recursive(value) {
  return value + " modified";
}

function treeModifier(node, modiferFunc) {
  if (node == null) {
    return;
  }
  node.value = modiferFunc(node.value);
  for (let child of node.descendents) {
    treeModifier(child, modiferFunc);
  }
}

// treeModifier(abe, recursive);
// consolingLog(abe);

let accumulator = [];
function treeCollector(node) {
  if (node == null) {
    return;
  }

  accumulator.push(node.value);
  for (let child of node.descendents) {
    treeCollector(child);
  }
  return accumulator;
}
console.log(treeCollector(abe));
