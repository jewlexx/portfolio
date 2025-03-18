from random import randint


def random_question() -> str:
    index = randint(0, len(questions) - 1)

    return questions.pop(index)


questions = [
    "Why is the sky blue?",
    "Why is the sun yellow?",
    "Why is the moon white?",
    "Why is the grass green?",
    "Why is the dirt brown?",
]

for i in range(0, 5):
    print(random_question())
