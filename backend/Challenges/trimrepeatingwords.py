import sys
import collections

dict = sys.stdin.read()
dict = dict.split("\n")

for word in dict:
    repeatchar = False
    d = collections.defaultdict(int)
    for c in word:
        d[c] += 1
        if d[c] > 1:
            repeatchar = True
            break
    if repeatchar:
        continue

    print word
