# 📌 Table of Contents
![📑](images/image-40.png)

1. [⚡ Big O Notation](#bigo)
2. [🛠️ Steps to Solve a Problem](#steps)
3. [📂 Data Structures](#ds)
   - 📌 [Arrays](#arrays)
   - 🔑 [Hashtables](#hashtables)
   - 🔗 [Linked Lists](#ll)
   - 📦 [Stacks and Queues](#stacks)
   - 🌳 [Trees](#trees)
   - 🔍 [Graphs](#graphs)
4. [⚙️ Algorithms](#algorithms)
   - 🔁 [Recursions](#recursions)
   - 🌀 [Sorting](#sorting)
     - 🔵 [Bubble Sort](#bubble)
     - 🔷 [Selection Sort](#selection)
     - 🟠 [Insertion Sort](#insertion)
     - ⚡ [Merge Sort](#merge)
     - ⚔️ [Quick Sort](#quick)
     - 📊 [Radix Sort](#radix)
   - 🔎 [Searching](#searching)
     - 🔍 [Linear Search](#linear)
     - 📈 [Binary Search](#binary)
     - 🌐 [BFS (Breadth First Search)](#bfs)
     - 🌳 [DFS (Depth First Search)](#dfs)
     - 📊 [Types of DFS Traversals](#ttt)
     - 🚀 [Graph Algorithms: Dijkstra, Bellman-Ford, DFS, BFS](#Dijkstra)

---

## ⚡ Big O Notation <a name="bigo"></a>

![📊 Big O Notation](images/image.png)

### 🔢 **Rules for Calculating Big O**
- ✅ **Worst Case**
- ✅ **Remove Constants**
- ✅ **Different Terms for Inputs**
- ✅ **Drop Non-Dominant Terms**

---

### 📈 **O(n) - Linear Time**
✔️ As the input size increases, the number of operations **grows proportionally**.  
✔️ Example: Using `foreach` loops and `for` loops.

---

### ⚡ **O(1) - Constant Time**
✔️ No matter the input size, the number of operations **remains the same**.  
✔️ Example: `console.log(array[1])`

---

### 🔄 **O(n²) - Quadratic Time**
![📊 Quadratic Time](images/image-5.png)
✔️ **Nested loops** result in `O(n * n)`, which simplifies to **O(n²)**.

---

### 🚀 **O(n!) - Factorial Time**
✔️ **Nested loops for every element** (very slow!).  

---

### 🔍 **O(log n) - Logarithmic Time**
✔️ As `n` increases, operations grow **slowly** instead of linearly or quadratically.  
![📉 Logarithmic Growth](images/image-28.png)  
![📉 Logarithmic Comparison](images/image-29.png)

---

## 📌 **Big O Rules**
### 📉 **Rule 1 - Worst Case** 
✔️ Always consider the **worst-case scenario**.  
✔️ Example: Searching for `"nemo"` in an array.  
✔️ If `"nemo"` is the last element, **O(n)** applies.  
![Worst Case](images/image-1.png)

---

### ✂️ **Rule 2 - Remove Constants**
✔️ `O(1 + n/2 + 100)` simplifies to **O(n)**.  
![Remove Constants](images/image-2.png)

---

### 🔀 **Rule 3 - Different Terms for Inputs**
✔️ `O(2n)` simplifies to **O(n)**.  
✔️ But if inputs are different:  
   - `O(a + b)`, not `O(n)`.  
![Different Inputs](images/image-4.png)

---

### 🎭 **Rule 4 - Drop Non-Dominants**
✔️ Keep only **dominant terms**.  
✔️ Example: If `x = 500`, `x²` is **dominant**, so **O(x²)**.  
✔️ Nested loops increase power (`O(n²) → O(n³)`).  
![Drop Non-Dominants](images/image-6.png)

---

## ✨ **Big O Notes**
- 🚀 **Iterating through half a collection → `O(n)`**.  
- 📊 **Iterating through two different inputs → `O(n + m)`**.

---

## 🧐 **How to Choose the Best Code?**
![Best Code](images/image-7.png)

✔️ **Big O depends on space & time complexity**.  
✔️ **We can also calculate Big O for space usage**.

---

## ⏳ **What Affects Time Complexity?**
✔️ Arithmetic operations `(+,-,*,/)`.  
✔️ Comparisons `(<, >, ==)`.  
✔️ Looping (`for`, `while`).  
✔️ Function calls.

---

## 🧠 **What Affects Space Complexity?**
✔️ Variables.  
✔️ Data structures.  
✔️ Function calls.  
✔️ Allocations.

---

## 🛠️ Steps to Solve a Problem <a name="steps"></a>
1. 📝 Write down the key points of the problem.  
2. 📋 Write down sample inputs and outputs.  
3. 🛠️ Start with an easy approach.  
4. 🤔 Analyze the problems in that approach (e.g., `O(n²)`).  
5. 🚀 Start your best approach.  
6. 🛑 Think about error checks and fixes.  
7. 🧪 Test your code with all types of inputs (`null`, `undefined`, etc.).

---

## 📂 Data Structures <a name="ds"></a>

### 📌 Arrays <a name="arrays"></a>
- **Static Arrays**: Fixed size.  
- **Dynamic Arrays**: No fixed size.  

#### ⏱️ Time Constraints of Array Methods
![Array Methods](images/image-10.png)

#### 📝 Notes
- 📌 If you get string-related questions, split them into arrays.  
  ![String to Array](images/image-11.png)

---

### 🔑 Hashtables <a name="hashtables"></a>
- 📌 Key-value pairs where keys are converted into hashes.  
- 📌 **Example:** `Objects` in JS, `Map` in JS (inserted in sequential order).  
- 📌 **Sets** in JS can only store keys.  

#### 🔑 HashFunction
- 📌 Converts keys into hashes and assigns a memory address.  
  ![Hash Function](images/image-12.png)  
  ![Hash Function Example](images/image-13.png)

#### ⚠️ Hashtable Collision
- 📌 Two different hashes may share the same memory space.  
  ![Hashtable Collision](images/image-14.png)

#### 🔄 Hashtable Vs Arrays
- 📌 Search is `O(n)` in arrays, whereas it's `O(1)` in Hashtables.  
- 📌 Hashtables store data in different indexes, irrespective of order. Arrays store data sequentially.  
  ![Hashtable Vs Arrays](images/image-16.png)

#### ✔️ Pros and Cons
- 📌 **Pros:** Time optimization.  
- 📌 **Cons:** May take more space.  
  ![Hashtable Pros and Cons](images/image-15.png)

---

### 🔗 Linked Lists <a name="ll"></a>
- 📌 Lists where nodes are linked. The first node is the **head**, and the last node is the **tail**.  
  ![Linked List](images/image-17.png)  
- 📌 Each node has pointers, except the tail.  
  ![Linked List Pointers](images/image-18.png)  
- 📌 **Visualization:** [Linked List Visualization](https://visualgo.net/en/list)  
  ![Linked List Example](images/image-19.png)

#### 🔗 Pointers
- 📌 Pointers hold the reference to a memory location.  
  ![Pointers Example](images/image-20.png)

#### 🔄 Doubly Linked List
- 📌 Holds pointers to both the next and previous nodes.  
- 📌 **Advantage:** More efficient searching.  
  ![Doubly Linked List](images/image-21.png)

#### ✔️ Pros and Cons
![Linked List Pros and Cons](images/image-22.png)

#### 🔄 Difference: Singly vs Doubly
![Singly vs Doubly](images/image-23.png)

---

### 📦 Stacks and Queues <a name="stacks"></a>

#### 📦 Stacks
- 📌 **Last in, first out (LIFO).**  
  ![Stack](images/image-24.png)

#### 🚶‍♂️ Queues
- 📌 **First in, first out (FIFO).**  
  ![Queue](images/image-25.png)

#### ⚠️ Why Not Use Arrays for Queues?
- 📌 Reindexing occurs when popping or pushing, which is inefficient.  

---

### 🌳 Trees <a name="trees"></a>
![Tree](images/image-26.png)

#### 🌳 Binary Tree
- 📌 Each node can have 0, 1, or 2 nodes.  
- 📌 **Perfect Binary Tree:** All levels are filled.  
- 📌 **Full Binary Tree:** Nodes have 0 or 2 children.  
  ![Binary Tree](images/image-27.png)

#### 🔍 Binary Search Tree
- 📌 **Rules:**  
  - All right child nodes are greater than the parent.  
  - All left child nodes are smaller than the parent.  
  ![Binary Search Tree](images/image-30.png)

#### ⚠️ Unbalanced Binary Search Tree
- 📌 Operations become costlier.  
  ![Unbalanced BST](images/image-31.png)  
  ![Unbalanced BST Example](images/image-32.png)

#### 🌳 AVL Tree
- 📌 Automatically balances the binary tree.  

#### 🌳 Red-Black Tree
- 📌 Automatically balances the tree by switching elements.  

#### 🌳 Heaps
- 📌 **Max Heap:** Every parent node is greater than its children.  
- 📌 **Min Heap:** Every parent node is smaller than its children.  
  ![Heap](images/image-33.png)

#### 🌳 Trie
- 📌 Predefined data structure for solving string problems.  
  ![Trie](images/image-34.png)  
  ![Trie Example](images/image-35.png)  
  **Visualization:** [Trie Visualization](https://www.cs.usfca.edu/~galles/visualization/Trie.html)

---

### 🔍 Graphs <a name="graphs"></a>
![Graph](images/image-36.png)

#### 🔍 Types of Graphs
![Types of Graphs](images/image-37.png)  
![Types of Graphs](images/image-38.png)  
![Types of Graphs](images/image-39.png)

#### 🔍 Types of Weighted Graphs
- 📌 **Positive Weighted Graph:** All edges have positive weights.  
- 📌 **Negative Weighted Graph:** At least one edge has a negative weight.  
- 📌 **Negative Weight Cycle:** A cycle where the sum of edge weights is negative.  

---

## ⚙️ Algorithms <a name="algorithms"></a>

### 🔁 Recursions <a name="recursions"></a>
- 📌 Calling the function inside the same function with some condition.  
  ![Recursion](images/image-41.png)

#### 🧐 When to Use Recursion?
![Recursion Use Cases](images/image-42.png)

---

### 🌀 Sorting <a name="sorting"></a>

#### 🔵 Bubble Sort <a name="bubble"></a>
- 📌 Compare adjacent elements and swap if they are in the wrong order.  
- 📌 Repeat until the array is sorted.  
  ![Bubble Sort](image.png)

#### 🔷 Selection Sort <a name="selection"></a>
- 📌 Find the smallest element and swap it with the first unsorted element.  
- 📌 Repeat until the array is sorted.  
  ![Selection Sort](image-1.png)

#### 🟠 Insertion Sort <a name="insertion"></a>
- 📌 Build the sorted array one element at a time by inserting each element into its correct position.  
  ![Insertion Sort](image-2.png)

#### ⚡ Merge Sort <a name="merge"></a>
- 📌 Divide the array into two halves, sort each half, and merge them.  
  ![Merge Sort](image-3.png)

#### ⚔️ Quick Sort <a name="quick"></a>
- 📌 Choose a pivot, partition the array, and recursively sort the sub-arrays.  
  ![Quick Sort](image-4.png)

#### 📊 Radix Sort <a name="radix"></a>
- 📌 Sort numbers by their digits, starting from the least significant digit.  
  ![Radix Sort](image-5.png)

---

### 🔎 Searching <a name="searching"></a>

#### 🔍 Linear Search <a name="linear"></a>
- 📌 Loop through the items and find the target value.  
- 📌 **Best Case:** Found immediately.  
- 📌 **Worst Case:** Found at the last index or not present.  
  ![Linear Search](image-3.png)

#### 📈 Binary Search <a name="binary"></a>
- 📌 **Divide & Conquer Algorithm**.  
- 📌 Check the **middle element**:  
  - If the target is **higher**, remove the **left half**.  
  - If the target is **lower**, remove the **right half**.  
- 📌 **Repeat** until the target is found.  
- ⚠️ **Only works on sorted data**.  
  ![Binary Search](image-4.png)  
  ![Binary Search Steps](image-5.png)  
  ![Binary Search Example](image-6.png)

#### 🌐 BFS (Breadth First Search) <a name="bfs"></a>
- 📌 Traverse the graph **level by level**, starting from the root.  
- 📌 **Order of Traversal:** Left to right.  
- 📌 **Example:**  
  - For the tree below, BFS traversal order is:  
    ```[9, 4, 34, 1, 6, 12, 45]```  
  ![Binary Search Tree](image-7.png)

#### 🌳 DFS (Depth First Search) <a name="dfs"></a>
- 📌 Traverse the graph **depth-first**, exploring as far as possible along each branch before backtracking.  
- 📌 **Order of Traversal:**  
  - Start from the root, go deep until a leaf node is reached.  
  - Backtrack and explore the next branch.  
- 📌 **Example:**  
  - For the tree below, DFS traversal order is:  
    ```[9, 4, 1, 6, 34, 12, 45]```  

#### 📊 Types of DFS Traversals <a name="ttt"></a>
- 📌 **Pre-order:**  
  - Visit the **root**, then the **left subtree**, then the **right subtree**.  
- 📌 **In-order:**  
  - Visit the **left subtree**, then the **root**, then the **right subtree**.  
- 📌 **Post-order:**  
  - Visit the **left subtree**, then the **right subtree**, then the **root**.  
  ![DFS Traversals](image-10.png)  
  ![DFS Traversals Example](image-11.png)

---

#### 🚀 Graph Algorithms: Dijkstra, Bellman-Ford, DFS, BFS <a name="Dijkstra"></a>

##### 1. Dijkstra's Algorithm  
✅ **Use when:**  
- You need the shortest path in a graph with **non-negative weights**.  
- You want an **efficient solution** (better than Bellman-Ford) for **single-source shortest path problems**.  
- You are working with **sparse graphs** (few edges).  

❌ **Avoid if:**  
- The graph has **negative weight edges** (Dijkstra does not handle them correctly).  
- You need to find shortest paths from **multiple sources** (use **Floyd-Warshall** instead).  

📌 **Example Use Cases:**  
- **GPS navigation systems**  
- **Network routing** (when all link costs are non-negative)  

---

##### 2. Bellman-Ford Algorithm  
✅ **Use when:**  
- The graph has **negative weight edges**, and you need to find the **shortest path**.  
- You need to **detect negative weight cycles** in a graph.  

❌ **Avoid if:**  
- The graph is **large and dense** (Bellman-Ford has a **higher time complexity** than Dijkstra).  

📌 **Example Use Cases:**  
- **Financial applications** (detecting arbitrage in currency exchange graphs)  
- **Routing in networking** with **potential negative weights**  

---

##### 3. DFS & BFS (When They Are Better)  
✅ **Use DFS/BFS when:**  
- You only need to **check connectivity** or **explore a graph** (not find shortest paths).  
- The graph is **unweighted**, and you need the **shortest path** (**BFS works for unweighted graphs**).  
- You're solving problems like **topological sorting, cycle detection, or maze traversal**.  

📌 **Example Use Cases:**  
- **Web crawling**  
- **Finding connected components in a social network**  
- **Solving mazes**  

![Graph Algorithms](image-12.png)