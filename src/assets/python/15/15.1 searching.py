find = "learning"
print("Enter the word to find: " + find)

words = ["We", "love", "learning", "to", "program"]

if find.lower() in map(str.lower, words):
    print("Word found at index:", words.index(find))
else:
    print("Word not found!")
