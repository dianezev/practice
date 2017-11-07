function processData(arr) {
    var l = arr.length;
//    var isDone = false;
//    
//    while (!isDone) {
//        
//        
//    }
    
    var res = partition({done: [], toSort: arr});
    
    function partition(obj) {
        var done = obj.done;
        var subArray = obj.toSort;
        var left = [];
        var right = [];
        var equal = [subArray[0]];
        
        for (var i = 1; i < l; i++) {
            (subArray[i] < subArray[0]) ? left.push(subArray[i]) :
                    (subArray[i] > subArray[0]) ? right.push(subArray[i]) :
                    equal.push(subArray[i]);
        }
        console.log(left);
        console.log(right);
        if (left.length <= 1) {
            console.log('in a');
            if (right.length <=1) {
                console.log('in b');
                return {done: left.concat(equal, right), toSort: []}
            } else {
                // LEFT OFF HERE: test this...
                // right needs work
                console.log('in c');
                return partition({done: left.concat(equal), toSort: right});
            }
        } else {
            console.log('in d');
            return partition({done: [], toSort: left});
        }
            //partition({done: left.concat(equal), toSort: right});
//        } else {
//            partition({done: [], toSort: left})
//        //return {left:partition(left), equal: equal, right: partition(right)};
//        }
    }
} 
console.log(processData([5, 8, 1, 3, 7, 9, 2]));