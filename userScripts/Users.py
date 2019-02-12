#!/usr/bin/env python3
import os
import crypt

'''
Takes a username and password, and creates a new user if it does not exist
'''
def createUser(userName,password):
    #userName = "testUser"
    #password = "password"

    encPass = crypt.crypt(password,"22")

    #512 is the OS return value if getent can't find a user
    #so if username is available get 512 error
    if os.system("getent passwd "+userName) != 512:
        print("User name taken")
    else:
        print("Username: "+userName)
        print("Password: "+encPass)
        os.system("useradd -p "+encPass+" "+userName) #to delete user use: userdel userName

'''
Deletes a user if it exists
'''
def deleteUser(userName):
    os.system("userdel "+userName)

#quickTests
createUser("testUser","password")
print("USER CREATED")
deleteUser("testUser")
print("USER DELETED")
