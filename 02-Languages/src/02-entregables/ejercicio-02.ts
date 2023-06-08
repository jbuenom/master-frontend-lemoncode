console.log("************** DELIVERABLE 02 *********************");

const arr1 = [1,2,3,4,5];
const arr2 = ["hello", "my", "friend"];
const arr3 = [true,false,true];
const arr4 = [{color: "Orange"}, {name: 'Javi'}];

const concat = (a: unknown[], b: unknown[]): unknown[] => [...a, ...b];

console.log(concat(arr1,arr2));

// Modification for multiple arrays

const concatMultiple = (...arr: unknown[]): unknown[] => [...arr].flat();

console.log(concatMultiple(arr1,arr2,arr3,arr4));
