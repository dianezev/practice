// Problem from HackerRank with some changes in order to test from Node
// Consider an array of  distinct integers, . George can swap any 
// two elements of the array any number of times. An array is 
// beautiful if the sum of among  is minimal possible (after, // // possibly, performing some swaps).

// Given the array , find and print the minimum number of swaps 
// that should be performed in order to make the array beautiful.

// Diane's code - instead of trying a sort algorithm, I'm comparing
// orig arr to sorted array and finding fewest swaps needed to get there...


function processData(input) {
    var sorted = [];
    //var unsorted = [];
    var swap;
    var swapCt = 0;
    var min;
    var size;
    var val;

    input = input.split('\n');
    size = input[0];
    
    arr = input[1].split(' ').map(Number);
    sorted = Array.from(arr);
    sorted.sort((a,b) => a-b);
    
    for (var i = 0 ; i < size - 1 ; i++ ) {
        console.log('i is ' + i);
        findPosn = arr.indexOf(sorted[i]); 
        if (i !== findPosn) {
            console.log('findPosn is ' + findPosn);
            swap(i,findPosn);
            //val = arr.splice(findPosn,1);
            // put val in correct place
            // switch replaced val out to dest
            //arr.splice(i,0,val[0]);
            swapCt++;
        }
    }
    
    function swap(x, y) {
        var val = arr[x];
        arr[x] = arr[y];
        arr[y] = val;
    }
    
//    for (var i = 0 ; i < size - 1 ; i++ ) {
//        
//        if (arr[i] > arr[i + 1]) {
//            // Splice out val that is out of order
//            val = arr.splice(i + 1,1);
//            
//            // Find where val belongs in sorted portion of arr ([0] thru [i])
//            j = 0;
//            while ((val > arr[j]) && (j < i)) {
//                j++                
//            }
//            arr.splice(j,0,val);
//            swapCt++;            
//        }
//    }
    
    console.log(arr);
    console.log(swapCt);
    //process.stdout.write(swapCt);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");

_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

// Need SIGINT to run from Node
//process.stdin.on("end", function () {
process.on("SIGINT", function () {    
   processData(_input);
    
    // Diane added for it to finish running from Node:
    process.exit(0);

});
