// Subsets

function subsets(word: string) {
  return word.substring(1).split("").map((el, index) => word.substring(index + 1 ) );
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]


