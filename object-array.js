const players = [{}, {}, {}];
const employees = [
  { name: "Ashik", designation: "Content Writer", salary: 25000 },
  { name: "Atik", designation: "Developer", salary: 29000 },
  { name: "Abdur Rahim", designation: "Digital Marketer", salary: 21000 },
  { name: "Asifa", designation: "Web Dev", salary: 29000 },
];

// Changing the first object's name to Ashraf
employees[0].name = "Ashraf";
// console.log(employees[1]);
// console.log(employees[2].designation);
// console.log(employees[3].salary);

// for (let employee of employees) {
//   console.log(employee.designation, employee.salary);
// }

for (const emp of employees) {
  const person = emp;
  const personInfo = person.name + " : " + person.salary;
  console.log(personInfo);
}
