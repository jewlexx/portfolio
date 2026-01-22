letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
           "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

find = "n"
print("Enter a letter to find: " + find)

if len(find) != 1:
    print("Please enter a single letter.")
    exit()

for x in letters:
    if x == find:
        index = letters.index(x)
        print("Letter found at index:", index)
        del letters[index]

        if x not in letters:
            print("Letter not found again")
            break
