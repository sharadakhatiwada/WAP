/* eslint-disable*/
// let simpleObject = {
//   a: 1,
//   b: 2,
//   c: { d: [1, 2], e: { a: [2, 3, 4] } },
//   g: { h: 3 },
// };
let simpleObject = {
  glossary: {
    title: "example glossary",
    GlossSeeAlso: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          SortAs: "SGML",
          GlossSeeAlso: "Standard Generalized Markup Language",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para: "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML", "S"],
          },
          GlossSee: "markup",
        },
      },
    },
  },
};

let keys = Object.keys(simpleObject);

let count = 0;

function countKeys(simpleObject) {
  for (let obj in simpleObject) {
    count = count + 1;
    if (
      typeof simpleObject[obj] === "object" &&
      !Array.isArray(simpleObject[obj])
    ) {
      countKeys(simpleObject[obj]);
    }
  }
  return count;
}

// console.log(countKeys(simpleObject));
let newArray = [];
function listLeaves(simpleObject) {
  for (let obj in simpleObject) {
    if (
      typeof simpleObject[obj] === "object" &&
      !Array.isArray(simpleObject[obj])
    ) {
      listLeaves(simpleObject[obj]);
    } else {
      newArray.push({ [obj]: simpleObject[obj] });
    }
  }
  return newArray;
}

// console.log(listLeaves(simpleObject));
let givenKeyArray = [];
function findValuesOfGivenKey(simpleObject, myValue) {
  for (let obj in simpleObject) {
    if (
      typeof simpleObject[obj] === "object" &&
      !Array.isArray(simpleObject[obj])
    ) {
      findValuesOfGivenKey(simpleObject[obj], myValue);
    } else {
      if (Array.isArray(simpleObject[obj])) {
        if (simpleObject[obj].includes(myValue)) {
          givenKeyArray.push(obj);
        }
      } else {
        if (simpleObject[obj] == myValue) givenKeyArray.push(obj);
      }
    }
  }
  return givenKeyArray;
}
console.log(findValuesOfGivenKey(simpleObject, "SGML"));

// let newValueArray = [];
// function findValuesOfGivenKey(simpleObject, myKey) {
//   for (let obj in simpleObject) {
//     if (
//       typeof simpleObject[obj] === "object" &&
//       !Array.isArray(simpleObject[obj])
//     ) {
//       findValuesOfGivenKey(simpleObject[obj], myKey);
//     } else {
//       if (obj == myKey) {
//         newValueArray.push(simpleObject[obj]);
//       }
//     }
//   }
//   return newValueArray;
// }
// console.log(findValuesOfGivenKey(simpleObject, "title"));
