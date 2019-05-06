"""
ABRAXAS

This cipher takes a keyword (NO repeating letters!) and appends it to the beginning of the provided alphabet

python [text] [password] [key] > [output file]
"""
import sys

ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\|;:'\",<.>/? "  # The alphabet the cipher uses

argv = sys.argv
text = argv[1] + argv[2]
key = argv[3]

tempAlpha = ALPHABET
newAlpha = ""
ciphertext = ""

# NEW ALPHABET CREATION
for c in key:
    newAlpha += tempAlpha[tempAlpha.find(c)]  # Finds letter in provided alphabet and puts to front of new alphabet
    tempAlpha = tempAlpha.replace(c, "")  # Removes letter from the alphabet core
newAlpha += tempAlpha  # Adds the remainder of the alphabet once key letters are removed

for c in text:
    if (ALPHABET.find(c) == -1):
        ciphertext += c
    else:
        ciphertext += newAlpha[ALPHABET.find(c)]

print ciphertext
