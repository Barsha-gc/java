function checkPrime(num) {
  if (num <= 1) {
    console.log(`${num} is not a prime number.`);
    return;
  }
  if (num === 2) {
    console.log(`${num} is a prime number.`);
    return;
  }
  if (num % 2 === 0) {
    console.log(`${num} is not a prime number.`);
    return;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      console.log(`${num} is not a prime number.`);
      return;
    }
  }

  console.log(`${num} is a prime number.`);
}
checkPrime(5);
checkPrime(9);  
