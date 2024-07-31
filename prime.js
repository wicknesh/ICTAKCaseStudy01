var primVal = 0;
function prime(arr) {
    if(arr[0] == 1){
        console.log(`${arr[0]} is neither prime nor composite`);
        return;
    }
    else if(arr[0] > 1){
        for(let i = 2; i < arr[0]; i++){
            if(arr[0] % i == 0){
                primVal = 1;
            }
        }
    }
    return primVal?console.log(`${arr[0]} not prime.`) : console.log(`${arr[0]} is prime.`);
}

let arr = [15, 41, 2, 68];
prime(arr);