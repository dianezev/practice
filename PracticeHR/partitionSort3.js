// From HR's QuickSort 2 exercise
// seems to get correct sort order but does not display incrementally sorted pieces, i.e.
//
//7
//5 8 1 3 7 9 2
//
//should yield:
//2 3
//1 2 3
//7 8 9
//1 2 3 5 7 8 9

function processData(arr) {
    var ctr = 1;
    var res = partition({done: [], toSort: arr, pivot: [], remains: []});
    
    function partition(obj) {
        console.log('Partition # ' + ctr + ' done is ' + obj.done + ' and toSort is ' + obj.toSort + ' and pivot is ' + obj.pivot + ' and remains is ' + obj.remains);

        ctr++;

        var done = obj.done;
        var subArray = obj.toSort;
        var toSort;
        var pivot = obj.pivot;
        var remains = obj.remains;
        var l = subArray.length;
        var left = [];
        var right = [];
        var equal = [subArray[0]];

        for (var i = 1; i < l; i++) {
            (subArray[i] < subArray[0]) ? left.push(subArray[i]) :
                    (subArray[i] > subArray[0]) ? right.push(subArray[i]) :
                    equal.push(subArray[i]);
        }

        if (left.length <= 1) {
            done = done.concat(left,equal);
            
            if (right.length <=1) {
                done = done.concat(right, pivot);
                if (remains.length <=1) {
                    
                    // Terminal case
                    done = done.concat(remains);
                    return {done: done, toSort: [], pivot: [], remains: []};
                    
                } else {
                    
                    toSort = remains;
                    return partition({done: done, toSort: remains, pivot: [], remains: []});
                }
            } else {
                toSort = right;
                return partition({done: done, toSort: toSort, pivot: pivot, remains: remains});
            }
        
        // Otherwise if left.length > 1, continue to sort it
        } else {

            return partition({done: done, toSort: left, pivot: equal, remains: right.concat(pivot, remains)});
        }
    }
    return res.done;
} 
console.log(processData([5, 8, 1, 3, 7, 9, 2]));
console.log(processData([5, 8, 34, 1, 5, 3, 7, 3, 25, 9, 2, 1, 22]));