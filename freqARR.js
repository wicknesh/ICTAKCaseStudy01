let arr =  [1,1,2,2,2,2,3,3,3,3,4,5,5,5,5]; //Array
Mfreq(arr); //Function call

function Mfreq(arr){ //Function
    let mCount = 0; //Variable to store the most frequency encountered
    let freq = {}; //Object to store item : frequency pairs
    let freqItem = []; //Array to store the most frequent item
    let check; //Variable to store items from array

    for (let x of arr){
        check = x;
        if(freq[check]){
            freq[check] += 1;
        }
        else{
            freq[check] = 1;
        }
        if(freq[check] > mCount){ //if-condition to check for the most frequency and store the most frequent item
            mCount = freq[check];
            freqItem = []; //Empty array
            freqItem.push(check);
            //freqItem = check;
        }
        else if(freq[check] == mCount) { //else-if condition to check for same frequency
            freqItem.push(check);
        }
    }
    console.log(`${freqItem} is/are the most frequent item/s.`); //Printing to console
}
