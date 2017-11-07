// From HR's QuickSort 2 exercise (partition sort)
// 
// input:
//7
//5 8 1 3 7 9 2
//
//should yield:
//2 3
//1 2 3
//7 8 9
//1 2 3 5 7 8 9

function processData(arr) {
//    var data = input.split('\n');
//    var arr = data[1].split(' ').map(Number);

    var res = partition(arr);
    
    function partition(subArray) {
        var l = subArray.length;
        var left = [];
        var right = [];
        var equal = [subArray[0]];
        var segment = [];

        for (var i = 1; i < l; i++) {
            (subArray[i] < subArray[0]) ? left.push(subArray[i]) :
                    (subArray[i] > subArray[0]) ? right.push(subArray[i]) :
                    equal.push(subArray[i]);
        }

        // If lengths of left & right arrays > 1, continue to partition them
        if ((left.length > 1) && (right.length > 1 )) {

            // Continue to partition both left & right arrays
            segment = [].concat(partition(left),equal, partition(right));

        } else if (left.length > 1) {

            // Continue to partition left array
            segment = [].concat(partition(left),equal, right);

        } else if (right.length > 1 ) {

            // Continue to partition right array
            segment = left.concat(equal, partition(right));

        } else {
            
            // Terminal case
            segment = left.concat(equal, right);
        }
        console.log(segment.join(' '));
        return segment;        
    }
    
    return res;
} 
console.log(processData([5, 8, 1, 3, 7, 9, 2]));
console.log(processData([5, 8, 34, 1, 5, 3, 7, 3, 25, 9, 2, 1, 22]));