// Zip

function zipObject(keys, values) {
  const obj = {};
  keys.map((el, index) => {
    if(values[index] !== undefined) {
      Object.defineProperty(obj, el, {
        value: values[index]
      })
    }
  });
  return obj;
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}

