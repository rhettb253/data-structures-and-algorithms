# Blog Notes: Merge Sort

Merge sort is a popular and efficient comparison-based sorting algorithm. It is a divide-and-conquer algorithm, that breaks down the sorting problem into smaller subproblems, solves them, and then combines the results to produce a sorted list.

Here's a few bullet points of how merge sort works:

- Divide: The unsorted list is divided into two equal halves (or approximately equal, with one being slightly larger if the list has an odd number of elements). This process is repeated recursively until each sub-list contains only one element.

- Conquer: Once the sub-lists are reduced to single elements, they are considered sorted.

- Merge: The sorted sub-lists are then merged back together to form larger and larger sub-lists until the entire list is sorted. During the merge phase, the elements from the two sub-lists are compared, and the smaller element is placed in the resulting merged list. This process is repeated until all elements are merged.

The key idea behind merge sort is that it is relatively easy to merge two sorted lists into one sorted list. This "divide and conquer" approach allows merge sort to achieve its efficient time complexity. However, it does require additional memory to store the sub-lists during the sorting process. This additional memory usage is sometimes a consideration when choosing a sorting algorithm. However in today's world, memory typically isn't the issue.

Cheers!
