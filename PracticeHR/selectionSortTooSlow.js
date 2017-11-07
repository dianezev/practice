// Consider an array of  distinct integers, . George can swap any 
// two elements of the array any number of times. An array is 
// beautiful if the sum of among  is minimal possible (after, // // possibly, performing some swaps).

// Given the array , find and print the minimum number of swaps 
// that should be performed in order to make the array beautiful.

// Diane's code - decided to use Selection Sort
// THIS WAS TOO SLOW
function processData(input) {
    var sorted = [];
    var unsorted = [];
    var swap;
    var swapCt = 0;
    var min;
    var size;
    
    input = input.split('\n');
    size = input[0];
    unsorted = input[1].split(' ').map(Number);
    
    for (var i = 0 ; i < size ; i++ ) {
        min = Math.min(...unsorted);
        swap = unsorted.indexOf(min);

        if (swap !== 0) {
            swapCt++            
        }
        sorted.push(min);
        unsorted.splice(swap,1);
    }
    process.stdout.write(swapCt);
} 


// provided by HR
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});