//Replace with alphabet position

//Diane Z solution:

function alphabetPosition(text) {
  var codeArr = [];
  var c;

  for (var i of text) {
    c = i.toUpperCase().charCodeAt();
    if ((c <= 90) && (c >= 65)) {
      codeArr.push(c - 64);
    }
  }
  
  return codeArr.join(' ');
}

console.log(alphabetPosition("Diane"));