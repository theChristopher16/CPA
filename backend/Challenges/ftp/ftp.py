"""
*This program takes a string of 7 bit binary or an ASCII string and converts it into either 7 or 10 bit chunks.
*It also will translate these chunks into their respective commands for ease of copy-paste (one line at a time).


SYNTAX:

python ftp.py [OPTION] [STRING] [PASSWORD] [LOCATION]


OPTIONS:

-s      Uses 7 bit chunks to make file permissions. No directories, any file/directory with something in the first 3 bits are ignored (allows for noise).

-t      Uses 10 bit chunks to make file permissions. Concats all permissions together. Leftover bits are 0 and ignored.


EXAMPLE:

python ftp.py -t "This is a secret!" "tacobell"
"""

import sys
import subprocess

argmes = True
argv = sys.argv
LOCATION = argv[4]

if  len(argv) < 2 or argv[1] != "-s" and argv[1] != "-t":

    print "Syntax error: Requires -s or -t to specify split type"

    exit(0)

binary = argv[2] + argv[3]
print argv[1]
print argv[2]
print argv[3]
print argv[4]

#-------Binary --> 7 bit chunks------------------------------------------------------

def sevenChunk(text):

    output = ""

    for i in range(0,len(text),7): #Almost comes pre-chunked

        output += text[i:i+7]

        output += " "

    return output



#-------7 bit chunks --> instructions------------------------------------------------

def sevenInstr(line):

    #print "\n--------Here are the generated file commands to use in the terminal--------\n"

    for i in range(len(line)):

        filecount = str(i).zfill(3) #Supports files up to file 999 (or course you can manually rename them later

        num = line[i] #Just so I didn't have to do annoying tuple things

        if num[0] == "0": #sevenChunk() takes away the first 3 bits, so we only work with the 3rd bit of the userperms

            numpart1 = "000"

        else:

            numpart1 = "001"

        numpart2 = num[1] + num[2] + num[3] #Easier way to do this but whatevs

        numpart3 = num[4] + num[5] + num[6]

        userperm = cipher(numpart1)

        groupperm = cipher(numpart2)

        otherperm = cipher(numpart3)

        subprocess.call(["touch", "{}file{}".format(LOCATION, filecount)]) #7 split will always be a file so no mkdir

        subprocess.call(["chmod", "{}{}{}".format(userperm, groupperm, otherperm), "{}file{}".format(LOCATION, filecount)])


    #print "# You can also make additional 'noise' files for clutter."

    #print "# All directories and any file with user permissions > 1 are ignored."





#-------10 bit chunks --> Instructions------------------------------------------------

def tenChunk(text):

    output = ""

    for i in range(0,len(text),10):

        fill = text[i:i+10]

        if(i+10 >= len(text)): #Simply using len(fill) was proving to be unreliable

            while len(fill) <= 10:

                fill += '0'

        fill = fill.replace("\n","") #For some reason adding the 0's in the while loops also added a newline

        output += fill

        output += " "

    return output





#-------Binary --> 10 bit chunks-----------------------------------------------------

def tenInstr(line):

    #print "\n--------Here are the generated file commands to use in the terminal--------\n"

    for i in range(len(line)):

        filecount = str(i).zfill(3)

        num = line[i]

        numpart1 = num[1] + num[2] + num[3]

        numpart2 = num[4] + num[5] + num[6]

        numpart3 = num[7] + num[8] + num[9]

        userperm = cipher(numpart1)

        groupperm = cipher(numpart2)

        otherperm = cipher(numpart3)

        if line[i][0] == "1": #Checks first bit of the perms, which is technically not a perm (-, d, or l)

            subprocess.call(["mkdir", "{}file{}".format(LOCATION, filecount)])

        else:

            subprocess.call(["touch", "{}file{}".format(LOCATION, filecount)])

        subprocess.call(["chmod", "{}{}{}".format(userperm, groupperm, otherperm), "{}file{}".format(LOCATION, filecount)])




#-------Quick translate dictionary-----------------------------------------------------

#So I wouldn't have to worry about making ANOTHER binary converter

def cipher(x):

    cipher = {

        '000' : 0,

        '001' : 1,

        '010' : 2,

        '011' : 3,

        '100' : 4,

        '101' : 5,

        '110' : 6,

        '111' : 7

    }.get(x, 404)   #Returns 404 if x is not found within the dictionary

    return cipher



#-------Main----------------------------------------------------------------------------

#ASCII --> binary or just binary input

if(binary[0] == '0' or binary[0] == '1'):   #Currently does not support ASCII text beginning with 0 or 1

    binary = binary.replace(" ","") #Just in case

else:

    binary = (''.join([bin(ord(c))[2:].rjust(7,'0') for c in binary])) #ASCII --> Binary in utf-7



#INPUT

if argv[1] == "-s":

    sep = sevenChunk(binary).split()

    sevenInstr(sep)

else:

    sep = tenChunk(binary).split()

    tenInstr(sep)
