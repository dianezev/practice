// Get total # matching socks (pairs must match in color)

// cl input:
//
// 9  //total # single socks
// 10 20 20 10 10 30 50 10 20   // color codes

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
    c = readLine().split(' ');
    c = c.map(Number);
    var pairCt = 0;
    var ct;
    var len;
    
    var unique = c.filter((val, i, a) => a.indexOf(val) == i);
    
    for (var i = 0; i < unique.length ; i++) {
        ct = c.filter((val) => (val === unique[i])).length;
        pairCt += Math.floor(ct/2);
    }

    console.log(pairCt);
}