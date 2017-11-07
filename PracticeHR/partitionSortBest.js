// Similar to HR's QuickSort 2 exercise (partition sort) - but simply returns sorted array
// 
// input:
//7
//5 8 1 3 7 9 2
//
//should yield:
//[1, 2, 3, 5, 7, 8, 9]

function partitionSort(arr) {
    var res = partition(arr);
    
    function partition(a) {
        var l = a.length;
        var left = [];
        var right = [];
        var equal = [a[0]];
        var segment = [];

        for (var i = 1; i < l; i++) {
            (a[i] < a[0]) ? left.push(a[i]) :
                    (a[i] > a[0]) ? right.push(a[i]) :
                    equal.push(a[i]);
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
        return segment;        
    }
    
    return res;
} 
console.log(partitionSort([5, 8, 1, 3, 7, 9, 2]));
console.log(partitionSort([5, 8, 34, 1, 5, 3, 7, 3, 25, 9, 2, 1, 22]));