//Sum nested arrays
//Implement a function to calculate the sum of the numerical values in a nested list. For example :
//
//sumNested([1, [2, [3, [4]]]]) => 10

const sumNested = arr => {
  var mySum = 0;    
  var total = drillSums(arr, 0);
  
  function drillSums(stuff, sum) {
    
    // Base case if stuff is not array
    if (!Array.isArray(stuff)) {
      mySum += stuff;
    
    // Otherwise continue drilling into array to get sum
    } else {
      for (var k = 0 ; k < stuff.length ; k++) {
        drillSums(stuff[k], mySum);
      }
    }
    
    return mySum;
  }
  return total;

};

// above same as:

//function sumNested(arr) {
//  var mySum = 0;    
//  var total = drillSums(arr, 0);
//  
//  function drillSums(stuff, sum) {
//    
//    // Base case if stuff is not array
//    if (!Array.isArray(stuff)) {
//      mySum += stuff;
//    
//    // Otherwise continue drilling into array to get sum
//    } else {
//      for (var k = 0 ; k < stuff.length ; k++) {
//        drillSums(stuff[k], mySum);
//      }
//    }
//    
//    return mySum;
//  }
//  return total;
//}

console.log(sumNested([1, [2], [5, [10]], [21, [30], [50, [100]]]]));


// other user solutions
const sumNested = arr => {
  if ( arr.length == 0 ) return 0;
  var value =  ( Array.isArray( arr[0] )) ? sumNested( arr[0] ) : arr[0];
  return sumNested( arr.slice( 1, arr.length )) + value;
};

///************************LOVE THIS ONE******************************/
const sumNested = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce(function(accumulator, currentValue) {
      return accumulator + sumNested(currentValue);
    }, 0);
  } else {
    return arr;
  }
};
console.log(sumNested([1, [2], [5, [10]], [21, [30], [50, [100]]]]));
