// Recursion samples

// input [1,2,3,4]
// output [[1,2,3,4], [2,3,4], [3,4], [4]]

var splitToRight = function(arr, memo) {
    memo = memo || [];
    
    if (arr.length > 0) {        
        memo.push(arr.slice());
        arr.splice(0,1);
        splitToRight(arr, memo);
    }
    return memo;
};
console.log(splitToRight([1,2,3,4,5,6]));


// input [1,2,3,4]
// output [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

var splitFromLeft = function(arr, memo) {
    memo = memo || [];
    
    if (arr.length > memo.length) {        
        memo.push(arr.slice(0,memo.length + 1));
        //arr.splice(0,1);
        splitFromLeft(arr, memo);
    }
    return memo;
};
console.log(splitFromLeft([1,2,3,4,5,6]));