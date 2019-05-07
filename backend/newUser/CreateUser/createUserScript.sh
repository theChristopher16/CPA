echo Enter username
read usn
echo Enter password
read pass
echo $usn > username.txt
echo $pass > password.txt
cat *.txt > user.txt
rm username.txt
rm password.txt
#pssh -i -h .hosts.txt StrictHostKeyChecking=no "scp winadmin@10.16.17.254:/home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py /home/winadmin"
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.2:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.3:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.4:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.5:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.6:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.7:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.9:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.10:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.11:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.12:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.13:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.14:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.15:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.16:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.17:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.18:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py winadmin@10.16.17.19:/home/winadmin


#pssh -i -h .hosts.txt StrictHostKeyChecking=no "scp winadmin@10.16.17.254:/home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt /home/winadmin"
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.2:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.3:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.4:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.5:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.6:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.7:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.8:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.9:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.10:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.11:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.12:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.13:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.14:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.15:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.16:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.17:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.18:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt winadmin@10.16.17.19:/home/winadmin


#pssh -i -h .hosts.txt StrictHostKeyChecking=no "scp -r winadmin@10.16.17.254:/home/winadmin/Development/CPA/backend/newUser/descriptions /home/winadmin"
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.2:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.3:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.4:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.5:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.6:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.7:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.8:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.9:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.10:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.11:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.12:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.13:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.14:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.15:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.16:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.17:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.18:/home/winadmin
scp -r /home/winadmin/Development/CPA/backend/newUser/descriptions winadmin@10.16.17.19:/home/winadmin



#pssh -i -h .hosts.txt StrictHostKeyChecking=no "scp winadmin@10.16.17.254:/home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh /home/winadmin"
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.2:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.3:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.4:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.5:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.6:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.7:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.8:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.9:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.10:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.11:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.12:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.13:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.14:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.15:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.16:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.17:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.18:/home/winadmin
scp /home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh winadmin@10.16.17.19:/home/winadmin


pssh -i -h .hosts.txt StrictHostKeyChecking=no ./installHost.sh
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm user.txt
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm userPassword.py
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm installHost.sh
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm -r descriptions
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm -r __pycache__
rm -r __pycache__
rm user.txt
curlCmd = "curl -F 'Name='$usn’’ -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST winnet.duckdns.org:8080/addUser"
eval curlCmd


