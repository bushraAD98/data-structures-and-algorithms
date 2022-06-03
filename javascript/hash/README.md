# Hashtables

A hash table is an unordered collection of key-value pairs, where each key is unique.

Hash tables offer a combination of efficient lookup, insert and delete operations. Neither arrays nor linked lists can achieve this:

a lookup in an unsorted array takes linear worst-case time;
in a sorted array, a lookup using binary search is very fast, but insertions become inefficient;
in a linked list an insertion can be efficient, but lookups take linear time.

## Challenge
The challenge asked us to Implement a Hashtable Class with the following methods
- set 
- get 
- hash
- contains 
- keys

## Approach & Efficiency
	HASH TABLE TIME COMPLEXITY IN BIG O NOTATION	

Algorithm  Average	Worst case
Space	    O(n)    O(n)
Search  	O(1)	O(n)
Insert  	O(1)	O(n)
Delete  	O(1)	O(n)

## Solution

hashtable.js