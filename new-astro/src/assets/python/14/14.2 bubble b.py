numbers = ["One", "Two", "Three", "Four", "Five"]
max_index = len(numbers) - 1

# Bubble Sort program
for i in range(max_index):
    _numbers = numbers.copy()
    for j in range(max_index - i):
        # Checks if the current element is greater than the next element
        if numbers[j] > numbers[j + 1]:
            # Swaps the elements
            (numbers[j], numbers[j + 1]) = (numbers[j + 1], numbers[j])

    if _numbers == numbers:
        # We finished an entire pass without swapping so we can quit
        break

print(numbers)
