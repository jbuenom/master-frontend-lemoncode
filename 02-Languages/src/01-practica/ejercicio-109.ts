// Includes

function showPrimes(from, to) {
  for (let index = from; index <= to; index++) {
    if(isPrime(index)){
      console.log(`${index} is PRIME!`);
    } else {
      console.log( `${index} is not a prime`);
    }    
  }
}

function isPrime(number: number): boolean {
  if(number === 1) {
    return false;
  }

  for (let index = 2; index < number; index++) {
    if(number % index === 0 ) {
      return false
    }
  }
  return true;
}

// Ejemplo:
console.log(showPrimes(1, 100));                                                                                                                                                       


