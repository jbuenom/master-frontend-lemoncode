console.log("************** RETOS *********************");

// Acceso en profundida

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

// Apartado A

const deepGet = (myObject, ...args) => {
  const [first, ...others] = args;

  if (args.length === 0) {
    return myObject;
  }

  if (args.length === 1) {
    return myObject[first];
  }

  return deepGet(myObject[first], ...others);
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

// Apartado B

const myObj = {};

const deepSet = (value, obj, ...args) => {
  const [first, ...others] = args;
  if(args.length === 0) {
    return obj;
  }
  
  if(args.length === 1){
    obj[first] = value
    return obj;
  }
  
  obj[first] = {
        ...obj[first],
        [others[0]]: value
  }
  
  return obj;
}

deepSet(1, myObj, "a", "b");
console.log(JSON.stringify(myObj));  // {a: { b: 1}}
deepSet(2, myObj, "a", "c");
console.log(JSON.stringify(myObj));  // {a: { b: 1, c: 2}}
deepSet(3, myObj, "a");
console.log(JSON.stringify(myObj));  // {a: 3}
deepSet(4, myObj);
console.log(JSON.stringify(myObj));  // Do nothing // {a: 3}