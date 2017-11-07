// Balanced brackets

function main(s) {
//    var t = parseInt(readLine());
//    for(var a0 = 0; a0 < t; a0++){
//        var s = readLine();
    var len;
    var re = new RegExp(/\{\}|\(\)|\[\]/);
    
    do {
        len = s.length;
        s = s.replace(re,'');
    } while (s.length < len);
        
    console.log((s.length === 0) ? 'YES' : 'NO');
  
        
//    }

}


console.log(main('({(}))'));