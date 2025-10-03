const employees = [
  { name: 'John', department: 'Engineering', salary: 80000, years: 3 },
  { name: 'Jane', department: 'Engineering', salary: 95000, years: 5 },
  { name: 'Mike', department: 'Marketing', salary: 60000, years: 2 },
  { name: 'Sarah', department: 'Engineering', salary: 75000, years: 1 },
  { name: 'Tom', department: 'Marketing', salary: 55000, years: 4 }
];

const seniorEngineersAvgSalary = employees
  .filter(emp => emp.department === 'Engineering' && emp.years >= 3)
  .map(emp => emp.salary)
  .reduce((acc, salary, index, array) => {
    acc += salary;
    return index === array.length - 1 ? acc / array.length : acc;
  }, 0);

console.log(seniorEngineersAvgSalary); 