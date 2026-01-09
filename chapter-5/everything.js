// Exercise 3: Everything

// 1st version: using a loop
function every(arr, predicate) {
    for (let element of arr) {
        if (!predicate(element)) return false;
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// 2nd version: using the some method
// The main idea behind this solution is that, if the some
// method returns false when the test in its predicate
// is the opposite version of the one passed into the function,
// then all elements of the array satisfy that test in its
// original form.

function every(arr, predicate) {
    return !arr.some(e => !predicate(e));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
