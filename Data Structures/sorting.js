//create a bubble sort algorithm which sorts the given array
//input: [2,8,56,23,1,12,40]
const data = [2,8,56,23,1,12,40];

const bubbleSort = (array) =>{
    var length = array.length;
    for(var i = 0 ; i < length; i++ ){
        for(var j = 0 ; j < length ; j++ ){
            if(array[j] > array [j + 1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }

    return array;
}

const selectionSort = (array) => {
    var length = array.length;
    for(var i = 0 ; i < length; i++ ){
        for(var j = i + 1 ; j < length ; j++ ){
            if(array[i] > array[j]){
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }

    return array; 
}


const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            } else {
                break; // Stop if the current element is in the right place
            }
        }
    }
    return array;
};

//input: [8,3,2,1]
const mergeSort = (array) => {
   if(array.length === 1) return array;

   var mid = Math.floor(array.length / 2)

   var left = array.slice(0, mid);

   var right = array.slice(mid);

   return merge(mergeSort(left), mergeSort(right))
};

const merge = (left, right) =>{
    var newArray = [];
    let i = 0, j = 0;
   
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArray.push(left[i]);
            i++;
        } else {
            newArray.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from left (if any)
    while (i < left.length) {
        newArray.push(left[i]);
        i++;
    }

    // Add remaining elements from right (if any)
    while (j < right.length) {
        newArray.push(right[j]);
        j++;
    }

    return newArray;
}

// console.log(bubbleSort(data));
// console.log(selectionSort(data));
// console.log(insertionSort(data));
console.log(mergeSort(data));
