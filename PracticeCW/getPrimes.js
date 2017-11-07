/*
 * getPrimes returns array of primes from m through n
 */ 
function getPrimes(m, n) {
    var primes = [];
    //var isPrime;

    for (var i = m; i <=n ; i++) {
        if (primeCheck(i)) {
            primes.push(i);
        }
    }
    
    return primes;
}


/*
 * getNextPrime returns smallest prime >= n
 */ 
function getNextPrime(n) {

    while (!(primeCheck(n))){
        n++;
    }

    return(n);
}
