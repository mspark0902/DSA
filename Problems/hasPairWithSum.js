//Given a array and a sum value, create a function that takes
//arrays and sum to check it a pairs add up to the sum value

//input [1 ,2, 4, 5, 7] sum 7 return true
//input [1 ,2, 4, 5, 7] sum 8 return false


const checkPairSumNaive = (array, sum) => {
    var len =  array.length; //5

    for (var i = 0; i < len-1 ; i++){
        for(var j = i + 1; j < len; j++){
            if(array[i] + array[j] == sum) return true;
        }
    }

    return false;
}

const array1 = [1 ,2, 4, 5, 7];
checkPairSumNaive(array1, 7); //O(n^2)


const checkPairSum = (array, sum) => {
    var min = 0; 
    var max = array.length - 1; //so this approach works only if the array is sorted

    while(min < max){
        var addedValue =array[min] + array[max];
        if(addedValue == sum){
            return true;
        }
        else if(addedValue < sum){
            min++;
        }
        else{
            max--;
        }
    }

    return false;
}

console.log(checkPairSum(array1,67)) //O(n)

//TODO write a approach if unsorted