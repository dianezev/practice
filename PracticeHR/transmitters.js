// HackerRank - set Transmission poles - min number needed to reach all houses in 1-dim city
// Transmitters must go on houses

// Input:
// n k   // n is # houses and k is distance each trans reaches (<= k houses)
// space separated house locations (dups ok)
// for example:
// 8 2
// 7 2 4 6 5 9 12 11 

//process.stdin.resume();
//process.stdin.setEncoding('ascii');
//
//var input_stdin = "";
//var input_stdin_array = "";
//var input_currentline = 0;
//
//process.stdin.on('data', function (data) {
//    input_stdin += data;
//});
//
//process.stdin.on('end', function () {
//    input_stdin_array = input_stdin.split("\n");
//    main();    
//});
//
//function readLine() {
//    return input_stdin_array[input_currentline++];
//}

/////////////// ignore above this line ////////////////////

function main(k, x) {
//    var n_temp = readLine().split(' ');
//    var n = parseInt(n_temp[0]);
//    var k = parseInt(n_temp[1]);
//    x = readLine().split(' ');
//    x = x.map(Number);
    x = partitionSort(x);
    var tsmit = [];
    var elGap;
    var i = 0;
    var l = x.length;
    
    //for (var i = 0, l = x.length; i < l ; i++) {
    while (i < l) {
        elGap = 1;
        while ((i) < l) {
            if (i + elGap >= l) {
                break;
            }
            if ((x[i + elGap] - x[i]) <=  k) {
                elGap++;
            } else {
                break;
            }
        }

        elGap--;
        tsmit.push(x[i + elGap]);
        //i+=elGap;
        console.log('pushed ' + x[i + elGap]);
        
        // figure out how many houses forward are covered by new trans
        j = 1;
        while (( x[i + elGap + j] - x[i + elGap]) <= k) {
            console.log('compared ' + x[i + elGap + j] + ' and ' + x[i + elGap]);
            j++;
        }
        i+=elGap;
        i+=j;
        console.log('adjusted i to ' + i);
        //i++;
    }
    console.log(x);
    return tsmit;
}

function partitionSort(arr) {
    var res = partition(arr);
    
    function partition(a) {
        var l = a.length;
        var left = [];
        var right = [];
        var equal = [a[0]];
        var segment = [];

        for (var i = 1; i < l; i++) {
            (a[i] < a[0]) ? left.push(a[i]) :
                    (a[i] > a[0]) ? right.push(a[i]) :
                    equal.push(a[i]);
        }

        // If lengths of left & right arrays > 1, continue to partition them
        if ((left.length > 1) && (right.length > 1 )) {

            // Continue to partition both left & right arrays
            segment = [].concat(partition(left),equal, partition(right));

        } else if (left.length > 1) {

            // Continue to partition left array
            segment = [].concat(partition(left),equal, right);

        } else if (right.length > 1 ) {

            // Continue to partition right array
            segment = left.concat(equal, partition(right));

        } else {
            
            // Terminal case
            segment = left.concat(equal, right);
        }
        return segment;        
    }

    return res;
} 
// for console test:
//console.log(main(1,[1, 2, 3, 4, 7, 8, 12,13,14, 17, 19]));
console.log(main(2,[7, 2, 4, 6, 5, 9, 12, 11]));