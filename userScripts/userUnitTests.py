#!/usr/bin/env python3
import unittest
from Users import *

class TestUserMethods(unittest.TestCase):
    
    #test create sys user
    def test_CreateUser(self):
        result = createUser('THOM','password')
        self.assertEqual(result,1)
    
    #test w/out user
    def test_CreateUserWithoutName(self):
        result = createUser('','password')
        self.assertEqual(result,-1)

    #test without pass
    def test_CreateUserWithoutPass(self):
        result = createUser('Ethan','')
        self.assertEqual(result,-1)

    #test delete sys user
    def test_DeleteUser(self):
        result = deleteUser('THOM')
        self.assertEqual(result,1)

    #test delete user that doesn't exist
    def test_DeleteNonExistUser(self):
        result = deleteUser('thisUserProbsDoesNotExist')
        self.assertEqual(result,-1)

    #test delete without user
    def test_DeleteNoUserName(self):
        result = deleteUser('')
        self.assertEqual(result,-1)

    #test enter DB WILL FAIL IF NOT CONNECTED TO API
    def test_AddUserToDB(self):
        reuslt = addUserToDB('PythonTest')
        self.assertEqual(reuslt,1)

    #test enter DB if no name
    def test_addNoName(self):
        result = addUserToDB('')
        self.assertEqual(result,-1)

if __name__== '__main__':
    unittest.main()
