// TBD Diane review and work on combinations of size k

// also LEFT OFF HERE - look again at my code (3rd section) and
// think about terminal case
// will term case be FIRST time len is k-1
// then push full set of k with a loop through whatever remains in arr?

// Combinations (of all sizes) from a str, from
// http://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}
combinations("abcd")

// Combinations (of all sizes) from arr, also from
// http://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
// returns array of strings, not array of arrays of chars
function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  return result;
}
Usage:

var combinations = getCombinations(["a", "b", "c", "d"]);


// TBD Diane experiment
// n choose k where inputArr is arr of n items
// Use recursion
function combinations(inputArr, k) {
    var results = [];
    var len = inputArr.length;
    
    function combine(arr, start, memo) {
        var cur = [];
        //var result = [];
        memo = memo || [];
        start = start || 0;
//        console.log('START OF COMBINE...');
//        console.log('arr is ');
//        console.log(arr);
//        console.log('start is ' + start);
//        console.log('memo at start is');
//        console.log(memo);
        
        

        for (var i = start; i < len; i++) {
//                    console.log('memo just inside for is');
//                    console.log(memo);
//            console.log('i is ' + i);
            //cur = arr.splice(i, 1);
            if (arr.length > 0) {
                cur = arr.splice(0, 1);
                
//                console.log('cur and memo are:');
//                console.log(cur);
//                console.log(memo);
//                console.log(arr);
//                console.log('memo length is ' + memo.length);

//                if (memo.length < k) {
//                    console.log('memo');
//                    memo = memo.concat(cur);
//                    console.log(memo);
//                } else if (memo.length === k) {
                if (memo.length === k) {
                    console.log('pop');
                    memo.pop();
                    
                }
                memo = memo.concat(cur);
//                console.log(memo);
                
//                console.log('after if and memo is:');
//                console.log(memo);

//                if (arr.length >= 0 && memo.length === (k - 1)) {
//                    results.push(cur);
//    //                combine(arr, i + 1, memo.concat(cur));
//
//                } 
                
                    //combine(arr, ((i === start) ? 0 : (i + 1)), memo);
                console.log('getting ready to call COMBINE with:');
                console.log(arr);
                console.log(i+1);
                console.log(memo);
                combine(arr, i + 1, memo);
                
                arr.splice(i, 0, cur[0]);
                //results.push(cur);
            }
        }
        return results;
    }

    return combine(inputArr);
}

console.log(combinations(['a', 'b', 'c'], 2));



// n choose 2 (this code doesn't use recursion)
function choose2(inputArr) {
    var len = inputArr.length;
    
    function combine(arr) {
        var cur = [];
        var result = [];

        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len; j++) {
                cur = [arr[i], arr[j]];
                result.push(cur);
            }
        }
        return result;
    }

    return combine(inputArr);
}

console.log(choose2(['a', 'b', 'c', 'd', 'e']));


// n choose 3 (this code doesn't use recursion)
function choose3(inputArr) {
    var len = inputArr.length;
    
    function combine(arr) {
        var cur = [];
        var result = [];

        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len; j++) {
                for (var h = j + 1; h < len; h++) {
                    cur = [arr[i], arr[j], arr[h]];
                    result.push(cur);
                }
            }
        }
        return result;
    }

    return combine(inputArr);
}

console.log(choose3(['a', 'b', 'c', 'd']));


//function combineTrips(t, k, ls) {
//  var results = [];
//  //  var maxDist = 0;
//    var leftover = ls.length - k;
//    
//  function combine(arr, memo) {
//      console.log('arr is ');
//      console.log(arr);
//      console.log('memo is ');
//      console.log(memo);
//    var cur, memo = memo || [];
//
//    for (var j = 0; j <= arr.length - k ; j++) {
//        cur = arr.splice(j, 1);
//        
//        //for (var i = 0 ; i < k; i++) {
//            
//            if (arr.length === leftover) {  
//
//                results.push(memo.concat(cur));
//                
//                console.log(results[0]);
//                console.log(results[1]);
//                console.log(results[2]);
//            }
//
//            //if (arr.length > 0) {
//                combine(arr.slice(j), memo.concat(cur));
//                arr.splice(j, 0, cur[0]);
//            //}
//        //}
//    }
//
//    return results;
//  }
//
//  return combine(ls);
//}

//console.log(combineTrips(10, 3, [1, 2, 3, 4, 5, 6]));