from sys import argv


def parse_int_or(string: str, otherwise: int):
    try:
        return int(string)
    except ValueError:
        return otherwise


string = "Believe it or not this is a string"
print("Enter a string: " + string)
chars = parse_int_or(argv.pop(), 69)
end_chars = -chars

print(string[:chars])
