// Diane's final solution to CodeWars 'Find Unique String'
function findUniq(arr) {
    var str_0 = uniqChars(arr[0]);
    
    // Loop compares chars in each 'str_i' to chars in 'str_0', until mismatch found
    // (assumes there is a mismatch - it will just def to last el if none found)
    for (var i = 1, l = arr.length; i < l ; i++) {
        if (str_0 !== uniqChars(arr[i])) {
            break;
        }
    }
    
    /*
     * If i = 1, we don't know if el 0 or el 1 is the mismatched string
     * So check if el 2 is same as el 0 or different
     */
    if (i === 1) {
        if (uniqChars(arr[2]) !== str_0) {
            
            // Element 0 must be mismatched string, since it does not match el 1 OR 2
            i = 0;
        }
    }
    
    return arr[i];
}

// Function returns a sorted string of the uniq characters in string that's passed in
function uniqChars(str) {
    return str.toLowerCase()
            .split('')
            .sort()
            .filter(function (el, i, arr) {
                    return ((i === 0) || (arr[i] !== arr[i-1])) ? true : false;
            })
            .join('');
}


console.log(findUniq(['abc', 'ACab', 'BAacAa', 'Cba']));
console.log(findUniq(['abc', 'ACab', 'BAacAa', 'ddd']));
console.log(findUniq(['abc', 'ab', 'ACab', 'BAacAa']));
console.log(findUniq(['dxyz', 'dAxAYAAaa', 'AxydaAa', 'ydxA']));
console.log(findUniq(['AAAAaa', 'AaAa', 'A', 'a', 'aaa', 'def']));


//// Diane's first solution to CodeWars 'Find Unique String'
//function findUniq(arr) {
//    var str_0 = arr[0].toLowerCase().split('');
//    var str_i;
//    var index = -1;
//    var match;
//
//    // Loop compares chars in each 'str_i' to chars in 'str_0', until mismatch found
//    // (assumes there is a mismatch - it will just def to last el if none found)
//    for (var i = 1, l = arr.length; i < l ; i++) {
//        str_i = arr[i].toLowerCase().split('');    
//
//        if (!compare(str_i, str_0)) {
//            break;
//        }
//    }
//    
//    /*
//     * If i = 1, we don't know if el 0 or el 1 is the mismatched string
//     * So check if el 2 is same as el 0 or different
//     */
//    if (i === 1) {
//        if (!compare(arr[2].toLowerCase().split(''), str_0)) {
//            
//            // Element 0 must be mismatched string, since it also does not match el 2
//            i = 0;
//        }
//    }
//    
//    return arr[i];
//}
//
//
//// Check if all characters in str_i can be found in str_0
//function compare(str_i, str_0) {
//    var match;
//
//    // Compare each el str_i to each el in str_0
//    for (el in str_i) {
//
//        if (el === ' ') {return true;}
//
//        // Initialize match to false
//        match = false;
//
//        for (var j = 0, m = str_0.length; j < m ; j++) {
//            if (str_i[el] === str_0[j]) {
//
//                // If match found, break out of loop and continue with next character in str_i
//                match = true;
//                break;
//            }
//        }
//
//        // Return false if mismatch found for current el
//        if (match === false) {
//            return false;
//            break;
//        }
//
//    }
//    
//    // Match must be found for all els in str_i to reach this point
//    return match;
//}


