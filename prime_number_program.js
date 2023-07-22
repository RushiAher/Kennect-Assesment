// function to check whether number is prime or not
function isPrime(num) {
    if (num < 2 || (num !== 2 && num % 2 === 0)) {
        return false;
    }
     for (let i = 3; i <= Math.sqrt(num); i += 2) {
       if (num % i === 0) {
         return false;
       }
     }

     return true;
}

// function to find prime number after x
function findNextPrimeNumber(num) {
  let nextNumber = num + 1;
    while (true) {
        if (isPrime(nextNumber)) {
          return nextNumber;
        }
    nextNumber++;
  }
}


const inputNumber = 13;
if (isPrime(inputNumber)) {
  console.log(`${inputNumber} is a prime number.`);
} else {
  console.log(`${inputNumber} is not a prime number.`);
}


const nextPrimeNumber = findNextPrimeNumber(inputNumber);
console.log(`Prime number after ${inputNumber} is ${nextPrimeNumber}`);
console.log(`Difference between ${inputNumber} and ${nextPrimeNumber} is ${nextPrimeNumber-inputNumber}`);