console.log("************** DELIVERABLE 03 *********************");

const obj = {
    id: 1,
    title: 'Batman',
    year: '1986'
}

// Clone

function clone(source) {
    return { ...source };
  }

console.log('Clone', clone(obj));

// Merge

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    return {
        ...clone(target),
        ...clone(source)
    }
  }

console.log('Merge', merge(a,b));