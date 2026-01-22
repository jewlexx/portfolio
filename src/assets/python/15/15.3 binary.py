from words import getwords

words = getwords()

mindex = 0
maxdex = len(words) - 1

word: str = None

find = "p"
print("Enter a letter to find: " + find)

while word == None:
    index = int((mindex + maxdex) / 2)

    if words[index] == find:
        word = words[index]
        print("Letter found at index:", index)
        break

    if find in words[index:]:
        mindex = index
        continue

    if find in words[:index]:
        maxdex = index
        continue

    print("Letter not found")
    break
