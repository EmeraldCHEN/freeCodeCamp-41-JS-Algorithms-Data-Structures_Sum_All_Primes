
function sumPrimes(max) {
    // function isPrime checking if the number presented is prime or not
    function isPrime(num){
        for (let i = 2; i <= num; i++){
            if(num % i === 0 && num!= i){
               // Not a prime if it is divisible by any number that is not itself
                return false;
            }
        }
        // if it passes the for loop's conditions it is a prime
        return true;
    }
    // 1 is not a prime, so return nothing, also stops the recursive calls
    if (max === 1){
        return 0;
    }
    if(isPrime(max) === false){
        // for non primes check the next number down from the given maximum number
        return sumPrimes(max - 1);
    }else{
        // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function
        return max + sumPrimes(max - 1);
    }
}







// Retrieed from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes/
