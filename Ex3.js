const Numbers = [0, 5, 0, 3, 0, 9, 2, 0, 7, 0, 0]; 

let zeroCount = 0;

Numbers.forEach(num => zeroCount += (num == 0 ? 1 : 0));

console.log(zeroCount);