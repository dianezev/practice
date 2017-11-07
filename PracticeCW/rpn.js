//Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
//
//For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
//
// 
//
//Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.
//
//Empty expression should evaluate to 0.
//
//Valid operations are +, -, *, /.
//
//You may assume that there won't be exceptional situations (like stack underflow or division by zero).

function calc(expr) {
    var res = 0;
    var arr = expr.split(' ');
    
    if (arr.length === 0 ) {return 0;}
    
    //for ( var i = arr.length - 1 ; i >0 ; i--) {
        
    var i = arr.length - 1;
    do {
    //var i = 2;
        console.log('i is ' + i);
        if (isNaN(Number(arr[i]))) {
            var temp = arr[i];
            console.log(temp);
            console.log(arr[i]);
            console.log(arr[i-1]);
            arr[i] = arr[i - 1];
            //console.log(temp);
            arr[i - 1] = temp;
            console.log(temp);
            console.log(arr[i]);
            console.log(arr[i-1]);
            i--;
        }
        i--;
    } while (i > 0);
    //}
    
    return arr;
    //return res;
}
console.log(calc("5 1 2 + 4 * + 3 -"));
//console.log(calc(""));
//console.log(calc("1 2 3"));
//console.log(calc("1 2 3.5"));
//console.log(calc("1 3 +"));
//console.log(calc("1 3 *"));
//console.log(calc("1 3 -"));
//console.log(calc("4 2 /"));


//Test.assertEquals(calc(""), 0, "Should work with empty string");
//Test.assertEquals(calc("1 2 3"), 3, "Should parse numbers");
//Test.assertEquals(calc("1 2 3.5"), 3.5, "Should parse float numbers");
//Test.assertEquals(calc("1 3 +"), 4, "Should support addition");
//Test.assertEquals(calc("1 3 *"), 3, "Should support multiplication");
//Test.assertEquals(calc("1 3 -"), -2, "Should support subtraction");
//Test.assertEquals(calc("4 2 /"), 2, "Should support division");
