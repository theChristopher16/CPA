# CAESAR CIPHER
#
# Takes a string and encodes it using the caesar cipher methos
# You must denote the shift beforehand
#
# python ceasar.py [text] [password] [shift] > [output file]
import sys

# EDITABLE VARIABLES
DEBUG = False  # Set to true when debugging
ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\|;:'\",<.>/? "  # The alphabet the cipher uses

# DO NOT EDIT BELOW THIS LINE (unless, of course, you know what you're doing)

# Getting text to encode
argv = sys.argv
text = argv[1] + argv[2]
SHIFT = int(argv[3])

#text = sys.stdin.read()  # Reads file input
ciphertext = ""
for c in text:
    if (ALPHABET.find(c) == -1):
        ciphertext += c
    else:
        if(ALPHABET.find(c) + SHIFT >= len(ALPHABET)):
            ciphertext += ALPHABET[(ALPHABET.find(c) - len(ALPHABET)) + SHIFT]
        else:
            ciphertext += ALPHABET[ALPHABET.find(c) + SHIFT]

print ciphertext
