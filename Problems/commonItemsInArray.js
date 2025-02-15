//Given two arrays, create a function that says the two arrays 
//having common items or not

//Input array1 = ['a', 'b', 'd', 'e'] array2 = ['a', 'k, 'y' ] returns true
//Input array1 = ['a', 'b', 'd', 'e'] array2 = ['t', 'k, 'y' ] returns false

const checkCommonItemsNaive = (array1, array2) =>{
   for(let item1 of array1){
        for(let item2 of array2){
            if(item1 === item2) return true
        }
   }
    return false;
}

const array1 = ['a', 'b', 'd', 'e' , 'e'],  array2 = ['j', 'k', 'y' ];

checkCommonItemsNaive(array1, array2) //O(n^2)

const checkCommonItems =  (array1, array2) => {
    
    let map = {};

    // adds the unique items in a hashtable
    for (let item1 of array1){
        if(!map[item1]){
            map[item1] = true;
        }
    }

    for (let item2 of array2){
        if(map[item2]) return true;
    }
    
    return false;
}

console.log(checkCommonItems(array1, array2)); //O(n +  m)

//This is better approach
