// I submitted:
function makeParts(arr, chunkSize) {
  var j = Math.ceil(arr.length/chunkSize);
  var result = [];
  
  for (var k = 0; k < j ; k++) {
    result[k] = arr.slice( k * chunkSize, k * chunkSize + chunkSize);
  }
  
  return result;
}




// Better solution, from CW:
//function makeParts(arr, chunkSize) {
//  let newArr = [];
//  while (arr.length > 0){
//    newArr.push(arr.splice(0, chunkSize));
//    }
//  return newArr;
//}