// Given a 2D array of digits, try to find the occurrence of a given 
// 2D pattern of digits. In other words find smaller grid of #s 
// within a larger grid. Return YES if found, or NO


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
    var t = parseInt(readLine());   // number of test cases
    var found;
    var sCol;
    var sRow;
    
    for(var a0 = 0; a0 < t; a0++){
        var R_temp = readLine().split(' ');
        var R = parseInt(R_temp[0]);
        var C = parseInt(R_temp[1]);
        var G = [];
        found = false;
        
        for(var G_i = 0; G_i < R; G_i++){
           G[G_i] = readLine();
        }
        var r_temp = readLine().split(' ');
        var r = parseInt(r_temp[0]);
        var c = parseInt(r_temp[1]);
        var P = [];
        for(var P_i = 0; P_i < r; P_i++){
           P[P_i] = readLine();
        }
        
        // Diane's code:
        for (var i = 0; i < R - r ; i++) {
            
            // Try to find first line of smaller grid in any line of larger grid (up to R -r)
            sCol = G[i].indexOf(P[0]);
            
            // If match found, check if add'l rows in smaller grid match subsequent rows in larger grid
            if (sCol > -1) {
                found = true;
                sRow = i;
                for (var j = 1; j < r ; j++) {
                    
                    // If mismatch for any of the add'l rows, break out of loop
                    if (G[i + j].indexOf(P[j]) === -1) {
                        found = false;
                        break;
                    }        
                }
            }
            if (found) {break;}
        }
        
        process.stdout.write(found ? 'YES\n' : 'NO\n');
        //console.log(found ? 'YES' : 'NO');
    }
    

}
