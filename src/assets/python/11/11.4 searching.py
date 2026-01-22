text = "Believe it or not this is a string"
print("Enter the text: " + text)

final = text.rfind("a")
count = text.count("a")
maximum = max(text)
minimum = min(text)
numeric = text.isnumeric()

print('Final:', final)
print('Count:', count)
print('Maximum:', maximum)
print('Minimum:', minimum)
print('Numeric:', numeric)
