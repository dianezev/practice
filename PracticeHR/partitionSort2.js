function processData(arr) {
    var ctr = 1;
//    var isDone = false;
//    
//    while (!isDone) {
//        
//        
//    }
    
    var res = partition({done: [], toSort: arr});
    
    function partition(obj) {
        console.log('Partition # ' + ctr + ' done is ' + obj.done + ' and toSort is ' + obj.toSort);
        ctr++;
//console.log('done is ' + obj.done);
        var done = obj.done;
        var subArray = obj.toSort;
        var l = subArray.length;
        var left = [];
        var right = [];
        var equal = [subArray[0]];
  //              console.log('equal is: ');
//                console.log(equal);
        // left off here: problem this builds up equal when it shouldn't
        for (var i = 1; i < l; i++) {
            if (subArray[i] < subArray[0]) {
                left.push(subArray[i]);
  //              console.log('in if and left is ' + left);
            } else if (subArray[i] > subArray[0]) {
                right.push(subArray[i]);
    //            console.log('in else if and right is ' + right);
            } else {
                equal.push(subArray[i]);
      //          console.log('in final else and equal is ' + equal);
            }
//            (subArray[i] < subArray[0]) ? left.push(subArray[i]) :
//                    (subArray[i] > subArray[0]) ? right.push(subArray[i]) :
//                    equal.push(subArray[i]);
        }
        //        console.log('after for and equal is: ');
        //        console.log(equal);
        
        //console.log(left);
        //console.log(right);
        if (left.length <= 1) {
        //    console.log('in a');
        //        console.log('in a, equal is: ');
        //        console.log(equal);
            
            if (right.length <=1) {
        //        console.log('in b');
        //        console.log(left.concat(equal, right));
                console.log('returning done: ' + done.concat(left, equal, right));
                return {done: done.concat(left, equal, right), toSort: []}
                //return {done: left.concat(equal, right), toSort: []}
            } else {
                // LEFT OFF HERE: test this...
                // right needs work
//                console.log('in c');
//                console.log('left is:');
//                console.log(left);
//                console.log('in c, equal is: ');
//                console.log(equal);
//                return partition({done: left.concat(equal), toSort: right});
                  return partition({done: done.concat(left, equal), toSort: right});
            }
        } else {
//            console.log('in d');
//                console.log('left is:');
//                console.log(left);
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