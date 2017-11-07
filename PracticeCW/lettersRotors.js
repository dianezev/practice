// Airport letters on rotors - Diane Z solution

var flapDisplay = function(lines, rotors) {
    var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';
    var count = ALPHABET.length;
    var str;
    
    // Loop through each string in lines array
    for (var item = 0, l = lines.length ; item < l ; item++) {
        str = lines[item].split('');
        
        // Apply rotation to relevant chars in string
        for (var i = 0, m = rotors[item].length; i < m ; i++) {
            for (var j = i; j < m ; j++) {
                str[j] = ALPHABET[(ALPHABET.indexOf(str[j]) + rotors[item][i]) % count];
            }
        }
        
        // Join results of rotations
        lines[item] = str.join('');
    }
    
    return lines
}



console.log(flapDisplay(["CAT", "MNOP", "456"],[[1 ,2 ,3 ],[2 ,2 ,2 ,2 ],[10, 11, 12]]))


/////////////////////////////////////////////
// One solution from Best Practices (only a few votes on any solutions so far...)

//var flipChar = function(char, flips) {
//  return ALPHABET[(ALPHABET.indexOf(char) + flips) % ALPHABET.length];
//}
//
//var flapDisplay = function(lines, rotors) {
//    return rotors.map(function(rotor, i) {
//        var sum = 0;
//        return rotor.map(function(flips, j) {
//            return flipChar(lines[i][j], sum += flips);
//        }).join('');
//    });
//}

