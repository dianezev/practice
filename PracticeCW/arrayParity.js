//In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
//
//For example,
//
//solve[1,-1,2,-2,3] = 3  --> 3 only has a positive ocurrence.
//solve([-3,1,2,3,-1,-4,-2]) = -4  --> -4 only has a negative occurence
//solve([1,-1,2,-2,3,3]) = 3  --> the integer that is only positive or only negative my appear more than once.
//Good luck!


function solve(arr) {


}

console.log(solve([-110,110,38,-38,-62,62,38,38,-38]));



// Note to self: I assumed that an input array like
// console.log(solve([-110,110,38,-38,-62,62,38,38,-38]));
// should return 38 since it's mismatched with # of -38s
// but other coders submitted solutions that just 
// checked for existence of + and - i, not for matching counts.

function solve(arr){
  var pos = {};
  var neg = {};
  var ans = 0;
  var keys;
  
  for (var i = 0; i < arr.length ; i++) {
    if (arr[i] < 0) {
      (neg.hasOwnProperty(-arr[i]))
      ? neg[-arr[i]]++
      : neg[-arr[i]] = 1;
    } else {
      (pos.hasOwnProperty(arr[i]))
      ? pos[arr[i]]++
      : pos[arr[i]] = 1;
    }
  }

  keys = Object.getOwnPropertyNames(pos);
  
  for (var i = 0; i < keys.length ; i++) {
    
    if ((neg.hasOwnProperty(keys[i])) 
          && (pos[parseInt(keys[i])] === neg[parseInt(keys[i])])) {
      delete pos[keys[i]];
      delete neg[keys[i]];
    } else {
      
      // COERCE to number
      ans = +keys[i];
      break;
    }    
  }

  // If no answer found in above loop over pos object, the
  // answer should be first key remaining in neg object
  // (note there might be more than one of same value though, ie [-110,110,38,-38,-62,62,38,38,-38]
  if (ans === 0) {
    ans = -Object.getOwnPropertyNames(neg)[0];
  }
  
  return ans;
}


/*************************
make two obj - neg & pos
enumerate or something to check





***************************/

console.log(solve([-110,110,38,-38,-62,62,38,38,-38]));




/********************************/
//user solutions:

const solve = arr => [...new Set(arr)].reduce((p, c) => p + c);