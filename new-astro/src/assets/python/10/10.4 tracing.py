number = 1
x = 1

print("Enter an integer: " + str(number))

while(x < 5):
    print(f"x at start of loop = {str(x)}")
    print(f"number at start of loop = {str(number)}")
    number = number * 2
    x = x + 1
    print(f"x at end of loop = {str(x)}\n")


print("Answer =", str(number))
