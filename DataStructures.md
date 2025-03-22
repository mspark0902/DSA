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
   3. [Searching](#searching)
      1. [Linear Search](#linear)
      2. [Binary Search](#binary)
      3. [Breath First Search](#bfs)
      4. [Depth First Search](#dfs)
      5. [Types of traversals in DFS](#ttt)
      6. [Graph Algorithms: When to Use Dijkstra, Bellman-Ford, DFS, and BFS](#Dijkstra)
   4. [Dynamic Programming](#dynamic)
   
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

#### Types of Weighted Graphs
- **Positive Weighted Graph**

    - All edges have positive weights.

    - Example: A road network where distances are always positive.

- **Negative Weighted Graph**

  - At least one edge has a negative weight.

  - Example: Financial graphs (currency exchange rates where arbitrage exists).

- **Negative Weight Cycle**

  - A cycle where the sum of edge weights is negative.

  - Causes infinite loops in shortest path algorithms like Dijkstra.

  - Bellman-Ford can detect these cycles.



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

##### Step 1: We start with an unsorted array.

    [7, 12, 9, 11, 3]
##### Step 2: We look at the two first values. Does the lowest value come first? Yes, so we don't need to swap them.

    [7, 12, 9, 11, 3]
##### Step 3: Take one step forward and look at values 12 and 9. Does the lowest value come first? No.

    [7, 12, 9, 11, 3]
##### Step 4: So we need to swap them so that 9 comes first.

    [7, 9, 12, 11, 3]
##### Step 5: Taking one step forward, looking at 12 and 11.

    [7, 9, 12, 11, 3]
##### Step 6: We must swap so that 11 comes before 12.

    [7, 9, 11, 12, 3]
##### Step 7: Looking at 12 and 3, do we need to swap them? Yes.

    [7, 9, 11, 12, 3]
##### Step 8: Swapping 12 and 3 so that 3 comes first.

    [7, 9, 11, 3, 12]

---
#### Selection sort <a name= "selection"></a>
- Go through the array to find the lowest value.
- Move the lowest value to the front of the unsorted part of the array.
- Go through the array again as many times as there are values in the array.

##### Step 1: We start with an unsorted array.

    [ 7, 12, 9, 11, 3]
##### Step 2: Go through the array, one value at a time. Which value is the lowest? 3, right?

    [ 7, 12, 9, 11, 3]
##### Step 3: Move the lowest value 3 to the front of the array.

    [ 3, 7, 12, 9, 11]
##### Step 4: Look through the rest of the values, starting with 7. 7 is the lowest value, and already at the front of the array, so we don't need to move it.

    [ 3, 7, 12, 9, 11]
##### Step 5: Look through the rest of the array: 12, 9 and 11. 9 is the lowest value.

    [ 3, 7, 12, 9, 11]
##### Step 6: Move 9 to the front.

    [ 3, 7, 9, 12, 11]
##### Step 7: Looking at 12 and 11, 11 is the lowest.

    [ 3, 7, 9, 12, 11]
##### Step 8: Move it to the front.

    [ 3, 7, 9, 11, 12]
---
#### Insertion sort <a name= "insertion"></a>
- This is good for small data sets or data's which are almost looks sorted.
- Take the first value from the unsorted part of the array.
- Move the value into the correct place in the sorted part of the array.
- Go through the unsorted part of the array again as many times as there are values.

##### Step 1: We start with an unsorted array.

    [ 7, 12, 9, 11, 3]
##### Step 2: We can consider the first value as the initial sorted part of the array. If it is just one value, it must be sorted, right?

    [ 7, 12, 9, 11, 3]
##### Step 3: The next value 12 should now be moved into the correct position in the sorted part of the array. But 12 is higher than 7, so it is already in the correct position.

    [ 7, 12, 9, 11, 3]
##### Step 4: Consider the next value 9.

    [ 7, 12, 9, 11, 3]
##### Step 5: The value 9 must now be moved into the correct position inside the sorted part of the array, so we move 9 in between 7 and 12.

    [ 7, 9, 12, 11, 3]
##### Step 6: The next value is 11.

    [ 7, 9, 12, > 11, 3]
##### Step 7: We move it in between 9 and 12 in the sorted part of the array.

    [ 7, 9, 11, 12, 3]
##### Step 8: The last value to insert into the correct position is 3.

    [ 7, 9, 11, 12, 3]
##### Step 9: We insert 3 in front of all other values because it is the lowest value.

    [ 3, 7, 9, 11, 12]
---
#### Merge sort <a name= "merge"></a>
- The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array by first breaking it down into smaller arrays, and then building the array back together the correct way so that it is sorted.
- Divide the unsorted array into two sub-arrays, half the size of the original. 
- Continue to divide the sub-arrays as long as the current piece of the array has more than one element.
- Merge two sub-arrays together by always putting the lowest value first.
- Keep merging until there are no sub-arrays left.
    ![alt text](image.png)

#### Quick sort <a name= "quick"></a>
- The Quicksort algorithm takes an array of values, chooses one of the values as the 'pivot' element, and moves the other values so that lower values are on the left of the pivot element, and higher values are on the right of it.
- Choose a value in the array to be the pivot element. 
- Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
- Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
- Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.

    ![alt text](image-1.png)

#### Radix and Counting sort <a name= "radix"></a>
- These are non comparison algorithms. We dont need to compare one item with other.
- This only supports integers with certain range. 

### When to use which sort? 
![alt text](image-2.png)
- **Insertion sort** can be use when the data's are few or items are nearly sorted
- **Bubble sort** is only for educational purpose. Its not very efficient. Mostly its not used realtime.
- **Selection sort** is also for educational purpose.
- **Merge sort**  if worst case performance matters.
-  **Quick sort** if space complexity matters. 
-  **Radix and Counting sort** is you need to sort numbers with a fixed digit length efficiently (e.g., phone numbers, student roll numbers, ZIP codes)
  

### Searching <a name = "searching"></a>

#### Linear Search <a name = "linear"></a>
- This is the common way. loop through the items and find the item. There can be a best case for it as well as the worst case.
  ![alt text](image-3.png)

#### Binary Search <a name = "binary"></a>
- We divide the middle item. If the target is higher than the middle then remove all from right . Else vice versa. repeat this and you will find it.
- This works only if the data is sorted.
    ![alt text](image-4.png)![alt text](image-5.png)![alt text](image-6.png)

##### Binary search tree
  ![alt text](image-7.png)

#### Breath First Search/Traversal <a name = "bfs"></a>
- We go each node. Level by level. From left to right. The example from above tree will look like. The BFS will look in the below order.

      [9, 4, 34, 1, 6, 12, 45]
  

#### Depth First Search/Traversal <a name = "dfs"></a>
- We go deep first. 
- We go to each node untill its leaf node. If its the last then go up and see if ther is anything there to explore. Example of above is first 9, 4, 1 and then go back to 4 and see if there is anything unexplored. Yes then go there 6. 
- Now go all the way up and see if anything unexplored. Yes 34,12 
- Go up to 34 and 45.

      [9, 4, 1, 6, 34, 12, 45]

#### BFS Vs DFS
- We use BFS if we know the target is in upper part of a tree or graphs. Because it visits the shortest path first.
- We use DFS to the opposite of the BFS. If the target is in lower part.
  ![alt text](image-8.png) ![alt text](image-9.png)

#### Types of traversals in DFS <a name = "ttt"></a>
![alt text](image-10.png) ![alt text](image-11.png)

### Graph Algorithms: When to Use Dijkstra, Bellman-Ford, DFS, and BFS <a name = "Dijkstra"></a> 🗺️

#### 1. Dijkstra's Algorithm  
  **Use when:**  
- You need the shortest path in a graph with **non-negative weights**.  
- You want an **efficient solution** (better than Bellman-Ford) for **single-source shortest path problems**.  
- You are working with **sparse graphs** (few edges).  

  **Avoid if:**  
- The graph has **negative weight edges** (Dijkstra does not handle them correctly).  
- You need to find shortest paths from **multiple sources** (use **Floyd-Warshall** instead).  

  **Example Use Cases:**  
- **GPS navigation systems**  
- **Network routing** (when all link costs are non-negative)  

---

#### 2. Bellman-Ford Algorithm  
  **Use when:**  
- The graph has **negative weight edges**, and you need to find the **shortest path**.  
- You need to **detect negative weight cycles** in a graph.  

 **Avoid if:**  
- The graph is **large and dense** (Bellman-Ford has a **higher time complexity** than Dijkstra).  

 **Example Use Cases:**  
- **Financial applications** (detecting arbitrage in currency exchange graphs)  
- **Routing in networking** with **potential negative weights**  

---

#### 3. DFS & BFS (When They Are Better)  
 **Use DFS/BFS when:**  
- You only need to **check connectivity** or **explore a graph** (not find shortest paths).  
- The graph is **unweighted**, and you need the **shortest path** (**BFS works for unweighted graphs**).  
- You're solving problems like **topological sorting, cycle detection, or maze traversal**.  

  **Example Use Cases:**  
- **Web crawling**  
- **Finding connected components in a social network**  
- **Solving mazes**  

![alt text](image-12.png)

### Dynamic Programming <a name = "dynamic"></a>

![alt text](image-13.png)


#### Same applied with closures

![alt text](image-14.png)

#### Rules / Tips
![alt text](image-15.png)