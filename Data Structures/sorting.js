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

//input: [8,3,1,2,1,12,40]
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
console.log(bubbleSort(data));
console.log(selectionSort(data));
console.log(insertionSort(data));
