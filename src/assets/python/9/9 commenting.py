# Takes in the users age as a string
your_age_str = "19"
print("Enter your age: " + your_age_str)
# Converts the input to an integer
your_age_int = int(your_age_str)

# Checks if the users age is less than 13
if your_age_int < 13:
    # Prints to stdout
    print("Wow... a computer genius")
# Checks if the users age is less than 20 but bigger than 13
elif your_age_int < 20:
    # Prints to stdout
    print("Hello Teenager")

# Prints End to stdout
print("End")
