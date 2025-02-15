//create a funtion that takes a string as input and returns a
//reverse of that string

//input santhosh - hsohtnsa

const reverseString = (string) =>{
    if(!string || string.length < 2 || typeof string != "string") return "This is not a valid input"
    return string.split('').reverse().join("");
}

console.log(reverseString(1)); //O(n)

const reverseString2 = (string) => {
    if(!string || string.length < 2 || typeof string != "string") return "This is not a valid input"

    var reversed = [];

    for (let i = 0 ; i < string.length ; i++){
        reversed.unshift(string[i]);
    }
    return reversed.join('')
}

console.log(reverseString("santhosh"));