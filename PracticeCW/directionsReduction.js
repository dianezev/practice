// Directions Reduction


function dirReduc(arr){
  var codes = {north: -1, south: 1, west: 10, east: -10};
  var aNums = [];
  var j = true;

  // Create an array aNums that is a map of arr with
  // values -1/1 for N/S and 10/-10 for W/E.
  // Loop through aNums to find a consecutive pair that 
  // are opposites (i.e. -1 + 1 = 0) and splice that pair
  // out of arr. After splice, restart for loop from
  // beginning. Continue do...while until for loop reaches
  // end or arr size is < 2.
  do {
    aNums = getNums(arr);

    // Loop through aNums to find 
    for (var i = 0, l = arr.length - 1; i < l; i++) {
      if (i === (l - 1)) {j = false;}
      if (aNums[i] + aNums[i + 1]) { 
        continue; 
      } else {
        arr.splice(i, 2);
        break;
      }
    }    
    if (arr.length < 2) {j = false;}
  } while (j);

  function getNums(a) {
    return a.map( function(dir) {
      return codes[dir.toLowerCase()];
    });
  }

  return arr;
}

// From Codewars best solution:
//function dirReduc(plan) {
//  var opposite = {
//    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//  return plan.reduce(function(dirs, dir){
//      if (dirs[dirs.length - 1] === opposite[dir])
//        dirs.pop();
//      else
//        dirs.push(dir);
//      return dirs;
//    }, []);
//}

//dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
dirReduc(['EAST', 'NORTH', 'SOUTH', 'WEST', 'NORTH','NORTH', 'SOUTH', 'WEST', 'EAST','SOUTH', 'SOUTH', 'WEST', 'NORTH', 'SOUTH']);
