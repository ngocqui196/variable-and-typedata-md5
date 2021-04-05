import './scss/styles.scss';

function square(num: number): number {
  return num * num;
}

console.log(square(5));
// Output: 25

// Function expression
const squareFE = function (num: number): number {
  return num * num;
}
console.log(squareFE(34))

// Higher-order function
function add(a: number): Function {
  return function(b: number): number {
    return a + b;
  }
}

const addWith5 = add(5)(6);
const addWith6 = add(5)(6);
console.log(addWith5());
console.log(addWith6());


