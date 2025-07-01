function primenumber(n) {
  if (n <= 1) {
    return "Number is not a prime number";
  }

  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      return "Number is not a prime number";
    }
  }

  return "Number is a prime number";
}

const number = 5;
console.log(primenumber(number)); // Output: Number is not a prime number
//number must not one or less than 1 and the loop goes from 2 to hlaf of the range of given number (condtion to check) if it reminder is equal to 0 then it not prime
