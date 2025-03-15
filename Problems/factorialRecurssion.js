// write a function that returns the factorial of a number.
//Example input = 5 then output is 120

const factorialResurssion = (number) =>{
    var answer = 1;
    if(number > 1){ 
        answer  = number * factorialResurssion(number-1);
    }
    return answer;
}


const factorialIterative = (number) =>{
    var answer = 1;
    for(var i = number; i >=1 ; i--){
       answer = answer * i ;
    }

    return answer;
}

console.log(factorialResurssion(0))
console.log(factorialIterative(50000))