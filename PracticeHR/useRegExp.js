//HackerRank Day 28
// Use Regex to print names of people with @gmail.com email addresses (skip others)

// Sample input:
//6
//riya riya@gmail.com
//julia julia@julia.me
//julia sjulia@gmail.com
//julia julia@gmail.com
//samantha samantha@gmail.com
//tanya tanya@gmail.com

// Sample output:
//julia
//julia
//riya
//samantha
//tanya


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
    var N = parseInt(readLine());
    var list = [];
    var re = new RegExp('@gmail.com$');;
    
    for(var a0 = 0; a0 < N; a0++){
        var firstName_temp = readLine().split(' ');
        var firstName = firstName_temp[0];
        var emailID = firstName_temp[1];
        
        if (emailID.match(re)) {
            list.push({name: firstName, email: emailID});
        }
    }

    list.sort(function(a,b) {
        var nameA = a.name;
        var nameB = b.name;
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;        
    });

    list.forEach(function(el) {
        console.log(el.name);
    });

}
