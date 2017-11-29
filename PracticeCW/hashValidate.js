//In this scenario, a valid hash value consists of five numbers and five lowercase letters in any order.
//
//Return an array of valid hash values, and eliminate any duplicates.


function malwareValidate(hashArr) {
  var re1 = /^[a-z0-9]{10}$/; // check exactly 10 chars, alpha and lowercase
  var re2 = /\d/g;  // used to check exactly 5 digits
  var temp;
  var compare;
  
  // Remove if not 10 lc alphanum chars with exactly 5 digits
  for (var i = hashArr.length - 1; i >= 0 ; i--) {
    temp = hashArr[i].match(re2);
    
    if ((!re1.test(hashArr[i])) || (temp === null) || (temp.length !== 5)) {
    
      hashArr.splice(i,1);    
    }
  }
  
  // I think findIndex would be same complexity
  // or lastIndexOf comparison
  // Loop to remove duplicates - n^2?
  for (var i = 0; i < hashArr.length ; i++) {
    compare = hashArr[i];    
    for (var j = hashArr.length - 1; j > i  ; j--) {
      if (hashArr[j] === compare) {
        hashArr.splice(i,1);  
      }
    }
    
// or alternative - probably slower:    
//    last = hashArr.lastIndexOf(compare);
//    while (i !== last) {
//      hashArr.splice(last,1);  
//      last = hashArr.lastIndexOf(compare);
//    }    
    
  }
  
  return hashArr;
}
malwareValidate(['06v58j56se','075d6u4k54','09iasdfue809rs','0o568h016k','0324g2keub','0aoq14','0pl3p5asdfxpa4','05ow0asdf6cgkb','037op7o','0mckp4k8']);

/**********************************************
 * other user solution:
 *********************************************/

// This is 'curried function'
var malwareValidate=(h,r=h.filter(a=>
                            a.replace(/\d/g,'').length==5
                          &&a.replace(/[a-z]/g,'').length==5
                          &&a.length==10))=>
                              r.filter((a,i)=>
                                  r.indexOf(a)==i);
malwareValidate(['06v58j56se','0324g2keub','0324g2keub','075d6u4k54','09iasdfue809rs','0o568h016k','0324g2keub','0aoq14','0pl3p5asdfxpa4','05ow0asdf6cgkb','037op7o','0mckp4k8']);


// Diane experiment with above example
// Breaking above down, trying to better understand curried function:

function malwareValidate(h) {
  var r=h.filter(a=>
                  a.replace(/\d/g,'').length==5
                &&a.replace(/[a-z]/g,'').length==5
                &&a.length==10);
  var ans = r.filter((a,i) => r.indexOf(a) === i);
  console.log(ans);
}
malwareValidate(['06v58j56se','0324g2keub','0324g2keub','075d6u4k54','09iasdfue809rs','0o568h016k','0324g2keub','0aoq14','0pl3p5asdfxpa4','05ow0asdf6cgkb','037op7o','0mckp4k8']);

// or chain
function malwareValidate(h) {
  return (r=h.filter(a=>
                  a.replace(/\d/g,'').length==5
                &&a.replace(/[a-z]/g,'').length==5
                &&a.length==10))
                    .filter((a,i) => r.indexOf(a) === i);
}
malwareValidate(['06v58j56se','0324g2keub','0324g2keub','075d6u4k54','09iasdfue809rs','0o568h016k','0324g2keub','0aoq14','0pl3p5asdfxpa4','05ow0asdf6cgkb','037op7o','0mckp4k8']);
