// Diane's solution to CodeWars 'Implementing Array Objects'

function List(){
    this.length = arguments.length;
    for (var i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
}

List.prototype.push = function(){
    var start = this.length;
    
    for (var i = 0, l = arguments.length ; i < l; i++) {
        this[i + start] = arguments[i];
        this.length++;
    }
    
    return this.length;
};

List.prototype.pop = function(){
    var el = this[this.length -1];

    delete this[this.length -1];
    this.length--;

    return el;
};

List.prototype.shift = function(){
    var el = this[0];

    for (var i = 0, l = this.length - 1; i < l ; i++) {
        this[i] = this[i + 1];
    }

    delete this[this.length-1];
    this.length--;

    return el;
};

List.prototype.unshift = function(){

    // Adjust indeces of existing elements to make room for new elements at front of array
    for (var i = arguments.length + this.length - 1, l = arguments.length; i >= l ; i--) {
        this[i] = this[i -arguments.length];
    }

    // Fill front of array with new elements
    for (var i = 0, l = arguments.length; i < l ; i++) {
        this[i] = arguments[i];
        this.length++;
    }

    return this.length;
};

List.prototype.filter = function(cb){
    var newList = new List();

    // Note to self: didn't use hasOwnProp here cuz it includes the length prop
    for (var i = 0, l = this.length; i < l ; i++) {
        if (cb(this[i])) {
            newList.push(this[i]);
        }    
    }
    
    return newList;
};

function biggerThan7(val) {
    return (val > 7) ? true : false;
}

// More flexible alternative but CodeWars verification not set to work with this
//function biggerThan(test, val) {
//    return (val > test) ? true : false;
//}
//List.prototype.filter = function(cb, test){
//    var newList = new List();
//
//    for (var el in this) {
//        if (this.hasOwnProperty(el)) {
//            if (cb(test, this[el])) {
//                newList.push(this[el]);
//            }
//        }
//    }   
//    return newList;
//}
//console.log(list.filter(biggerThan, 7));




var list = new List(1,2,3,4);
console.log(list);

console.log(list.push(8));
console.log(list);

console.log(list.push(8,11,12));
console.log(list);

console.log(list.pop());
console.log(list);

console.log(list.shift());
console.log(list);

console.log(list.shift());
console.log(list);

console.log(list.push(9));
console.log(list);

console.log(list.shift());
console.log(list);

console.log(list.unshift(7,8,9));
console.log(list);

console.log(list.filter(biggerThan7));
console.log(list);

