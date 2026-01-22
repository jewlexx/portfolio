def blank():
    print("")


numbers = ["One", "Two", "Three", "Four", "Five", "Six"]

print("Created list")

blank()

for e in numbers:
    print("Checking list in order:", e)

blank()

print("The 1st element is:", numbers[0])
print("The 4th element is:", numbers[3])
print("The 5th element is:", numbers[4])

blank()

for i in range(len(numbers)):
    print(numbers[i])
