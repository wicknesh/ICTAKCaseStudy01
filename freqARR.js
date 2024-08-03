let arr =  [1,1,2,2,2,2,3,3,4,5,5,5,5,5]; //Array
Mfreq(arr); //Function call

function Mfreq(arr){ //Function
    let mCount = 0; //Variable to store the most frequency encountered
    let freq = {}; //Object to store item : frequency pairs
    let freqItem = 0; //Variable to store the most frequent item

    for (let x of arr){
        let check = x;
        if(freq[check]){
            freq[check] += 1;
        }
        else{
            freq[check] = 1;
        }
        if(freq[check] > mCount){ //if-condition to check for the most frequency and store the most frequent item
            mCount = freq[check];
            freqItem = check;
        }
    }
    console.log(`${freqItem} is the most frequent item`); //Printing to console
}
