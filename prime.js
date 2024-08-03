var primVal = 0; //Flag variable
function prime(arr) { //Function start
    if(arr[0] == 0 || arr[0] == 1){ //0 or 1 if-condition
        console.log(`${arr[0]} is neither prime nor composite!`);
        return;
    }
    else if(arr[0] > 1){
        for(let i = 2; i < arr[0]; i++){ //For-loop for checking factors other than 1 and itself
            if(arr[0] % i == 0){
                primVal = 1; //Flag variable
            }
        }
    }
    return primVal?console.log(`${arr[0]} not prime.`) : console.log(`${arr[0]} is prime.`); //Return statement
}

let arr = [5, 41, 2, 68]; //Input array
prime(arr); //Function call