//Write a function that takes the index and returns the fibonachi number in the index.
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987
//Example index = 5 returns 3

const fibonachiTimeComplex = (index) =>{

    if (index === 0) return 0;  // Base case 1
    if (index === 1) return 1;  // Base case 2

    return fibonachi(index - 1) + fibonachi(index - 2);  // Recursive step
}

const fibonachi = (index,memo = {}) =>{

    if (index === 0) return 0;  // Base case 1
    if (index === 1) return 1;  // Base case 2

    if (memo[index]) return memo[index];  // Return cached value if exists

    memo[index] = fibonachi(index - 1, memo) + fibonachi(index - 2, memo);  // Store result in cache
    return memo[index];
}

console.log(fibonachi(50));