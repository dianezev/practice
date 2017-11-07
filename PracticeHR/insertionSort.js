// Insertion Sort
// cl input format:
// 5 //size of arr
// 3 5 1 4 2 6     //arr


// I submitted two versions to HR

// This final version revised to SPLICE els in & out 
// rather than SWAP adjacent els
// (TBD: not sure if splice of n elements would req 
// less processing that swapping els n times)

// (this format tested in console instead of cli)
function processData(arr) {
    var val;
    
    for (var i = 1 ; i < arr.length; i++) {
        val = arr[i];

        for (var j = i ; j > 0; j--) {
            
            // Splice out & splice in val if > arr[j-1]
            if (val > arr[j-1]) {
                arr.splice(i, 1);
                arr.splice(j, 0, val);
                break;

            // If at end of arr & val is smallest, splice in at arr[0]
            } else if (!(j-1) && (val < arr[j-1])) {
                arr.splice(i, 1);
                arr.splice(0, 0, val);
            }
        }
        console.log(arr.join(' '));
    }
    
    return arr;
} 

console.log(processData([3, 5, 1, 4, 2, 6]));


// First submission to HR but probably inefficient
// because it swaps elements more than necessary (every step of the way instead of just at destination location)
//
//function processData(input) {
//    var data = input.split('\n');
//    var arr = data[1].split(' ').map(Number);
//    var val;
//    
//    for (var i = 1 ; i < arr.length; i++) {
//        val = arr[i];
//
//        for (var j = i ; j > 0; j--) {
//            if (val < arr[j-1]) {
//                arr[j] = arr[j-1];
//                arr[j-1] = val;
//            }
//        }
//        console.log(arr.join(' '));
//    }
//} 
//
//process.stdin.resume();
//process.stdin.setEncoding("ascii");
//_input = "";
//process.stdin.on("data", function (input) {
//    _input += input;
//});
//
//process.stdin.on("end", function () {
//   processData(_input);
//});
