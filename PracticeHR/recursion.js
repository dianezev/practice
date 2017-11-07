// HackerRank - Recursion practice
// Figure out how many ways n can be broken down to  i^p + j^p +...+ m^p
// where n & p are non-negative integers (as well as i, j,...)
// Inputs are n and p

//function recursivePow(num, power) {
//
//    var resArr = [];
//    var tempArr;
//    
//    
//    //for (var i = num; i > 0 ; i--) {
//        tempArr = [];
//        testPow(num, power);
//
//        function testPow( n, p) {
//
//            var root = n ** (1/p);
//            console.log('n and p are ' + n + ', ' + p);
//            console.log('root is ' + root);
//            console.log(tempArr.length);
//
//            // Terminal case (true): if root is an integer, push to tempArr & push tempArr to solArr
//            // & return true?
//            if (!(root % 1)) {
//                tempArr.push(root);
//                resArr.push(tempArr);
//                tempArr = [];
//
//
//            // Terminal case (false): Nothing left to test
//            } else if (root < 1) {
//                tempArr = [];
//
//
//            // Keep trying
//            } else {
//                root = Math.floor(root);
//                tempArr.push(root);
//                testPow(n - (root ** p), p);
//            }
//        }
//    //}
//    return resArr;
//}
//
//console.log(recursivePow(47,2)); // should return at least [[6, 3, 1, 1],[5, 3, 3, 2]]

function recursivePow(num, power) {

    var resArr = [];
    var tempArr;
    
    
    //for (var i = num; i > 0 ; i--) {
        tempArr = [];
        testPow(num, power);

        function testPow( n, p) {

            var root = n ** (1/p);
            console.log('n and p are ' + n + ', ' + p);
            console.log('root is ' + root);
            console.log(tempArr.length);

            // Terminal case (true): if root is an integer, push to tempArr & push tempArr to solArr
            // & return true?
            if (!(root % 1)) {
                tempArr.push(root);

                console.log('in terminal case and tempArr is:');
                console.log(tempArr);

                resArr.push(tempArr);
                tempArr = [];


            // Terminal case (false): Nothing left to test
            } else if (root < 1) {
                console.log('in terminal');
                tempArr = [];


            // Keep trying
            } else {
                console.log('in last else and tempArr is');
                console.log(tempArr);
                
                root = Math.floor(root);
                tempArr.push(root);
                testPow(n - (root ** p), p);
            }
        }
    //}
    return resArr;
}

console.log(recursivePow(47,2)); // should return at least [[6, 3, 1, 1],[5, 3, 3, 2]]