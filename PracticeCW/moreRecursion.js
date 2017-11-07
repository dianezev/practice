// n choose 2 (this code doesn't use recursion)
function choose2(inputArr) {
    var len = inputArr.length;
    
    function combine(arr, start, memo) {
        start = start || 0;
        memo = memo || [];
        var cur = [];
        var result = [];

        for (var i = start; i < len; i++) {
            //cur.push(arr[i]);
            if (memo.length === 3) {
                memo.pop();
            }
            memo.push(arr[i]);
            console.log('i is ' + i);
            //console.log(cur);
            console.log(memo);
            combine(arr, i + 1, memo);

//            for (var j = i + 1; j < len; j++) {
//                cur = [arr[i], arr[j]];
//                result.push(cur);
//            }
        }
        return result;
    }

    return combine(inputArr);
}

console.log(choose2(['a', 'b', 'c', 'd']));