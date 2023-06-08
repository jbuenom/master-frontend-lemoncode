console.log("************** DELIVERABLE 01 *********************");

const arr = ["this","is",true, 1,"a","test"];

// Head

const head = <T>([first]: T[]): T => first;

console.log('Head', head(arr));

// Tail

const tail = <T>([first, ...others]: T[]): T[] => others;

console.log('Tail', tail(arr));

// Init

const init = <T>(arr: T[]): T[] => arr.filter((el, index) => index !== arr.length-1);

console.log('Init', init(arr));

// Last

const last = <T>(arr: T[]): T  => arr.filter((el, index) => index === arr.length-1)[0];

console.log('Last', last(arr));