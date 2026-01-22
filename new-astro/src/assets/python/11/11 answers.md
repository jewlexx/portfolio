# Task 1

The following is my execution of the `len` function

`11.1 len.py`

# Task 2

I also managed to convert a piece of text to be uppercase.

`11.2 upper.py`

As you can see above I also tested with alphanumeric characters and symbols. This was my conclusion.

_The numbers and symbols stay the same but the alphabetic characters are made uppercase_

What follows is a completed table of methods and outputs

| Method       | Inputs                          | Outputs                  |
| ------------ | ------------------------------- | ------------------------ |
| `lower`      | `"Hello"`, `"HELLO"`            | `"hello"`, `"hello"`     |
| `capitalize` | `"Hello"`, `"HELLO"`            | `"HELLO"`, `"HELLO"`     |
| `islower`    | `"hello"`, `"HELLO"`, `"Hello"` | `true`, `false`, `false` |
| `isalpha`    | `"Hello"`, `"Hello1"`, `"111"`  | `true`, `false`, `false` |

# Task 3

The following is the output of my slicing tests

| Function            | Result     |
| ------------------- | ---------- |
| `print(text[4])`    | o          |
| `print(text[-3])`   | r          |
| `print(text[2:7])`  | llo W      |
| `print(text[3:])`   | lo World   |
| `print(text[:4])`   | Hell       |
| `print(text[1:-2])` | ello Wor   |
| `print(text[2:-5])` | llo        |
| `print(text[:-1])`  | Hello worl |

The program I used to get this table is as follows

`11.3 slicing.py-source`

Then I also tested _left select_, _right select_ and _half_ functions.

`11.3 half.py`

`11.3 left select.py`

`11.3 right select.py`

# Task 4

| Input  | Output |
| ------ | ------ |
| apple  | 0      |
| pear   | 2      |
| lemon  | -1     |
| banana | 1      |
| GRAPE  | -1     |

The program I used to get the above table is as follows

`11.4 searching.py`
