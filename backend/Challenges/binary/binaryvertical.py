"""
VERTICAL BINARY

Takes a string and the password (argv[1] and argv[2]) and translates them into binary
The binary string is then printed into columns instead of rows

python binaryvertical.py [string] [password] > [output file]
"""
import sys

DEBUG = False

argv = sys.argv
text = argv[1] + argv[2]  #Read all of an input

binary = ''.join([bin(ord(c))[2:].rjust(8,'0') for c in text])  #ASCII --> Binary in utf-8

i = 0
while(i <= 7):
    j = i
    while(j < len(binary)):
        sys.stdout.write(binary[j])
        j += 8
    if(i != 7):
        print
    i += 1

if(DEBUG):
    i = 0
    print
    while(i <= len(binary)):
        print binary[i:i+8]
        i += 8
