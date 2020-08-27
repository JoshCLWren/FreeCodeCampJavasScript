function sumPrimes(max) {
        var sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return primes.reduce(reducer);
    
  }
  
  console.log(sumPrimes(10)); //should return 17

//   A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
//   For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

