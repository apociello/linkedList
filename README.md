# linkedList
LinkedList in JavaScript

This project is a basic implementation of a singly linked list using JavaScript.
The goal is to understand how linked lists work internally, without using JavaScript arrays or other built-in data structures.

*What the LinkedList can do:*

 - Add a new node to the end of the list (append)

 - Add a new node to the beginning of the list (prepend)

 - Get the size of the list

 - Get the first node (head)

 - Get the last node (tail)

 - Get the node at a specific index (at)

 - Remove the last node (pop)

 - Check if a value exists in the list (contains)

 - Find the index of a value (find)

 - Convert the list to a readable string (toString)

 - Insert a value at a specific position (insertAt)

 - Remove a node at a specific position (removeAt)

*How it works*

Each element in the list is a Node object.
A node has two properties: value (the data stored) and next (a reference to the next node, or null if it is the last one).

The LinkedList class keeps track of the first node (head) and the total number of nodes (size).