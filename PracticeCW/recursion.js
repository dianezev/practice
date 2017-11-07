// Diane adapted from SO sample (see link below)
function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
      console.log('inside permute and arr and memo are:');
      console.log(arr);
      console.log(memo);
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
        console.log('in for and i is ' + i);
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
          console.log('in if and cur is ' + cur);
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
        console.log('after recursive call and arr is ');
        console.log(arr);
      arr.splice(i, 0, cur[0]);
        console.log('after final splice and arr is ');
        console.log(arr);
    }

    return results;
  }

  return permute(inputArr);
}

console.log(permutator([1,2,3]));

// Started with the following from a comment on 
// http://stackoverflow.com/questions/9960908/permutations-in-javascript

//function permutator(inputArr) {
//  var results = [];
//
//  function permute(arr, memo) {
//    var cur, memo = memo || [];
//
//    for (var i = 0; i < arr.length; i++) {
//      cur = arr.splice(i, 1);
//      if (arr.length === 0) {
//        results.push(memo.concat(cur));
//      }
//      permute(arr.slice(), memo.concat(cur));
//      arr.splice(i, 0, cur[0]);
//    }
//
//    return results;
//  }
//
//  return permute(inputArr);
//}

// Or in ES6:
//const permutator = (inputArr) => {
//  let result = [];
//
//  const permute = (arr, m = []) => {
//    if (arr.length === 0) {
//      result.push(m)
//    } else {
//      for (let i = 0; i < arr.length; i++) {
//        let curr = arr.slice();
//        let next = curr.splice(i, 1);
//        permute(curr.slice(), m.concat(next))
//     }
//   }
// }
//
// permute(inputArr)
//
// return result;
//}