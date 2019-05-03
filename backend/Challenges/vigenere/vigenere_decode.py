# LINUX
#
# Vigenere
# Make sure to specify the alphabet! NO REPEATING CHARACTERS
#
# SYNTAX
# python vigenere_decode.py [text] [key]
# python vigenere_decode.py -f[file] [key]
import sys

# EDITABLE VARIABLES
DEBUG = False  # Set to true when debugging
ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\|;:'\",<.>/? "  # The alphabet the cipher uses
#DICTIONARY = "dictionary.txt"

# DO NOT EDIT BELOW THIS LINE (unless, of course, you know what you're doing)
################################################################################################################

# --------LINUX-----------------------------------------------------------------------
argv = sys.argv
key = argv[2]
ciphertext = argv[1]  # Reads file input

if (ciphertext[0] == "-"):
    if (ciphertext[1] == "f"):
        f = open(ciphertext[2:], "r")
        ciphertext = f.read()
        f.close()

if (DEBUG):
    print ciphertext

# --------MAIN-----------------------------------------------------------------------
text = ""
ccount = 0
kcount = 0
while ccount <= len(ciphertext)-1:
    if (ALPHABET.find(ciphertext[ccount]) == -1):  # If a symbol is found that's not in the alphabet, just place in the text
        text += ciphertext[ccount]
        ccount += 1
    else:
        # Pi = len(alpha) + Ci - Ki % len(alpha)
        vig = (len(ALPHABET) + (ALPHABET.find(ciphertext[ccount]) - ALPHABET.find(key[kcount]))) % len(ALPHABET)
        text += ALPHABET[vig]  # Used to be one line but I dun goofed when testing so it's like this now
        ccount += 1
        kcount += 1

    if (kcount == len(key)):  # Loops key once it reaches the end of the word
        kcount = 0

print text
