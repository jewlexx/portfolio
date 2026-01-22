from os import getcwd


def getwords():
    with open(getcwd() + "/src/assets/python/15/words.txt") as file:
        return file.read().splitlines()
