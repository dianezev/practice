// Diane's second submission for Day 10
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var size = Math.floor(Math.log(n)/Math.log(2));
    var bitArr = [];

    // Build array of 0s and 1s to represent base 2 representation of n
    for (var i = size; i >= 0; i-- ) {
        bitArr.push(getBit(n, i));
        n = n % Math.pow(2, i);        
    }

    console.log(consecOnes(bitArr));
    
    // Check if k is divisible by 2 ^ j
    function getBit(k, j) {
        return (k >= Math.pow(2, j)) ? 1 : 0 ;
    }

    // Returns max # of consecutive 1s in an array
    function consecOnes(arr) {
    
        // Return array that tracks # of consecutive 1s
        // i.e. [1, 1, 0, 1, 1, 1, 0] returns [1, 2, 0, 1, 2, 3, 0]
        var maxArr = arr.map((val1, i) =>
                    arr.slice(0,i+1)
                    .reduce((acc, val2) => 
                        (val2 === 1) ? 
                        acc + val2 : 
                        0)
               );
        return Math.max(...maxArr);
    }
    
}


// Diane's first submission for Day 10

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var bitArr = [];
    var pow;
    var maxArr;
    var ct = 0;
    var maxCt = 0;
    var isConsec;
    
    // Create array that identifies the places in the binary # that should be '1'
    while (pow !== -1) {
        pow = getBit(n);
        if (pow >= 0) {
            bitArr.push(pow);
            n = n % Math.pow(2,pow);
        }
    }
   
    // Loop through array to find greatest # of consecutive places where binary digit = 1
    for (var i = 1; i < bitArr.length; i++) {

        if ((bitArr[i-1] - bitArr[i]) === 1) {
            ct++;
            maxCt = Math.max(maxCt, ct);
        } else {
            ct = 0;
        }
    }
    maxCt++;
    console.log(maxCt);

    // Finds highest power of 2 that is less than k
    function getBit(k) {
        var p = -1;
        var i = 0;

        while (k >= Math.pow(2,i)) {
            i++;
        } 

        if (i > 0) {
            p = i - 1;
        }

        return p;
    }

}


////////////////////
// experimenting
///////////////////


// Generate array of sums up through cur el
// i.e. [1, 1, 1, 1, 1 ] --> [1, 2, 3, 4, 5]

function sumByEl(arr) {
    
    var y = arr.map((val1, i) =>
                    arr.slice(0,i+1)
                        .reduce((acc, val2) => acc + val2)
                   );
    
// OR EQUIVALENT:
//    var y = arr.map(function(val1, i) {
//        return arr.slice(0,i + 1)
//                    .reduce((acc, val2) => acc + val2);
//    });
    
    return y;
}

console.log(sumByEl([1,1,0,0,1,1,1,0,0,1,0]));



// Returns array that indentifies count for consecutive ones
// i.e. [1,1,0,0,1,1,1,0,0,1,0] returns [1, 2, 0, 0, 1, 2, 3, 0, 0, 1, 0]
//
function consecOnes(arr) {
    
    var y = arr.map((val1, i) =>
                    arr.slice(0,i+1)
                        .reduce((acc, val2) => 
                                (val2 === 1) ? 
                                acc + val2 : 
                                0)
                   );
    
// OR EQUIVALENT:
//    var y = arr.map(function(val1, i) {
//        return arr.slice(0,i + 1)
//                    .reduce(function(acc, val2) { 
//                        if (val2 === 1) {
//                            return acc + val2;
//                        } else {
//                            return 0;
//                        }
//                    });
//    });
    
    return y;
}

console.log(consecOnes([1,1,0,0,1,1,1,0,0,1,0]));
