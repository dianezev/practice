// Pascal's triangle

function pascal(depth) {
    var myArr = [];
 
    // Create array of arrays, filled entirely with 1
    myArr = Array(depth).fill().map(function(y, i, arr) {
        return Array(i + 1).fill().map(function(x, j, arr2) {
            return 1;
        });
    });
    
    // Loop through array and replace elements with Pascal sums
    for (var i = 2; i < depth; i++) {
        for (var j = 0, l = myArr[i-1].length; j < (l-1); j++) {
            myArr[i][j+1] = myArr[i-1][j] + myArr[i-1][j+1];
        }
    }

    return myArr;
}

// My first version (works):
//function pascal(depth) {
//    var p = [[1]];
//    var q;
//    
//    // loop through each level of triangle, starting with creating level 2 off of level 1
//    for (var i = 0; i < (depth - 1); i++) {
//        q = [1];
//
//        // build up q array referencing p[i]
//        for (var j = 1, l = p[i].length; j < l; j++) {
//            q.push(p[i][j-1] + p[i][j]);
//        }
//
//        q.push(1);
//        p.push(q);
//    }
//    return JSON.stringify(p);
//}

console.log(pascal(10));

//Codewars best:
//function pascal(depth) {
//  var result = []
//  for (var i = 1; i <= depth; ++i) {
//    var row = []
//    for (var j = 0; j < i; ++j) {
//      row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j])
//    }
//    result.push(row)
//  }
//  return result
//}