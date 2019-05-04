#!/bin/bash


pass=$(sed -n '1p' user.txt)
usn=$(sed -n '2p' user.txt)

passList=`python3 -c 'from userPassword import *; print(" ".join(userPassword()))'`
arr=($passList)
for i in {0..17}
do
    echo ${arr[i]}
done

# WYLY
if [[ $(hostname) = wyly ]]; then
    printf  "${arr[0]}\n${arr[0]}\n\n\n\n\n\n\n" | sudo adduser $usn
    sudo usermod -g player $usn
    mkdir /home/$usn/Challenge1
    python ../../Challenges/binary/binary7.py "The password to GTM is: " ${arr[5]} > /home/$usn/Challenge1/challenge.txt
    cp ./descriptions/Wyly /home/$usn/Challenge1/README.txt
    mkdir /home/$usn/Challenge2
    echo -n "Your password to Keeny is: ${arr[1]}" > /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    bzip2 /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.bz2 /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    bzip2 /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.bz2 /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    bzip2 /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.bz2 /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    bzip2 /home/winadmin/Storage/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.bz2 /home/winadmin/Storage/Challenges/tempstuff/challenge.txt
    mv ../../Challenges/tempstuff/challenge.txt /home/$usn/Challenge2/challenge.txt
    cp ./descriptions/Wyly2 /home/$usn/Challenge2/README.txt

    echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=10' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# IFM
  elif [[ $(hostname) = IFM ]]; then
        printf  "${arr[10]}\n${arr[10]}\n\n\n\n\n\n\n" | sudo adduser $usn
        sudo usermod -g player $usn
        cp ./descriptions/IFM /home/$usn/README.txt

        echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=20' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# ENGINEERING ANNEX
      elif [[ $(hostname) = EngineeringAnnex ]]; then
            printf  "${arr[16]}\n${arr[16]}\n\n\n\n\n\n\n" | sudo adduser $usn
            sudo usermod -g player $usn
            mkdir /home/$usn/Challenge
			echo "The password to Nethkin is: ${arr[17]}" > ../../Challenges/tempstuff/PASSWORD
			python ../../Challenges/supersteg/xor.py ../../Challenges/supersteg/fullkey.bmp < ../../Challenges/tempstuff/PASSWORD > /home/$usn/Challenge/PASSWORD
			rm ../../Challenges/tempstuff/PASSWORD
			cp ../../Challenges/supersteg/program_1024-8.bmp /home/$usn/Challenge/t-rex.bmp
			cp ../../Challenges/supersteg/1_128-4.bmp /home/$usn/Challenge/spinosaurus.bmp
			cp ../../Challenges/supersteg/2_202.bmp /home/$usn/Challenge/pterodacyl.bmp
			cp ../../Challenges/supersteg/2_hint.bmp /home/$usn/Challenge/triceratops.bmp
			cp ../../Challenges/supersteg/3_81.bmp /home/$usn/Challenge/packleader.bmp
			cp ../../Challenges/supersteg/3_hint1_2048.bmp /home/$usn/Challenge/packmember1.bmp
			cp ../../Challenges/supersteg/3_hint2_4096.bmp /home/$usn/Challenge/packmember2.bmp
			cp ../../Challenges/supersteg/4_512-2.bmp /home/$usn/Challenge/stegosaurus.bmp
			cp ../../Challenges/supersteg/keybase.bmp /home/$usn/Challenge/key.bmp
            cp ./descriptions/Annex /home/$usn/Challenge/README.txt

            echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=30' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# WOODARD
          elif [[ $(hostname) = Woodard ]]; then
                printf  "${arr[7]}\n${arr[7]}\n\n\n\n\n\n\n" | sudo adduser $usn
                sudo usermod -g player $usn
                mkdir /home/$usn/Challenge
                echo "The password to Band Building is: ${arr[8]}" > ../../Challenges/tempstuff/steg2file
                python ../../Challenges/steg/steg.py -b -s -o729 -w../../Challenges/steg/steg2/dog3.bmp -h../../Challenges/tempstuff/steg2file > /home/$usn/Challenge/dog3.bmp
                cp ../../Challenges/steg/steg2/dog1.bmp /home/$usn/Challenge/dog1.bmp
                cp ../../Challenges/steg/steg2/dog2.bmp /home/$usn/Challenge/dog2.bmp
                rm ../../Challenges/tempstuff/steg2file
                cp ./descriptions/Woodard /home/$usn/Challenge/README.txt

                echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=40' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# COBB
              elif [[ $(hostname) = COBB ]]; then
                    printf  "${arr[3]}\n${arr[3]}\n\n\n\n\n\n\n" | sudo adduser $usn
                    sudo usermod -g player $usn
					cp ../../Challenges/steg/steg_encode.py ../../Challenges/tempstuff/steg.py
                    chmod 111 ../../Challenges/tempstuff/steg.py
                    mv ../../Challenges/tempstuff/steg.py /home/$usn/steg.py
                    echo "python steg.py [-bB] -r -o[offset] -i[interval] -w[wrapper]" > /home/$usn/syntax.txt

                    echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=10' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# HALE
                  elif [[ $(hostname) = Hale ]]; then
                        printf  "${arr[6]}\n${arr[6]}\n\n\n\n\n\n\n" | sudo adduser $usn
                        sudo usermod -g player $usn
                        mkdir /home/$usn/Challenge
                        python ../../Challenges/binary/binary7.py "The password to Woodard is: " ${arr[5]} > /home/$usn/Challenge/challenge.txt
                        cp ./descriptions/Hale /home/$usn/Challenge/README.txt

                        echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=50' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# STUDENT CENTER
                      elif [[ $(hostname) = StudentCenter ]]; then
                            printf  "${arr[13]}\n${arr[13]}\n\n\n\n\n\n\n" | sudo adduser $usn
                            sudo usermod -g player $usn
                            mkdir /home/$usn/Challenge
                            python ../../Challenges/caesar/caesar.py "The password for Tolliver is: " ${arr[12]} "12" > /home/$usn/Challenge/challenge.txt
                            cp ./descriptions/StudentCenter /home/$usn/Challenge/README.txt

                            echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=60' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# BOGARD
                          elif [[ $(hostname) = Bogard ]]; then
                                printf  "${arr[14]}\n${arr[14]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                sudo usermod -g player $usn
                                mkdir /home/$usn/Challenge
                                cp ../../Challenges/xor/t-rex.bmp /home/$usn/Challenge/t-rex.bmp
                                cp ../../Challenges/xor/dodo.bmp /home/$usn/Challenge/dodo.bmp
                                cp ../../Challenges/xor/mammoth.bmp /home/$usn/Challenge/mammoth.bmp
                                echo "The password to CTH is: ${arr[15]}" > ../../Challenges/tempstuff/xorfile
                                python ../../Challenges/xor/xor.py t-rex.bmp < ../../Challenges/tempstuff/xorfile > /home/$usn/Challenge/key
                                rm ../../Challenges/tempstuff/xorfile
                                cp ./descriptions/Bogard /home/$usn/Challenge/README.txt

                                echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=60' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# HOWARD
                              elif [[ $(hostname) = Howard ]]; then
                                    printf  "${arr[4]}\n${arr[4]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                    sudo usermod -g player $usn
                                    mkdir /home/$usn/Challenge1
                                    mkdir /home/$usn/Challenge1/Challenge
                                    python ../../Challenges/ftp/ftp.py -s "The password to Student Center is: " ${arr[13]} "/home/$usn/Challenge1/Challenge/"
                                    cp ./descriptions/Howard /home/$usn/Challenge1/README.txt
                                    mkdir /home/$usn/Challenge2
                                    mkdir /home/$usn/Challenge2/Challenge
                                    python ../../Challenges/ftp/ftp -t "The password to Bogard is: " ${arr[14]} "/home/$usn/Challenge2/Challenge/"
                                    cp ./descriptions/Howard2 /home/$usn/Challenge2/README.txt

                                    echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=70' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# NEETHKEN
                                  elif [[ $(hostname) = nethken ]]; then
                                        printf  "${arr[17]}\n${arr[17]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                        sudo usermod -g player $usn
										echo "Congratulations $usn!!! You've completed all of the CPA cyber challenges!" > /home/$usn/winner.txt

                                        echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=80' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# GTM
                                      elif [[ $(hostname) = gtm ]]; then
                                            printf  "${arr[5]}\n${arr[5]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                            sudo usermod -g player $usn
                                            mkdir /home/$usn/Challenge
                                            echo "The password for Hale is: ${arr[6]}" > ../../Challenges/tempstuff/steg1file
                                            python ../../Challenges/steg/steg.py -B -s -o1024 -i8 -w../../Challenges/steg/steg1/cat1.bmp -h../../Challenges/tempstuff/steg1file > /home/$usn/Challenge/cat1.bmp
                                            cp ../../Challenges/steg/steg1/cat2.bmp /home/$usn/Challenge/cat2.bmp
                                            cp ../../Challenges/steg/steg1/cat3.bmp /home/$usn/Challenge/cat3.bmp
                                            rm ../../Challenges/tempstuff/steg1file
                                            cp ./descriptions/GTM /home/$usn/Challenge/README.txt

                                            echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=90' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# SOUTH HALL
                                          elif [[ $(hostname) = SouthHall ]]; then
                                                printf  "${arr[9]}\n${arr[9]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                sudo usermod -g player $usn
                                                mkdir /home/$usr/Challenge
                                                echo "The password for IF is: ${arr[10]}" > ../../Challenges/tempstuff/steg3file
                                                python ../../Challenges/steg/steg.py -b -s -o2938 -w../../Challenges/steg/steg3/dogpassword.bmp -h../../Challenges/tempstuff/steg3file > ../../Challenges/tempstuff/dogtohide
                                                python ../../Challenges/steg/steg.py -B -s -o2005 -i6 -w../../Challenges/steg/steg3/dogcat2.bmp -h../../Challenges/tempstuff/dogtohide > /home/$usn/Challenge/dogcat2.bmp
                                                cp ../../Challenges/steg/steg3/dogcat1.bmp /home/$usn/Challenge/dogcat1.bmp
                                                cp ../../Challenges/steg/steg3/hiddendogcat3.bmp /home/$usn/Challenge/dogcat3.bmp
                                                rm ../../Challenges/tempstuff/steg3file ../../Challenges/tempstuff/dogtohide
                                                cp ./descriptions/SouthHall /home/$usn/Challenge/README.txt

                                                echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=100' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# KEENY
                                              elif [[ $(hostname) = Keeny ]]; then
                                                    printf  "${arr[1]}\n${arr[1]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                    sudo usermod -g player $usn
                                                    cp ../../Challenges/shortdictionary.txt /home/$usn/dictionary.txt
                                                    mkdir /home/$usn/Challenge1
                                                    echo -n "The password for University Hall is: ${arr[2]}" > ../../Challenges/tempstuff/passwordmd5.txt | ccrypt -K "place" ../../Challenges/tempstuff/passwordmd5.txt
                                                    mv ../../Challenges/tempstuff/passwordmd5.txt.cpt /home/$usn/Challenge1/password.txt
                                                    echo -n "place" | md5sum > /home/$usn/Challenge1/challenge.txt
                                                    cp ./descriptions/Keeny /home/$usn/Challenge1/README.txt
                                                    mkdir /home/$usn/Challenge2
                                                    echo -n "The password for COBB is: ${arr[3]}" | base64 > /home/$usn/Challenge2/challenge.txt
                                                    cp ./descriptions/Keeny2 /home/$usn/Challenge2/README.txt
                                                    mkdir /home/$usn/Challenge3
                                                    echo -n "The password for Howard is: ${arr[2]}" > ../../Challenges/tempstuff/passwordsha512.txt | ccrypt -K "Heaven" /home/$usn/Challenge3/passwordsha512.txt
                                                    mv ../../Challenges/tempstuff/passwordsha512.txt.cpt /home/$usn/Challenge3/password.txt
                                                    echo -n "Heaven" | sha512 > /home/$usn/Challenge3/challenge.txt
                                                    cp ./descriptions/Keeny3 /home/$usn/Challenge3/README.txt

                                                    echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=110' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# UNIVERSITY HALL
                                                  elif [[ $(hostname) = UniversityHall ]]; then
                                                        printf  "${arr[2]}\n${arr[2]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                        sudo usermod -g player $usn
														cp ../../Challenges/xor/xor.py ../../Challenges/tempstuff/xor.py
                                                        chmod 111 ../../Challenges/tempstuff/xor.py
                                                        mv ../../Challenges/tempstuff/xor.py /home/$usn/xor.py
                                                        echo "python xor.py [key file] < [encrypted file] > [decrypted file]" > /home/$usn/syntax.txt

                                                        echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=120' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# POWER PLANT
                                                      elif [[ $(hostname) = PowerPlant ]]; then
                                                            printf  "${arr[11]}\n${arr[11]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                            sudo usermod -g player $usn
                                                            mkdir /home/$usn/Challenge
                                                            cp ../../Challenges/shortdictionary.txt /home/$usn/Challenge/dictionary.txt
                                                            python ../../Challenges/vigenere/vigenere_encode.py "The password for IFM is: " ${arr[10]} "kinds" > /home/$usn/Challenge/challenge.txt
                                                            cp ./descriptions/PowerPlant /home/$usn/Challenge/README.txt

                                                            echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=130' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# BAND BUILDING
                                                          elif [[ $(hostname) = bandBuilding ]]; then
                                                                printf  "${arr[8]}\n${arr[8]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                sudo usermod -g player $usn
                                                                mkdir /home/$usn/Challenge
                                                                python ../../Challenges/binary/binaryvertical.py "The password for South Hall is: " ${arr[9]} > /home/$usn/Challenge/challenge.txt
                                                                cp ./descriptions/Band /home/$usn/Challenge/README.txt

                                                                echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=140' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# TOLLIVER
							      elif [[ $(hostname) = tolliver ]]; then
								    printf  "${arr[12]}\n${arr[12]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                    sudo usermod -g player $usn
                                                                    mkdir /home/$usn/Challenge
                                                                    cp ../../Challenges/shortdictionary.txt /home/$usn/Challenge/dictionary.txt
                                                                    python ../../Challenges/abraxas/abraxas.py "The password for the Power Plant is: " ${arr[11]} "Obama" > /home/$usn/Challenge/challenge.txt
                                                                    cp ./descriptions/Tolliver /home/$usn/Challenge/README.txt

                                                                    echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=150' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
