const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const findFirstPrime = (arr) => {
  for (let num of arr) {
    if (isPrime(num)) return num;
  }
  return null;
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findFirstPrime(numbers)); // Returns 2
