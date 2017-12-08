
// 126ms complexity n62
function triangle(row) {
  var obj = {RR: 'R', BB: 'B', GG: 'G', RB: 'G', BR:'G', RG: 'B', GR: 'B', BG: 'R', GB: 'R'};
  var curRow = row;
  var nextRow;
  var i = 0;
  
  while (i < row.length - 1) {
    nextRow = '';
    
    for (var j = 0; j < (curRow.length - 1) ; j++) {
      nextRow += obj[curRow.slice( j, j + 2 )];
    }
    
    curRow = nextRow;
    i++;
  }
  return curRow;
}
  
console.log(triangle('RBRGBRBGGRRRBGBBBGG'));


// try recursive solution LEFT OFF HERE - figure out how to combine to one recursive fcn
function triangle(row) {
  var obj = {RR: 'R', BB: 'B', GG: 'G', RB: 'G', BR:'G', RG: 'B', GR: 'B', BG: 'R', GB: 'R'};
  var newRow = '';

  return getLastRow(row);

  // This recursive function builds the next row
  function getNextRow(curRow) {
    
    if (curRow.length === 1) {
      return newRow;
      
    // Otherwise recursion
    } else {

      newRow += obj[curRow.slice(0,2)];
      return getNextRow(curRow.slice(1));
    }
  }

  // This recursive function continues to call the next row until at end, len = 1
  function getLastRow(myRow) {
    newRow = '';

    if (myRow.length === 1) {
      return myRow;

    } else {
      return getLastRow(getNextRow(myRow));
    }
  }  
}

  
  console.log(triangle('RBRGBRBGGRRRBGBBBGG'));
