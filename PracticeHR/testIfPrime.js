// HackerRank Day 25
// Test if prime

// Sample input:
// 3  // how many integers follow to be tested
// 143
// 17
// 1003

// Output:
// Not prime
// Prime
// Not prime

function processData(input) {
    var data = input.split('\n').map(Number);
    var res = false;
    
    for (var i = 1; i <= data[0]; i++) {
        res = isPrime(data[i]);
        console.log (res ? 'Prime' : 'Not prime');
    }
    
    function isPrime(n) {
        // First check if n = 1 - if yes return false for 'Not prime'
        if ((n == 1)) {
            return false;
        }
        
        // Use Sieve of Eratosthenes
        // Check if n = 2, 3, 5 or 7 - if yes return true for 'Prime'
        if ((n == 2) || (n == 3) || (n == 5) || (n == 7)) {
            return true;
        }
        
        // Then check if div by 2, 3, 5 or 7 - if yes return false for 'Not prime'
        if (!(n % 2) || !(n % 3) || !(n % 5) || !(n % 7)) {
            return false;
        }
        
        // Otherwise check all multiples of 6 + or - 1 (i.e. 11, 13, 17, 19...)
        // This will test all possible prime factors (& some extras, but it's faster than checking every integer...)
        for (var i = 6, l = Math.ceil(Math.sqrt(n)) + 1; i <= l ; i+=6) {
            if (!(n % (i + 1)) || !(n % (i - 1))) {
                return false;
            }
        }
        
        // Otherwise # is prime, so return true
        return true;
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
