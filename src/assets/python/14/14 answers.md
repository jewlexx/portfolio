# Task 1

Sorting using the built in function

`14.1 sort.py`

# Task 2

| Index | List                                      |
| ----- | ----------------------------------------- |
| 0 0   | `['One', 'Two', 'Three', 'Four', 'Five']` |
| 0 1   | `['One', 'Three', 'Two', 'Four', 'Five']` |
| 0 2   | `['One', 'Three', 'Four', 'Two', 'Five']` |
| 0 3   | `['One', 'Three', 'Four', 'Five', 'Two']` |
| 1 1   | `['One', 'Four', 'Three', 'Five', 'Two']` |
| 1 2   | `['One', 'Four', 'Five', 'Three', 'Two']` |
| 2 0   | `['Four', 'One', 'Five', 'Three', 'Two']` |
| 2 1   | `['Four', 'Five', 'One', 'Three', 'Two']` |
| 3 0   | `['Five', 'Four', 'One', 'Three', 'Two']` |

The following is the efficient program I used to get this table

`14.2 bubble b.py-source`

And also the inefficient program that yields the same output

`14.2 bubble a.py-source`

The difference between these programs is that the efficient one checks every iteration if we need to keep iterating.

I was curious, however, if it was actually more efficient. For lists that are partially already sorted, it is way more efficient, up to 3x.

But for this list, it is not.
In fact it added more operations than the original program.

This demonstrates the difference between the two, and the thought that must go into choosing methods such as these in production programs, especially when an extra couple of operations can make all the difference.
