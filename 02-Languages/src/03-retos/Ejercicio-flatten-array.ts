// Aplanando arrays

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flatArray = (arr) => {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatArray(val)) : acc.concat(val), []);
};

console.log(flatArray(sample)); // [1, 2, 3, 4, 5, 6, 7, 8, 9];