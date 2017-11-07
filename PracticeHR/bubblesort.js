function junk(a) {
var n = a.length;
for (var i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    var numberOfSwaps = 0;
    
    for (var j = 0; j < n - 1; j++) {
        console.log('i and j are ' + i + ' '+ j);
        
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap();
            numberOfSwaps++;
            console.log(a);
        }
        function swap() {
            var temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
    
    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
        break;
    }
}

}

console.log(junk([10,1,13,2,5,3,16,4]));