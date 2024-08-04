let array = [1,2,3,4,5,6,7,8,9,10]; //Input array
let sum = 0; //Sum variable

for (const item of array) { //For-loop for array
    sum += item * item; //Adding the squares of each element
}

console.log(`${sum} is the sum of squares of the elements of the array.`); //Printing to console