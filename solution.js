//1
function doubleValues(array) {
   
    const currentArray = array.map(element => element * 2);
    return currentArray;
}
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));

//2
function onlyEvenValues(array) {
    const currentArray = [];
    array.forEach(element => {
        if (element % 2 === 0) {
            currentArray.push(element);
        }
    });
    return currentArray;
}
console.log(onlyEvenValues([1, 2, 3])); // [2]
console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2,10] 


//3
function showFirstAndLast(array) {
    const currentArray = array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
    return currentArray;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));