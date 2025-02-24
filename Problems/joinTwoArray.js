//Create a function that takes two sorted arrays and merge into 1 array which is sorted

//Input [1,2,45,65] [4,45,49] returns [1,2,4,45,45,49,65]

const mergeArrays = (array1, array2) =>{
    if(!array1 || !array2) return [];

    const fullArray = [];

    var i= 0, j= 0;
    var item1 = array1[i];
    var item2  = array2[j];

    while(item1 || item2){
        if(!item2 || item1 < item2){
            fullArray.push(item1);
            i++;
            item1 =array1[i];
        }else{
            fullArray.push(item2);
            j++;
            item2 = array2[j];
        }
    }

    return fullArray;
}

const array1 =[1,2,45,65], array2 =[4,45,49];
console.log(mergeArrays(array1,array2)) // 0(n)