# LINUX
#
# Vigenere
# Make sure to specify the alphabet! NO REPEATING CHARACTERS
#
# SYNTAX
# python vigenere_encode.py [text] [password] [key]
# python vigenere_encode.py -f[file] [password] [key]
import sys

# EDITABLE VARIABLES
DEBUG = False  # Set to true when debugging
ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\|;:'\",<.>/? "  # The alphabet the cipher uses
#DICTIONARY = "dictionary.txt"

# DO NOT EDIT BELOW THIS LINE (unless, of course, you know what you're doing)
################################################################################################################

# --------LINUX-----------------------------------------------------------------------
argv = sys.argv
text = argv[1]  # Reads text
key = argv[3]

if (text[0] == "-"):
    if (text[1] == "f"):
        f = open(text[2:], "r")
        text = f.read()
        f.close()

text += argv[2]  # password

if (DEBUG):
    print text

# --------MAIN-----------------------------------------------------------------------
ciphertext = ""
pcount = 0
kcount = 0
while pcount <= len(text)-1:
    if (ALPHABET.find(text[pcount]) == -1):  # If a symbol is found that's not in the alphabet, just place in the text
        ciphertext += text[pcount]
        pcount += 1
    else:
        # Pi = len(alpha) + Ci - Ki % len(alpha)
        vig = ((ALPHABET.find(text[pcount]) + ALPHABET.find(key[kcount]))) % len(ALPHABET)
        ciphertext += ALPHABET[vig]  # Used to be one line but I dun goofed when testing so it's like this now
        pcount += 1
        kcount += 1

    if (kcount == len(key)):  # Loops key once it reaches the end of the word
        kcount = 0

print(ciphertext)
