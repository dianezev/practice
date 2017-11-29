//In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.
//
//For example:
//
//doubles('abbcccdddda') = 'aca', because, from left to right:
//
//a) There is only one 'a' on the left hand side, so it stays.
//b) The 2 b's disapper because we are removing double characters that are adjacent. 
//c) Of the 3 c's, we remove two. We are only removing doubles. 
//d) The 4 d's all disapper, because we first remove the first double, and again we remove the second double.
//e) There is only one 'a' at the end, so it stays.
//Two more examples: doubles('abbbzz') = 'ab' and doubles('abba') = "". In the second example, when we remove the b's in 'abba', the double a that results is then removed.
//
//The strings will contain lowercase letters only. More examples in the test cases.
//
//Good luck!
//  
  // start at end
  // set compare to last char
  
// check case of consecutive pairs
// check case of 1 char in betw pairs
// make recursive to catch abba -> ''
// or just change i differently?

function doubles(s) {
  var strArr = s.split('');
  var l = strArr.length;
  var matchChar;
  var i = l - 2;

  while (i >= 0) {
    matchChar = strArr[i + 1];

    if (matchChar === strArr[i]) {
      strArr.splice(i, 2);
      
      // extra decrement needed if deletion was at end of strArr
      if (strArr.length <= i) { 
        i--;
      }
    } 
    i--;
  }
  return strArr.join('');
}

console.log(doubles('abbcccdddda'));

/*************************************************************
 * solutions by other users:
 **************************************************************/

// recursion
function doubles(s){
    for (let i = 0;  i < s.length-1; i++) {
      if (s[i] === s[i + 1]) return doubles(s.slice(0,i) + s.slice(i+2));
    }
  return s;
}
 
 // push & pop
 function doubles(s) {
  const cs = [];
  for (const c of s) {
    if (cs.length != 0 && cs[cs.length - 1] == c)
      cs.pop();
    else
      cs.push(c);
  }
  return cs.join('');
}