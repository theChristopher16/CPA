import sys
import binascii


def instructions():
    print
    "Usage: python steg.py -(bB) -(sr) -o<val> [-i<val>] -w<val> [-h<val>]"
    exit(0)


def main():
    args = sys.argv
    argnum = len(args)

    if (args[3][:2] == "-o"):
        offset = int(args[3][2:])
    else:
        instructions()

    if (args[4][:2] == "-i"):
        interval = int(args[4][2:])
    else:
        interval = 1

    if (args[argnum - 1][:2] == "-h"):
        hidden = args[argnum - 1][2:]
        if (args[argnum - 2][:2] == "-w"):
            wrapper = args[argnum - 2][2:]
        else:
            instructions()
    elif (args[argnum - 1][:2] == "-w"):
        wrapper = args[argnum - 1][2:]

    else:
        instuctions()

    sentinel = ['\x00', '\xFF', '\x00', '\x00', '\xFF', '\x00']

    if (args[1] == "-B" and args[2] == "-s"):
        byteStore(offset, interval, wrapper, hidden, sentinel)
    elif (args[1] == "-b" and args[2] == "-s"):
        bitStore(offset, interval, wrapper, hidden, sentinel)


def byteStore(o, i, w, h, s):
    w = open(w, "r")
    wrapper = w.read()
    wrapper = list(wrapper)
    w.close()

    h = open(h, "r")
    hidden = h.read()
    hidden = list(hidden)
    h.close()

    for j in range(len(hidden)):
        wrapper[o] = hidden[j]
        o += i

    for j in range(len(s)):
        wrapper[o] = s[j]
        o += i

    wrapper = ''.join(wrapper)
    sys.stdout.write(wrapper)


def bitStore(o, i, w, h, s):
    w = open(w, "r")
    wrapper = w.read()
    w.close()

    h = open(h, "r")
    hidden = h.read()
    h.close()

    hidden += ''.join(s)
    hidden = list(hidden)

    wrapper = list(wrapper)

    for j in range(len(hidden)):

        hbyte = int(binascii.hexlify(hidden[j]), 16)

        for k in range(8):
            wbyte = int(binascii.hexlify(wrapper[o]), 16)
            wbyte &= 0b11111110
            wbyte |= ((hbyte & 0b10000000) >> 7)
            hbyte <<= 1
            wrapper[o] = chr(wbyte)
            o += i

    wrapper = ''.join(wrapper)
    sys.stdout.write(wrapper)


main()
