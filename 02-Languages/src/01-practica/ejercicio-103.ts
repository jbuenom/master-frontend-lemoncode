// Check Arguments

function checkArguments(input: string): string {
  return input === undefined ? 'Unknown' : input || "";
}

// Ejemplo
console.log(checkArguments(undefined)); // "Unknown"
console.log(checkArguments(null)); // ""
console.log(checkArguments("Prueba")); // "Prueba"
