"""
XOR

python xor.py [key] < [plaintext] > [ciphertext]
"""
import sys

argv = sys.argv
KEYFILE = argv[1]

data = bytearray(sys.stdin.read())
key = bytearray(open(KEYFILE, 'rb').read())

if (len(data) > len(key)): #use the shorter array so it doesnt go out of range
	size = len(data)
else:
	size = len(data)

keysize = len(key)

newtext = bytearray(size)


for i in range(size): #xor every byte of data and store in new byte array
	newtext[i] = data[i] ^ key[i%keysize]

print newtext

