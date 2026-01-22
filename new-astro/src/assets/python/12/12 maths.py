from math import sin, cos, radians as rad


num = "69"
print("Enter a number: " + num)

try:
    num = float(num)
    (sinn, cosine) = (round(sin(rad(num)), 2), round(cos(rad(num)), 2))

    print("Rounded Sin is", str(sinn))
    print("Rounded Cosine is", str(cosine))
except ValueError:
    print('Error:', num, 'is not a valid number')
