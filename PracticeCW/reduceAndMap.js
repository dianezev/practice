// using reduce & map methods

//*************************
// Example from MDN
//*************************
function sumOfArray(arr, init) {
    if (typeof init === 'undefined') {init = null;}

    var sum = arr.reduce(function(prev, cur, i, array) {
        return prev + cur;
    }, init);
    
    return sum;
}

//console.log(sumOfArray([2,3,5,7,12]));   // 29 

// Note that w/o initial value reduce uses first el as 'prev'
// But with an init value, reduce will use first el as 'cur' so:
//console.log(sumOfArray([2,3,5,7,12], 100));   // 129 


//*********************************************************
// Return array of sums for elements 0 - i
// For example [1, 2, 3, 4, 5] returns [1, 3, 6, 10, 15]
// Question - is it intended for anything along these lines, 
// or just intended to return one value or array or object?
//**********************************************************
function sumElements(arr) {
    
    arr.reduce(function(prev, cur, i, array) {
        arr[i] = prev + cur;
        return prev + cur;
    })
    
    return arr;
}

console.log(sumElements([2,3,5,7,12]));   // [2, 5, 10, 17, 29]

//LEFT OFF HERE - trying out init value = [] see how to replicate above
function sumElementsVer2(arr) {
    
    arr.reduce(function(prev, cur, i, array) {
        arr[i] = prev + cur;
        return prev + cur;
    },[])
    
    return arr;
}

console.log(sumElementsVer2([2,3,5,7,12]));   // [2, 5, 10, 17, 29]

//**************************************************************
// Examples on book checkout from 
// http://adripofjavascript.com/blog/drips/boiling-down-arrays-with-array-reduce.html
//**************************************************************
function getCheckouts() {
    var books = [
        {
            title: "Showings",
            author: "Julian of Norwich",
            checkouts: 45
        },
        {
            title: "The Triads",
            author: "Gregory Palamas",
            checkouts: 32
        },
        {
            title: "The Praktikos",
            author: "Evagrius Ponticus",
            checkouts: 29
        }
    ];

    // note you could use for loop to sum books.checkouts, but here is another way:

    // First: Get an array of checkout values only
    //var bookCheckouts = books.map(function(item) {
    //    return item.checkouts;
    //});

    // Then: Sum the array's values from left to right
    //var total = bookCheckouts.reduce(function(prev, curr) {
    //    return prev + curr;
    //});

    // Better to chain the above this way:
    // Get total of book checkouts
    var total = books
                .map(function(b) { return b.checkouts; })
                .reduce(function(p, c) { return p + c; });
    
    return total;
}

//console.log(getCheckouts());

// Another example from above website:
// - an array is reduced to an object here
function getRelatives() {
    var relArray = [
        ["Viola", "Orsino"],
        ["Orsino", "Olivia"],
        ["Olivia", "Cesario"]
    ];

    var relMap = relArray.reduce(function(memo, curr) {
        memo[curr[0]] = curr[1];
        return memo;
    }, {}); // Diane note this init value sets up memo as an object
    
    return relMap;
}

//console.log(getRelatives());    // { Viola: 'Orsino', Orsino: 'Olivia', Olivia: 'Cesario' }

