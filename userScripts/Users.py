#!/usr/bin/env python3
import os
import crypt
import requests #must instal dependency

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

def addUserToDB(userName):

    playerInfo = {'name' : userName}
    try:
        r = requests.post('http://127.0.0.1:8080/addUser',playerInfo)
        print(r.text)
    except:
        print("Unable to connect to API")


#quickTests

#create/delete user
'''
createUser("testUser","password")
print("USER CREATED")
deleteUser("testUser")
print("USER DELETED")
'''
#post to DB
#addUserToDB('tom')