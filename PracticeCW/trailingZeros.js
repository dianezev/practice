// Trailing zeros - submitted by Diane Z

function zeros (n) {
    var ctr = 0;
    var f = 5;

    /* The number of trailing zeros will match
     * the total number of times the factorial is divisible
     * by 5. Each multiple of 5 is divisible at least once,
     * but note that multiples of 25 are divisible by 5 TWICE
     * and multiples of 125 are divisible by 5 THREE times, etc.
     * So, divide 'n' first by 5, then by 25, then by 125, etc.
     * to get total count of trailing zeros.
     */
    while (Math.floor( n / f )) {
        ctr += Math.floor( n / f );
        f = f * 5;    
    }

    return ctr;
}

console.log(zeros(50));
console.log(zeros(55));
console.log(zeros(60));
console.log(zeros(65));
console.log(zeros(70));
console.log(zeros(75));
console.log(zeros(80));
console.log(zeros(90));
console.log(zeros(100));


// This failed Codewars - took too much memory for large val like 1000000000
//function zeros (n) {
//    /*
//     * We only need to look at multiples of 5 in 'n'
//     * because that's where we'll find values that add
//     * trailing zeros to a factorial number 
//     * (all pairs _5 x _2 will add a trailing zero).
//     */
//
//    /*
//     * Create array of multiples of 5 up through 'n'
//     * (none of the other values in n! will be divisible by 5, so ignore them)
//     */
//    var arr = Array(Math.floor(n/5)).fill().map((y,i)=>(i + 1) * 5);    
//    var ctr = 0;
//    var f;
//    
//    /*
//     * To figure out the total # of trailing zeros in n!,
//     * you need to count the number of times 5 is a factor
//     * in n!. So loop throughaccount for both powers of 2 & 5 as well as 10
//     */
//    arr.forEach(function (el, i) {
//        f = el;
//
//        /* Loop through elements to figure out how many times 
//         * it's divisible by 5 & increment counter.
//         * (so  both 5 & 10 are divisible 1x, 25 is div 2x, etc).
//         */
//        do {
//            if (f % 5 === 0) {
//                  ctr++;
//            }
//            f = f / 5;
//        } while (f >= 5);
//            
//    });
//         
//    return ctr;
//}
