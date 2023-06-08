// Biggest Word

function biggestWord(phrase: string): string {
  const arrWords: string[] = phrase.split(" ");
  const maxSize: number = Math.max(...arrWords.map((el) => el.length));
  return arrWords.filter((el) => el.length === maxSize)[0];
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos Ejercicios de JavaScript")); // "Ejercicios"
