let arr =  [1,1,2,2,2,2,3,3,4,5,5,5,5,5];
Mfreq(arr);

function Mfreq(arr){
    let mCount = 0;
    let freq = {};
    let freqItem = 0;

    for (let x of arr){
        let check = x;
        if(freq[check]){
            freq[check] += 1;
        }
        else{
            freq[check] = 1;
        }
        if(freq[check] > mCount){
            mCount = freq[check];
            freqItem = check;
        }
    }
    console.log(`${freqItem} is the most frequent item`);
}
