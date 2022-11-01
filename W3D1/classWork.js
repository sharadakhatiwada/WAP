/* eslint-disable*/
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdepName in department) {
      let subDep = department[subdepName];
      sum += sumSalaries(subDep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
console.log(sumSalaries(company));
