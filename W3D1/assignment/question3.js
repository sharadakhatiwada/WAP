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
let parents = [];
function findParents(node) {
  //   console.log(node.descendents);
  if (node.descendents.length === 0) {
    return parents;
  }

  parents.push(node);

  for (let child of node.descendents) {
    return findParents(child);
  }
}

console.log(findParents(abe));
