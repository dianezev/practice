// Issue to figure out
// shallow vs deep arrays?

//var sequences = Array(n).fill([]); // did not give what I wanted cuz sequences[0].push(6) pushed 6 onto all array els in sequences (not just 0)


// if I set up sequences this way, then sequences[0].push(6) worked as I expected
    var sequences = [];
    for (var i = 0; i < n ; i++) {
        sequences[i] = [];
    }
