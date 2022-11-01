/* eslint-disable*/
let simpleObject = { a: 1, b: 2, c: { d: [1, 2] } };
let leaves = [];
let keys = Object.keys(simpleObject);
function listLeaves(simpleObject, getValue = "") {
  //   console.log(keys);
  //   console.log(leaves);
  //   console.log(simpleObject);
  let currentKey = keys.shift();
  let currentValue = simpleObject[currentKey];
  if (keys.length === 0) {
    return leaves;
  }

  for (keyObj in simpleObject) {
    getValue = simpleObject[keyObj];
    leaves.push(getValue);
  }

  return listLeaves(simpleObject, getValue);

  //   console.log(currentKey);
  //   leaves.push({ currentKey: currentValue });
  //   return listLeaves(simpleObject);
  //   if (Array.isArray(currentValue) || typeof currentValue !== "object") {
  //     return leaves.push({ [currentKey]: currentValue });
  //   }
  //   if (keys.length === 0) {
  //     return leaves;
  //   }
  //   let currentKey = keys.shift();
  //   let currentValue = simpleObject[currentKey];

  //   if (Array.isArray(currentValue) || typeof currentValue !== "object") {
  //     leaves.push({ [currentKey]: currentValue });
  //   } else {
  //     simpleObject = currentValue;
  //     keys = Object.keys(currentValue);
  //   }
  //   return listLeaves(simpleObject, keys);
}
console.log(listLeaves(simpleObject));

// function findAllKeysWithGivenValue(simpleObject){

// }
