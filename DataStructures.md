# Table of contents
![alt text](images/image-40.png)
1. [Big O Notation](#bigo)
2. [Steps to solve a problem](#steps)
3. [Data Structures](#ds)
   1. [Arrays](#arrays)
   2. [Hashtables](#hashtables)
   3. [Linked Lists](#ll)
   4. [Stacks and Queues](#stacks)
   5. [Trees](#trees)
   6. [Graphs](#graphs)
4. [Algorithms](#algorithms)
   1. [Recursions](#recursions)
   2. [Sorting](#sorting)
      1. [Bubble sort](#bubble)
      2. [Selection sort](#selection)
      3. [Insertion sort](#insertion)
      4. [Merge sort](#merge)
      5. [Quick sort](#quick)
      6. [Radix sort](#radix)
   
## Big O Notation <a name="bigo"></a>

![Big O Notation](images/image.png)

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
![Quadratic Time](images/image-5.png)
- Whenever we have nested loops, it becomes `O(n * n)`, which is `O(n^2)`.

### **O(n!) - Factorial**
- adding nested loops for every element .

### O(log n) - Logarithmic Time
- It means that as the input size (n) increases, the number of steps grows slowly, rather than increasing linearly (O(n)) or quadratically (O(n²)).
  ![alt text](images/image-28.png)
  ![alt text](images/image-29.png)

---

### **Rule 1 - Worst Case** 
- Always consider the worst-case scenario of a function.
- In the example below, "nemo" could be found in `array[0]` or `array[n]`.
- The worst case is `array[n]`, so the Big O is **O(n)**.
![Worst Case Example](images/image-1.png)

### **Rule 2 - Remove Constants**
  ![Remove Constants Example](images/image-2.png)
- In this example, we remove the constants: `O(1 + n/2 + 100)` becomes `O(n)`.

### **Rule 3 - Different Terms for Inputs**
![Different Terms Example](images/image-3.png)
- The Big O here is `O(2n)`. After dropping the constants, it becomes `O(n)`.
- However, if the inputs are different:
  ![Different Inputs Example](images/image-4.png)
  - Then the Big O is `O(a + b)`.

### **Rule 4 - Drop Non-Dominants**
- Always keep the dominant terms and remove non-dominant ones.
![Drop Non-Dominants Example](images/image-6.png)
- In this case, if `x` is 5, the largest term is 100. However, we always consider scalability. If `x` is 500, `x^2` becomes dominant. Thus, the answer is `O(x^2)`.
- If the nested loops grow, the power value increases (e.g., 2, 3, 4, etc.). However, this is not ideal for performance.

### **Notes**
- Iterating to half a collection is ```O(n)```. 
- Iteration to two different inputs is ```O(n + m)```.  

### **How to choose a best code?** 
![alt text](images/image-7.png)

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

![alt text](images/image-8.png)
- Here we dont do any allocations or function calls so it ```O(n)```
 ![alt text](images/image-9.png)
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

#### Time constraints of array methods
![alt text](images/image-10.png)

#### Notes
- If you get any string related questions then split into array.Then 

  ![alt text](images/image-11.png)

### Hashtables <a name=hashtables></a>
- Hashtables are key value pairs. Key values are convereted into hashes. For example : ```Objects``` in js
- In hashtable we can have keys of any type. Ex: ```Map``` in js. In Map datas are inserted in sequential order. Not random memory like object.
- We have also ```Sets``` in js. It can only store the keys. 

#### HashFunction
- Takes the key and convert it to hashes and assings a memory address.

  ![alt text](images/image-12.png)

  ![alt text](images/image-13.png)

#### Hashtable Collision
- In hashtables there is posibility of two different hashes may share the same memory space.
  ![alt text](images/image-14.png)

#### Hashtable Vs Arrays
- Search is ```O(n)``` in arrays where as its ```O(1)``` in Hashtables. Likewise many methods.
![alt text](images/image-16.png)
- The major difference is hashtables datas are store in different index, irrespective of the order. whereas in arrays the datas are store in sequential order starting index ```0```

#### Pros and Cons
- We use hashtables mostly for time optimizaition but it may take more space. There is always a tradeoff between these time and space. If time is more important then use hashtables.
- There can be possible collision but our progamming language handles it internally. We dont need to worry.

  ![alt text](images/image-15.png)

### Linked Lists <a name=ll></a>

- Lists which are linked. The first node is head and last node is tail

  ![alt text](images/image-17.png)

- Each links have the pointers and the last tail does not have a pointer.
 
  ![alt text](images/image-18.png)

- Check this link to see how Linkedlist works [here](https://visualgo.net/en/list)

  ![alt text](images/image-19.png)

#### Pointers
- Pointers hold the reference to a memory location.
  ![alt text](images/image-20.png)
  - in the above example ```{a: true}``` is a value in the memory. So both ```obj1``` and ```obj2``` holds the reference to that memrory location. 

#### Doubly linked list
- This holds the pointer to next link and also prev link.
- So compare to singly searching will be more effecient.
- In singly we can only traverse from start to end. But here we can also do end to start.

  ![alt text](images/image-21.png)

#### Pros and Cons
![alt text](images/image-22.png)

#### Difference singly vs doubly
![alt text](images/image-23.png)

### Stacks and queues <a name=stacks></a>

#### Stacks
- Last in first out.
  ![alt text](images/image-24.png)

#### Queues
- First in first out.
  ![alt text](images/image-25.png)

#### Why we are not using arrays to build queues?
- The reason is when we pop or push something. all the items in the array are reindexing. i.e changing their indexes.

### Trees <a name=trees></a>
![alt text](images/image-26.png)

#### Binary Tree
- Each node can only have 0,1 or 2 nodes.
- Each child can only have one parent.
- A perfect binary tree has everything filled in. The bottom layer has 0nodes.
- A Full binary tree the node has 0 or 2 childrens. Not 1 children.
  ![alt text](images/image-27.png)

#### Binary Search Tree
![alt text](images/image-30.png)
  - #### Rules  
    - All child node in the right is greater than the parent node.
    - On the left side it decreases.
    - And all other rules of binary tree. 

#### Unbalanced Binary Search Tree
![alt text](images/image-31.png)

![alt text](images/image-32.png)

- Operations will become costlier.

#### AVL Tree
-  It automatically balances the binary tree. By swapping the elements. 

#### Red Black Tree
- Same are AVL Tree. It automatically balances the tree by switching elements.

#### Heaps
- In Binary heaps every parent node is greater than its child nodes. Its called ```max heap```. 
- The opposite of it is called ```min heap```. 
  ![alt text](images/image-33.png)
- The lookup is costlier than binary tree because. The left and right is not ordered like binary tree. 


#### Trie

- It is predefined data structure. Usefull in solving the problems with strings.
  ![alt text](images/image-34.png)
- In this example I inserted words ```Are``` and ```Article``` and it looks like
  ![alt text](images/image-35.png)
- For more visualization [click here](https://www.cs.usfca.edu/~galles/visualization/Trie.html)

### Graphs <a name=graphs></a>
![alt text](images/image-36.png)

#### Types of graphs
![alt text](images/image-37.png)![alt text](images/image-38.png)![alt text](images/image-39.png)

## Algorithms <a name="algorithms"></a>

### Recursions <a name = "recursions"></a>
 - Calling the function inside the same function with some condition.
    ![alt text](images/image-41.png)

#### When can we use recurssion?
![alt text](images/image-42.png)

### Sorting <a name="sorting"></a>

#### Bubble sort <a name= "bubble"></a>
- Go through the array, one value at a time.
- For each value, compare the value with the next value.
- If the value is higher than the next one, swap the values so that the highest value comes last.
- Go through the array as many times as there are values in the array.

#### Selection sort <a name= "selection"></a>
- Go through the array to find the lowest value.
- Move the lowest value to the front of the unsorted part of the array.
- Go through the array again as many times as there are values in the array.

#### Insertion sort <a name= "insertion"></a>
- This is good for small data sets or data's which are almost looks sorted.
- Take the first value from the unsorted part of the array.
- Move the value into the correct place in the sorted part of the array.
- Go through the unsorted part of the array again as many times as there are values.