#!/usr/bin/env python3
import os
import crypt
import requests #must install dependency

'''
Takes a username and password, and creates a new user if it does not exist
'''
def createUser(userName,password):
    if userName == '':
        print('Please enter a username')
        return -1

    if password == '':
        print('Please enter a password')
        return -1

    encPass = crypt.crypt(password,"22")

    #512 is the OS return value if getent can't find a user
    #so if username is available get 512 error
    if os.system("getent passwd "+userName) != 512:
        print("User name taken")
        return -1

    else:
        print("Username: "+userName)
        print("Password: "+encPass)
        os.system("sudo useradd -p "+encPass+" "+userName) #having sudo may be bad?
        return 1
    
    return 1

'''
Deletes a user if it exists
'''
def deleteUser(userName):
    if userName == '':
        print("Please enter a username to delete")
        return -1

    res = os.system("sudo userdel "+userName)
    print(res)

    #1536 is OS code for a user that does not exist
    if res == 1536:
        return -1

    return 1

def addUserToDB(userName):
    if userName == '':
        print("Please enter username to add to database")
        return -1
    
    playerInfo = {'Name' : userName}
    try:
        r = requests.post('http://127.0.0.1:8080/addUser',playerInfo)
        #r = requests.post('http://ec2-34-222-160-131.us-west-2.compute.amazonaws.com//addUser',playerInfo)
        print(r.text)
        return 1

    except:
        print("Unable to connect to API")
        return -1
