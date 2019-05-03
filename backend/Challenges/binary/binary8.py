import sys

argv = sys.argv
bintext = argv[1] + argv[2]
#print bintext

print (''.join([bin(ord(c))[2:].rjust(8,'0') for c in bintext])) #ASCII --> Binary in utf-8
