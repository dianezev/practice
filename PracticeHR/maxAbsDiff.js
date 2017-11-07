// Day 14: Scope
// No built-in JS option available, so just coding it here

function difference(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

console.log(difference([1, 5, 46, 23, 21, 6, 8, 0, 38]));


// Or, without spread operator
function diff(arr) {
    var min = arr[0];
    var max = arr[0];
    
    for (var i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
    
    return max - min;
}

console.log(diff([1, 5, 46, 23, 21, 6, 8, 0, 38]));
