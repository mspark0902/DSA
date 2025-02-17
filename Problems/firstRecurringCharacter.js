// Create a function that return the first recurring character from the array.

// Input [1,2,4,2,4,1] return 1
// Input [2,3,1,5,3,2,1] returns 3
// Input [1,2,3] reruns undefined

const firstRecurringCharacter = (array) =>{
    if(!array || array.length < 2) return undefined;
    var set = new Set();
    for(let i = 0;  i < array.length ; i++){
        if(set.has(array[i])){
            return array[i];
        }
        set.add(array[i]);
    }
    
}
console.log(firstRecurringCharacter([2,2]));