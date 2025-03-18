words = ["Five", "Four", "Three", "Two", "One"]

print("Original List:", words)

print("Sorted List:", sorted(words))

# Checks to make sure I used the correct method, that does not mutate the list
assert words != ["Five", "Four", "One", "Three", "Two"]
