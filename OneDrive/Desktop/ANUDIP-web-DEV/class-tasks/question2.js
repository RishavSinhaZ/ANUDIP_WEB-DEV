// 1. Create the Array

let n = prompt("Enter a number:");
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(i);
}
console.log("Your array:", arr);


// 2. Calculate Sum (using reduce)

let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("Sum of array:", sum);


// 3. Calculate Product (Factorial)

let product = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("Product (Factorial):", product);


// 4. Find the Largest Number

let largest = arr.reduce((max, curr) => {
    return curr > max ? curr : max;
});
console.log("Largest number:", largest);