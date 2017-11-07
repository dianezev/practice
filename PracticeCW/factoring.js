// Note that nothing
// greater than n/2 could possibly be a factor,
// aside from n itself - so find the largest
// integer that's worth checking:
// If n is EVEN, the largest factor is n/2
// Otherwise, the largest poss. factor is n/3
// (you could expand this for add'l efficiency with huge
// numbers - i.e. if not div by 2 or 3, check div by 5, etc)

Array.from(Array(8), (x, i) => i + 1);

// Diane submitted this first:
// Used chained mapping & filtering to get actual factors
// (see improved chaining in 2nd submission below)
function factor(n) {
    if (n < 1 || !Number.isInteger(n)) return -1;
    
    // Try factors up through n/2 for even n, otherwise n/3
    var upTo = n % 2 ? Math.floor(n/3) : n/2;
    
    /*
     * Fill array with possible factors & use
     * % modulus to test each one.
     * Replace invalid factors with 0
     * Then filter out zeros
     * Add 'n' to array of valid factors 
     * and then reverse order
     */
    var factors = Array(upTo)
                    .fill()
                    .map((val1, j) => j + 1)
                    .map((val2) => ((n % val2)===0) ? val2 : 0)
                    .filter(val3 => val3 > 0)
                    .concat(n)
                    .reverse();
    
    return factors;
}

console.log(factor(8));


// Diane submitted this second (improved chaining):
function factor(n) {
    if (n < 1 || !Number.isInteger(n)) return -1;
    
    // Try factors up through n/2 for even n, otherwise n/3
    var upTo = n % 2 ? Math.floor(n/3) : n/2;
    
    /*
     * Fill array with possible factors & 
     * filter to those that pass modulus test
     * Add 'n' to array of valid factors 
     * and then reverse order
     */
    var factors = Array.from(Array(upTo), (val1, i) => i + 1)
                    .filter(val3 => !(n % val3))
                    .concat(n)
                    .reverse();
    
    return factors;
}

console.log(factor(8));

// (Diane) Use mapping & filtering to get actual factors (step by step)
function factorVer2(n) {
    var upTo = n % 2 ? Math.floor(n/3) : n/2;
    
    // Get range of numbers to try as possible factors
    var possFactors = Array(upTo).fill().map((val, j) => j + 1);
    
    // Test each possible factor & create true/false array
    var trueOrFalse = possFactors.map((val) => (n % val)===0);
    
    // Multiply two arrays to get actual factors 
    // (filter out 0s)
    var factors = possFactors.map((val,j) => val * trueOrFalse[j]).filter(val => val > 0);

    // Add 'n' to array of factors
    factors.push(n);
    
    return factors;
}

console.log(factorVer2(8));


// (Diane) Use for loop to check for valid factors
function factorVer3(n) {
    var upTo = n % 2 ? Math.floor(n/3) : n/2;

    // Get range of numbers to try as possible factors
    var possFactors = Array(upTo).fill().map((val, j) => j + 1);
    
    var factors = [1];
    
    for (var i = 1, l = possFactors.length; i < l ; i++) {
        if (n % possFactors[i] === 0) {
            factors.push(possFactors[i]);
        }
    }
    
    // Add 'n' to array of valid factors
    factors.push(n);
    
    return factors;
}

console.log(factorVer3(8));


var x = [2,3,0,6,7].reduce((a,b,i, other)=>{
    console.log(a);
    console.log(b);
    console.log(i);
    console.log(other);
    return a + b;
});

// Solution from CodeWars (but doesn't stop checking at x/2):
//function factors(x){
//  if (x != parseInt(x, 10) || x < 1) return -1;
//  return Array
//        .from(Array(x), (x, i) => x = i+1)
//        .filter(n => !(x % n))
//        .sort((a, b) => b - a);
//}

// Adapted from another solution from CodeWars:
//  (but doesn't stop checking vals > x/2):
function factors(x) {
    if (x < 1 || x !== Math.floor(x)) return -1;

    var newArr = [];
    for (var i = x; i >=1; i--) {
      if (x % i === 0) {
        newArr.push(i);
      }
    }
    return newArr;
}
console.log(factors(8));