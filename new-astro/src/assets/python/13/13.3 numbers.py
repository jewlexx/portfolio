number = 16
print("Enter a number: " + str(number))
numbers: list[str] = []

for i in range(1, number):
    numbers.append(f"{i} x 13 = {i * 13}")

for n in numbers:
    print(n)
