// Diane's 2nd submission to CodeWars
// (First solution was slower because I incremented the loop in a slower way)
// My code is less readable than optimal CodeWars solution but it is faster.

/*
 * Function finds first two consecutive prime numbers in [m, n]
 * that have a gap = g
 */
function gap(g, m, n) {
    var a = 0;
    
    for ( var j = m; j <=n ; j++) {
        if(primeCheck(j)) {
            if (((j - a) === g) && (a !== 0)) {
                return [a, j];
            } else {
                a = j;
            }
        }
    }
        
    return null;
}

/*
 * Function primeCheck returns true if n is prime
 * Only need to test for factors up to sqrt of n, because
 * if there isn't a factor between 2 and sqrt of n, 'n' will be prime.
 */ 
function primeCheck(n) {
    var incr = 2;
    
    if (!(Number.isInteger(n) && n > 1)) {
        return false;
    
    } else if ((n === 2) || (n === 3)) {
        return true;
    
    } else {

        // First test if n div by 2 or 3
        if (!(n % 2) || !(n % 3)) {
            return false;

        // NOTE: For i = 5 up through sqrt of n, toggle increment
        // between 2 & 4 because any other values for i are multiples
        // of 2 or 3 and therefore don't need to be tested 
        // (we already tested for div by 2 or 3 above).
        // See https://en.wikipedia.org/wiki/Primality_test
        } else {

            for (var i = 5, l = Math.floor(Math.sqrt(n)); i <= l; ) {

                if (!(n % i)) {
                    return false;
                }
                
                i += incr;
                incr = (incr === 2) ? 4 : 2;
            }
            return true;
        }
    }
}


var x = (new Date).getTime()
console.log(gap(30, 400, 5000));
console.log('Time is ' + ((new Date).getTime() - x) + 'ms');
var x = (new Date).getTime()
console.log(gap(96, 1000003, 2000000));
console.log('Time is ' + ((new Date).getTime() - x) + 'ms');

    




// Best practices solution on CodeWars:
// Diane: figure out why this runs faster - even though it 
// doesn't skip some of the i vals (as above)
function gap(g, m, n) {
    var lastPrime = 0;
    
    // Diane's note: function expression here as opposed to fcn declaration
    var isPrime = function(x) { 
      for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }
    
    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }
      
    return null;
}

var x = (new Date).getTime();
console.log(gap(30, 400, 5000));
console.log('Time is ' + ((new Date).getTime() - x) + 'ms');
var x = (new Date).getTime();
console.log(gap(96, 1000003, 2000000));
console.log('Time is ' + ((new Date).getTime() - x) + 'ms');


// Diane experiment with Best Practices solution
// where function decl used instead of fcn expr
// (performance similar)
function gap(g, m, n) {
    var lastPrime = 0;
    
    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }
      
    return null;
}

function isPrime(x) {
    
    for (var i=2; i*i<=x; i++) {  
        if (x % i == 0) {
            return false;
        }
    } 
    return true;
    
    // note same as:
    //for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
}

var x = (new Date).getTime()
console.log(gap(30, 400, 5000));
console.log('Time is ' + ((new Date).getTime() - x) + 'ms');
var x = (new Date).getTime()
console.log(gap(96, 1000003, 2000000));
console.log('Time is ' + ((new Date).getTime() - x) + 'ms');