# CTH
              						          elif [[ $(hostname) = cth ]]; then
                                                                        printf  "${arr[15]}\n${arr[15]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                        sudo usermod -g player $usn
                                                                        mkdir /home/$usn/Challenge
                                                                        echo "Half of the password for the Engineering Annex is: ${arr[16]}" > /home/$usn/Challenge/halfpassword.txt
                                                                        cp ./descriptions/CTH /home/$usn/Challenge/README.txt

                                                                        echo usn=$(whoami) >> /home/"$usn"/.bashrc
    echo loc=$(hostname) >> /home/"$usn"/.bashrc
    echo curlCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=1' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bashrc
    echo 'eval curlCmd &>/dev/null' >> /home/"$usn"/.bashrc
    echo curlLogoutCmd="curl -F 'UserName='$usn'' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -F 'Log=0' -F 'Location='$loc'' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateLocation" >> /home/'$usn'/.bash_logout
    echo 'eval curlLogoutCmd &>/dev/null' >> /home/"$usn"/.bash_logout
    echo updateCmd ="curl -F 'UserName='$usn'' -F 'Score=160' -F 'Key=SSBsb3ZlIHRpZGRpZXM' -X POST http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/updateScore"
    echo tac .bashrc | sed "1,4d" | tac >> what.txt
    echo cat what.txt > .bashrc
    echo rm what.txt >> /home/"$usn"/.bashrc
 								      else
                                                                            echo "Failure in script - try again."
                                                                              fi
