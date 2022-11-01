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
  let perosnName = "";
  for (let dep in department) {
    if (Array.isArray(department[dep])) {
      let obj = department[dep];
      for (let nameofObj of obj) {
        return (perosnName = perosnName + nameofObj.name);
      }
    } else {
    }
  }
}
console.log(sumSalaries(company));
