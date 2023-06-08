// Clone Merge

// Apartado A

function cloneA(source) {
  return { ...source };
}

// Apartado B

function mergeB(source, target) {
  return {
    ...cloneA(target),
    ...cloneA(source)
}
}

// Por ejemplo, dados estos 2 objetos:
const obj1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
const obj2 = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
console.log(mergeB(obj1, obj2)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
