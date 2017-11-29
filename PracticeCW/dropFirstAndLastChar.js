// remove 1st & last chars from string
// note slice solution works on array as well

function removeChar(str){
  //return str.substr(1,str.length-2);
  
//  better:
  return str.slice(1, -1);
};
removeChar('eloquent');


function aspectRatio(x,y){
  return [ Math.ceil((16 / 9) * y), y];
}
aspectRatio(1920, 1440);