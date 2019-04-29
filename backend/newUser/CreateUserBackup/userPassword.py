import sys, hashlib, os
def userPassword():
    size = 18
    hash = hashlib.sha512()
    salt = "18976a5d44786255f0d01a23a13455a84cf62772fd6595894e4f154425c87e2b"
    # creates random hex value to be used as salt, kept the same for consistency
    # hard coded value for salt??

    # password_salt = os.urandom(32).hex()
    userPassword = ["" for x in range(size)]
    for i in range(size):
        if i == 0:
            userPassword[0] = fline=open("user.txt").readline().rstrip()
            pwd = userPassword[0]
        elif i > 0:
            hash.update(('%s%s' % (salt, pwd)).encode('utf-8'))
            userPassword[i] = hash.hexdigest()
    return userPassword

