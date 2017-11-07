// variation on CodeWars Range Extraction exercise
// return array with consecutive numbers expressed as range

// Easier to read than first version below
function solution(list){
    var str = "";
    var res = [];
    var i = 0;
    var lastIndex = list.length - 1;
    var ct;
 
    while (i <= lastIndex) {
        str = list[i].toString();
        
        // return a 0-based counter for # consecutive integers
        ct = getRg(list.slice(i));
        if (ct > 0) {
            str += '-' + list[(i + ct)].toString();
        }
        res.push(str);
        i += ct + 1;
    }
    
    function getRg(arr) {
        var j = 0;
        while (j < (arr.length - 1) ) {
            if ((arr[j + 1] - arr[j]) === 1) {
                j++;
            } else {
                break;
            }
        }
        return j;
    }
    
    return res;
}

console.log(solution([1,2,3,4]));
console.log(solution([1,3,4,5,8]));
console.log(solution([1,2,5,7,8,9]));
console.log(solution([1,2,3,4, 7,8,9, 10]));


// This worked, but looking for improvements
function solution(list){
    var str = "";
    var res = [];
    var i = 0;
    var j = 0;
    var lastIndex = list.length - 1;
 
    while (i <= lastIndex) {
        j = 1;
        str = list[i].toString();

        if ( i < lastIndex) {

            while ((i + j) <= lastIndex) {
                if (((list[i + j] - list[i + j - 1]) !== 1 )) {

                    // If gap > 1, append to result array
                    if (j > 1) {
                        str += '-' + list[(i + j - 1)].toString();
                    }
                    console.log('break out of inner while with i = ' + i + ' and j = ' + j);
                    break;
                }
                if ((i + j) === lastIndex) {

                    // If at end of array, append last el
                    str += '-' + list[(i + j)].toString();
                    console.log('break out of inner at end of arr with i = ' + i + ' and j = ' + j);
                    i++;
                    break;
                }
                j++;
            }
        }
        
        res.push(str);
        i += j;
    }

    return res;
}
