// Exercise 1: Flattening

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((total, current) => total.concat(current), []));
// → [1, 2, 3, 4, 5, 6];