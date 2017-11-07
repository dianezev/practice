function doneOrNot(board){
    var basic = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var isOK = true;

    for (var i = 0; i < 9; i++) {
        
        // Check if all rows contain 1 - 9
        if (!checkNums(buildArray([i, 0], [i, 8]))) {
            isOK = false;
            break;
        }
        
        // Check if all cols contain 1 - 9
        if (!checkNums(buildArray([0, i], [8, i]))) {
            isOK = false;
            break;
        }
    }

    // If rows & cols or OK, check if all 3x3 boxes contain 1 - 9
    if (isOK) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (!checkNums(buildArray([i * 3, j * 3], [(i * 3) + 2, (j * 3) + 2]))) {
                    isOK = false;
                    break;
                }
            }
            if (isOK === false) {
                break;
            };
        }
    }
    return isOK ? 'Finished!' : 'Try again!';
    
    // Build an array that contains board elements from 
    // upperL position to lowerR position
    function buildArray(upperL, lowerR) {
        var arr = [];
        for (var i = upperL[0], l = lowerR[0]; i <= l ; i++) {
            for (var j = upperL[1], k = lowerR[1]; j <= k ; j++) {
                arr.push(board[i][j]);
            }       
        }
        return arr;             
    }
    
    // Check that array matches length & content of 'basic'
    // array. (Different order fine)
    function checkNums(arr) {
        return (arr.length !== basic.length) 
                ? false 
                : arr.sort().every(function(el, i) {
                    return el === basic[i];
                });
    }
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                        [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
                                
console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]));

// Codewars top solution:
//function doneOrNot(rows){
//
//  var columns = []
//  ,    blocks = [];
//  
//  for (var i = 0; i < 9; i++) {
//    columns[i] = [];
//    
//    for (var j = 0; j < 9; j++) {
//      var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
//      blocks[k] = blocks[k] || [];
//      
//      blocks[k].push(rows[i][j]);
//      columns[i].push(rows[j][i]);
//    }
//  }
//  
//  var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
//  
//  var is_valid = rows.every(is_valid_row) 
//    && columns.every(is_valid_row) 
//    && blocks.every(is_valid_row);
//  
//  return is_valid ? 'Finished!' : 'Try again!';
//}