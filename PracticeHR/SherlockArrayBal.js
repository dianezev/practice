2   // number of cases
3   // length of array (next)
1 2 3
4   // length of array (next)
1 2 3 3


// Diane submitted:
function processData(input) {
    var arr = input.split('\n');
    var lArr;
    var rArr;
    var lSum;
    var tSum;
    var rSum;
    var isBal;
    var testArr;
    var i;
    var ignore;
    
    for (var j = 2; j < arr.length ; j+=2) {
        testArr = arr[j].split(' ').map(Number);
        isBal = false;
        lSum = 0;
        tSum = testArr.reduce((a,b) => a+b);
        rSum = tSum;
        i = 0;
        ignore = 0;
        
        while (!isBal && i < testArr.length) {
            lSum += ignore;
            rSum -= testArr[i];
            ignore = testArr[i];
            isBal = (lSum === rSum);
            i++;
        }        
        console.log(isBal ? 'YES': 'NO' );
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});




// This was too slow - reducing array too many times
function processData(input) {
    var arr = input.split('\n');
    var cases = arr[0];
    var lArr;
    var rArr;
    var lSum;
    var rSum;
    var isBal;
    var testArr;
    
    for (var j = 2; j < arr.length ; j+=2) {
        testArr = arr[j].split(' ').map(Number);
        isBal = false;
        
        for (var i = 0; i < testArr.length ; i++) {
            lArr = testArr.slice(0,i);
            rArr = testArr.slice(i+1);
            lSum = lArr.length ? lArr.reduce((a,b) => a+b) : 0;
            rSum = rArr.length ? rArr.reduce((a,b) => a+b) : 0;
            if (lSum === rSum) {
                isBal = true;
                break;
            }
        }
        console.log(isBal ? 'YES': 'NO' );
    }    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
