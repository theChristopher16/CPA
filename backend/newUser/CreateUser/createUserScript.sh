echo Enter username
read usn
echo Enter password
read pass
echo $usn > username.txt
echo $pass > password.txt
cat *.txt > user.txt
rm username.txt
rm password.txt
pssh -i -h .hosts.txt StrictHostKeyChecking=no "scp winadmin@10.16.17.254:/home/winadmin/Development/CPA/backend/newUser/CreateUser/userPassword.py /home/winadmin"
pssh -i -h .hosts.txt StrictHostKeyChecking=no "scp winadmin@10.16.17.254:/home/winadmin/Development/CPA/backend/newUser/CreateUser/user.txt /home/winadmin"
pssh -i -h .hosts.txt StrictHostKeyChecking=no "scp -r winadmin@10.16.17.254:/home/winadmin/Development/CPA/backend/newUser/descriptions /home/winadmin"
pssh -i -h .hosts.txt StrictHostKeyChecking=no "scp winadmin@10.16.17.254:/home/winadmin/Development/CPA/backend/newUser/CreateUser/installHost.sh /home/winadmin"
pssh -i -h .hosts.txt StrictHostKeyChecking=no ./installHost.sh
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm user.txt
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm userPassword.py
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm installHost.sh
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm -r descriptions
pssh -i -h .hosts.txt StrictHostKeyChecking=no rm -r __pycache__
rm -r __pycache__
rm user.txt
curlCmd = "url -F 'Name='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/addUser"
eval curlCMD
