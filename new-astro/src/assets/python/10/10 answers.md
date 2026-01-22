# Task 2

1. first_name asks for "Last name"
2. last_name asks for "First name"
3. last_name input is missing a bracket before the input string
4. full_name variable uses non existent "First_name" variable rather than "first_name" variable
5. full_name initialization uses "&" symbol instead of "+" symbol to concat strings
6. Prin function has capital P where it shouldn't
7. Prin function is misspelled, meant to be "print"
8. full_name init does not use last_name variable but uses a string containing "lastname"
9. full_name uses nonexistent variable "lastname" rather than "last_name" variable
10. full_name forgets to close string literal 11. full_name forgets to close the string literal and concat last_name into the string 12. full_name has too many spaces between the beggining of the string and the "&" symbol

## Part B

`10.2 debugging.py`

# Task 3

| `x` at start of loop | `number_int` after calc | `x` at end of loop |
| -------------------- | ----------------------- | ------------------ |
| 1                    | 2                       | 2                  |
| 2                    | 4                       | 3                  |
| 3                    | 8                       | 4                  |
| 4                    | 16                      | 5                  |
| 5                    | 32                      | 6                  |
| 6                    | 64                      | 7                  |
| 7                    | 128                     | 8                  |

The following is the code that helped me get the above table

I used VSCode's built in debugger to debug the code, and get the values at each point.

`10.3 numbers.py-source`

I also improved upon that code as follows

`10.3 numbers improved.py-source`

It yields the same output, except we have to use int to convert the float to an integer.
_Python really does work in mysterious ways_

`10.3 numbers improved.py-output`

`10.3 numbers.py-output`

# Task 4

This was the task where we added print statements to understand the values better at each point of execution

`10.4 tracing.py`
