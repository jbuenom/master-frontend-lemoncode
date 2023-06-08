// Deep Equal

// Apartado A

const userA = { name: "María", age: 30 };
const clonedUserA = { name: "María", age: 30 };

console.log(userA === clonedUserA); // false

function isEqual(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(userA, clonedUserA)); // true

// Apartado B

const userB = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
const clonedUserB = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"]
};

function isDeepEqual(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    const aKeyIsObject = typeof a[key] === "object";
    if ((aKeyIsObject && !isDeepEqual(a[key], b[key])) || (!aKeyIsObject && a[key] !== b[key])) {
      return false;
    } 
  }
  return true;
}

console.log(isDeepEqual(userB, clonedUserB)); // true
