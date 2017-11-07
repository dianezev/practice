function processData(input) {
    var data = input.split('\n');
    var d = data[0].split(' ').map(Number)[1];
    var arr = data[1].split(' ').map(Number);
    var temp;
    
    for (var i = 0; i < d; i++) {
        temp = arr.shift();
        arr.push(temp);
    }
    console.log(arr.join(' '));
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