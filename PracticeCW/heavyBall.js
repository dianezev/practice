// Codewars Find Heavy Ball

function findBall(scales, ball_count) {
    var answer = [];
    var x = 0;  // for testing only
    var myArr = Array(ball_count).fill().map((y,i)=>i);
    
    // Same as...
    //var myArr = Array(ball_count).fill().map(function(y, i) {
    //    return i;
    //});

    // Loop slices array down to heaviest element
    do {
        myArr = sliceThirds(myArr);
        
        if (myArr.length === 1) {
            answer = [myArr[0]];
            
            // temp
            x = -1;
        } else {
            
            //temp
            x++;
        }
    } while (answer.length === 0);
    
    return answer[0];
    
    // Split array into thirds & return the array that contains heaviest ball
    function sliceThirds(arr) {
        
        // Get 1/3 of array len & round up - use for both leftArr and centerArr
        var size = Math.ceil(arr.length/3);
        var leftArr = arr.slice(0, size);
        var centerArr = arr.slice(size, 2 * size);
        
        // Note right array contains what's left of 'arr' and won't necessarily be same length as leftArr and centerArr
        var rightArr = arr.slice(2 * size);        
        var w = getWeight(leftArr, centerArr);
        
        if (w===1) {
            return centerArr;
        } else if (w === 0) {
            return rightArr;
        } else {
            return leftArr;
        }
    }
   
    // temp (getWeight is built-in to codewars problem)
    function getWeight(left, right) {
        if (x === 0) {return 1}
        if (x === 1) {return -1}
        if (x === 2) {return 1}
        if (x > 2) {return -1}
        
        //return -1; // left pan heavier
        //return 0; // pans equal
        //return 1; //right pan heavier
    }
}

console.log(findBall({}, 99));

// Submitted to codewars:
//function findBall(scales, ball_count) {
//    var answer = [];
//    var myArr = Array(ball_count).fill().map((x,i)=>i);
//    var myArr = Array(ball_count).fill().map(function(x, i) {
//        return i;
//    });
//
//    // Loop slices array down to heaviest element
//    do {
//        console.log('arr is ' + myArr);
//        myArr = sliceThirds(myArr);
//        
//        console.log(myArr.length);
//        if (myArr.length === 1) {
//            answer = [myArr[0]];
//        }
//    } while (answer.length === 0);
//    
//    return answer[0];
//    
//    // Split array into thirds & return the array that contains heaviest ball
//    function sliceThirds(arr) {
//        
//        // Get 1/3 of array len & round up - use for both leftArr and centerArr
//        var size = Math.ceil(arr.length/3);
//        var leftArr = arr.slice(0, size);
//        var centerArr = arr.slice(size, 2 * size);
//        
//        // Note right array contains what's left of 'arr' and won't necessarily be same length as leftArr and centerArr
//        var rightArr = arr.slice(2 * size);        
//        var w = scales.getWeight(leftArr, centerArr);
//        
//        if (w===1) {
//            return centerArr;
//        } else if (w === 0) {
//            return rightArr;
//        } else {
//            return leftArr;
//        }
//    }
//}
