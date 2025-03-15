def print_list():
    stdout.append(str(numbers.copy()))


numbers = ["One", "Two", "Three"]
stdout: list[str] = []

print_list()
numbers.append("Four")
print_list()
numbers.insert(2, "Five")
print_list()
numbers.remove("One")
print_list()
numbers.pop(1)
print_list()
numbers.sort()
print_list()

print("\n".join(stdout))
