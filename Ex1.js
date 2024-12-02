const num = 123;
let result = Number(num % 2 == 0) + Number(num % 3 == 0) + Number(num % 5 == 0);
console.log(result);