import sys

bintext = sys.stdin.read()
#print bintext

print ''.join([bin(ord(c))[2:].rjust(7,'0') for c in bintext]) #ASCII --> Binary in utf-7
