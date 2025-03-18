# Task 1

`13.1 basic lists.py`

# Task 2

This was the task on editing lists

You may notice that I did not use the `del` keyword

This is because personally I dislike using this to edit lists in this way, as it can be hard to read and have unintended side effects.

`del` in python deletes objects, and everything in python is an object (including lists), so it can really delete anything.

`.pop` however can only be used on lists, and it does **NOT** delete the object, but rather removes it from the list, until garbage collection comes and cleans it up.

This may be less efficient, but Garbage Collection is coming anyway, so we may as well let it do its job, and additionally `del` can be confusing as it is not called on the object, but is rather a keyword in front of it.

`13.2 editing lists.py`

# Task 3

`13.3 numbers.py`

Extension:

Calling `remove` when element exists multiple times, only removes the first instance of the element

Eg.

```python
>>> array = ["one", "two", "one"]
>>> array.remove("one")
>>> array
["two", "one"]
```

# Task 4

`13.4 random qs.py`
