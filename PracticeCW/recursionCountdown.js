//Recursion countdown, adapted from SitePoint


var countdown = function(value) {
console.log('before if and value is ' + value);
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        console.log('inside else');
        return value;
    }
};
countdown(5);