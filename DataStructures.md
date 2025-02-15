# Table of contents
1. [Big O Notation](#bigo)
2. [Steps to solve a problem](#steps)
3. [Data Structures](#ds)
   1. [Arrays](#arrays)
   
## Big O Notation <a name="bigo"></a>

![Big O Notation](image.png)

### Rules for Calculating Big O

- **Worst Case**
- **Remove Constants**
- **Different Terms for Inputs**
- **Drop Non-Dominant Terms**

---

### **O(n) - Linear Time**
- The number of inputs grows, and the number of operations also grows.
- For example, using `foreach` loops and `for` loops.

### **O(1) - Constant Time**
- Regardless of the number of inputs, the number of operations is always one.
- Example: `console.log(array[1])`

### **O(n^2) - Quadratic Time**
![Quadratic Time](image-5.png)
- Whenever we have nested loops, it becomes `O(n * n)`, which is `O(n^2)`.

### **O(n!) - Factorial**
- adding nested loops for every element .
---

### **Rule 1 - Worst Case** 
- Always consider the worst-case scenario of a function.
- In the example below, "nemo" could be found in `array[0]` or `array[n]`.
- The worst case is `array[n]`, so the Big O is **O(n)**.
![Worst Case Example](image-1.png)

### **Rule 2 - Remove Constants**
![Remove Constants Example](image-2.png)
- In this example, we remove the constants: `O(1 + n/2 + 100)` becomes `O(n)`.

### **Rule 3 - Different Terms for Inputs**
![Different Terms Example](image-3.png)
- The Big O here is `O(2n)`. After dropping the constants, it becomes `O(n)`.
- However, if the inputs are different:
  ![Different Inputs Example](image-4.png)
  - Then the Big O is `O(a + b)`.

### **Rule 4 - Drop Non-Dominants**
- Always keep the dominant terms and remove non-dominant ones.
![Drop Non-Dominants Example](image-6.png)
- In this case, if `x` is 5, the largest term is 100. However, we always consider scalability. If `x` is 500, `x^2` becomes dominant. Thus, the answer is `O(x^2)`.
- If the nested loops grow, the power value increases (e.g., 2, 3, 4, etc.). However, this is not ideal for performance.

### **Notes**
- Iterating to half a collection is ```O(n)```. 
- Iteration to two different inputs is ```O(n + m)```.  

### **How to chose a best code?** 
![alt text](image-7.png)

- So the Big ```O``` reley on space and time complexity. we can also calculate big ```O``` for space.

### **What can cause time in a function?**
- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

### **What can cause space in a function?**
- Variables
- Data structures
- Function calls
- Allocations

### **How to calculate big O for space**

![alt text](image-8.png)
- Here we dont do any allocations or function calls so it ```O(n)```
 ![alt text](image-9.png)
- Here we do variables and allocations so its ```O(1 + n)``` goes ```O(n)```

### Steps to solve a problem <a name="steps"></a>
1. Write down the key points of a problem.
2. Write down the sample input and output.
3. Start with a easy approach.
4. Then think of its problem in that approach and tell them why its no the best like its ```O(n^2)``` etc..
5. Then start your best approach.
6. Think about all the error checks and add a fix for that error.
7. Then test your code with all type of ```input, no input, null, undefined```

---
## Data Structures <a name="ds"></a>

### Arrays <a name=arrays></a>

**Static Arrays**
- These are the arrays with fixed size.

**Dynamic Arrays**
- These are the arrays without fixed size.

#### Time constrins of array methods
![alt text](image-10.png)

### Notes
- If you get any string related questions then split into array.Then 

![alt text](image-11.png)