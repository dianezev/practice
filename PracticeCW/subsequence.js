// get array of chars that are in both strings
// maybe get position of second array - i.e. for xabcde and cfagxe - generate [[x,4],[a,2],[c,0],[e,5]]
// which you could use to compare xace to caxe


function LCS(x, y) {
    var short = x.split('');
    var long = y.split('');
    var sub = [];
    
// NOTE this doesn't work for abcde and bxcwra cuz it just matches 'a' instead of finding
    // longest match - bc
    // maybe try expand arrays to get posns - [a,b,c] --> [[a,0],[b,1],[c,2]]
    // then sort the arrays to get a list of possible els...then do what to find longest match??

//    if (x.length < y.length) {
//        short = x.split('');
//        long = y.split('');
//    } else {
//        short = y.split('');
//        long = x.split('');    
//    }

    for (var i = 0, l = short.length; i < l ; i++) {
        for (var j = 0, k = long.length; j < k ; j++) {
            if (short[i] === long[j]) {
                sub.push(short[i]);
                long.splice(0, j + 1);
                break;
            }
        }    
    }
    
    return sub;   
}
    
console.log(LCS('abcdef', 'adeg'));
  // convert to arrays
    // maybe just work with x as string, depending which
//    var xArr = x.split('');
//    var yArr = y.split('');
//    console.log(xArr);
//    console.log(yArr);
    
 
    // create first item with full string
    //then loop 
        // dropping one of any in FIRST item - push each of these
        // drop one of any in second thru xx items?
    
    // abcdef
    // bcdef acdef abdef abcef abcdf abcde
    // cdef bdef bcef bcdf bcde | CDEF adef acef acdf acde |
        // BDEF ADEF abef abdf abde | BCEF ACEF ABEF abcf abce|
        // BCDF ACDF ABDF ABCF abcd | BCDE ACDE ABDE ABCE ABCD
    
    // for each element i
    //      for j = 1 through length - 1
    //          for k = 0 through length - 1
    //              
    // first def [el 0] : join of xArr with 0 extracts 
    // next def [ el 1 - el (count)] : return several, each with one el extracted from [el 0]
    // next set [el (count + 1 ) - el ???]: loop acts on:
    //              returns all possibilites (0 thru [el 1].len - 1) of [el 1] with one extracted
    //              return fewer possibilities of [el 2] - just get 1 thru len-1
    //              return fewer possibilities of [el 3] - just get 2 thru len-1
    //              etc 
    
    // or
    // 
    
    
    // build array of all subsequences for both x & y
//    var xSub = getSubs(xArr);
//    var ySub = getSubs(yArr);
    
    
    
    //nest loop through lists of subsequences, updating longest
    
    
//    function getSubs (arr) {
//        
//        for (var i = 0, l = arr.length; i < l; i++) {
//            for (var j = 0, m = arr.length; j < m; j++) {
//             
//            }
//        }
//    
//    }
//}