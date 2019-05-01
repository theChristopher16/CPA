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
    cp ./descriptions/Wyly /home/$usn/README.txt
    cp ./descriptions/Wyly2 /home/$usn/README2.txt

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
            cp ./descriptions/Annex /home/$usn/README.txt

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
                cp ./descriptions/Woodard /home/$usn/README.txt

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
                        cp ./descriptions/Hale /home/$usn/README.txt

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
                            cp ./descriptions/StudentCenter /home/$usn/README.txt

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
                                cp ./descriptions/Bogard /home/$usn/README.txt

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
                                    cp ./descriptions/Howard /home/$usn/README.txt

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
                                            cp ./descriptions/GTM /home/$usn/README.txt

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
                                                cp ./descriptions/SouthHall /home/$usn/README.txt

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
                                                    cp ./descriptions/Keeny /home/$usn/README.txt
                                                    cp ./descriptions/Keeny2 /home/$usn/README2.txt
                                                    cp ./descriptions/Keeny3 /home/$usn/README3.txt

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
                                                            cp ./descriptions/PowerPlant /home/$usn/README.txt

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
                                                                cp ./descriptions/Band /home/$usn/README.txt

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
                                                                    cp ./descriptions/Tolliver /home/$usn/README.txt

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
                                                                        cp ./descriptions/CTH /home/$usn/README.txt

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
