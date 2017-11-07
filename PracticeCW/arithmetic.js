//Diane Z submitted solution (see Best Practices from CodeWars below):

function zero(info) {return calc(info, 0);}
function one(info) {return calc(info, 1);}
function two(info) {return calc(info, 2);}
function three(info) {return calc(info, 3);}
function four(info) {return calc(info, 4);}
function five(info) {return calc(info, 5);}
function six(info) {return calc(info, 6);}
function seven(info) {return calc(info, 7);}
function eight(info) {return calc(info, 8);}
function nine(info) {return calc(info, 9);}


function calc(info, i) {
    
    if (typeof info === 'undefined') {
        return i;
    
    } else {
        switch (info.op) {
            case 'plus':
                return (i + info.int2);
            case 'minus':
                return (i - info.int2);
            case 'times':
                return (i * info.int2);
            case 'dividedBy':
                return (i / info.int2);
            default:
                return 'Error';
        }
    }
}


function plus(int2) {return {op: 'plus', int2: int2};}
function minus(int2) {return {op: 'minus', int2: int2};}
function times(int2) {return {op: 'times', int2: int2};}
function dividedBy(int2) {return {op: 'dividedBy', int2: int2};}

console.log(two(plus(zero())));
console.log(five(minus(two())));
console.log(six(times(seven())));
console.log(eight(dividedBy(four())));


/////////////////////////////////////////////////////////
// Best practices solution with most votes from CodeWars:
//var n = function(digit) {
//  return function(op) {
//    return op ? op(digit) : digit;
//  }
//};
//var zero = n(0);
//var one = n(1);
//var two = n(2);
//var three = n(3);
//var four = n(4);
//var five = n(5);
//var six = n(6);
//var seven = n(7);
//var eight = n(8);
//var nine = n(9);
//
//function plus(r) { return function(l) { return l + r; }; }
//function minus(r) { return function(l) { return l - r; }; }
//function times(r) { return function(l) { return l * r; }; }
//function dividedBy(r) { return function(l) { return l / r; }; }