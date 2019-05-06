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
    cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
    cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# IFM
  elif [[ $(hostname) = IFM ]]; then
        printf  "${arr[10]}\n${arr[10]}\n\n\n\n\n\n\n" | sudo adduser $usn
        sudo usermod -g player $usn
        cp ./descriptions/IFM /home/$usn/README.txt
        cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
        cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# ENGINEERING ANNEX
      elif [[ $(hostname) = EngineeringAnnex ]]; then
            printf  "${arr[16]}\n${arr[16]}\n\n\n\n\n\n\n" | sudo adduser $usn
            sudo usermod -g player $usn
            cp ./descriptions/Annex /home/$usn/README.txt
            cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
            cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# WOODARD
          elif [[ $(hostname) = Woodard ]]; then
                printf  "${arr[7]}\n${arr[7]}\n\n\n\n\n\n\n" | sudo adduser $usn
                sudo usermod -g player $usn
                cp ./descriptions/Woodard /home/$usn/README.txt
                cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# COBB
              elif [[ $(hostname) = COBB ]]; then
                    printf  "${arr[3]}\n${arr[3]}\n\n\n\n\n\n\n" | sudo adduser $usn
                    sudo usermod -g player $usn
                    cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                    cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# HALE
                  elif [[ $(hostname) = Hale ]]; then
                        printf  "${arr[6]}\n${arr[6]}\n\n\n\n\n\n\n" | sudo adduser $usn
                        sudo usermod -g player $usn
                        cp ./descriptions/Hale /home/$usn/README.txt
                        cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                        cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# STUDENT CENTER
                      elif [[ $(hostname) = StudentCenter ]]; then
                            printf  "${arr[13]}\n${arr[13]}\n\n\n\n\n\n\n" | sudo adduser $usn
                            sudo usermod -g player $usn
                            cp ./descriptions/StudentCenter /home/$usn/README.txt
                            cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                            cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# BOGARD
                          elif [[ $(hostname) = Bogard ]]; then
                                printf  "${arr[14]}\n${arr[14]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                sudo usermod -g player $usn
                                cp ./descriptions/Bogard /home/$usn/README.txt
                                cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# HOWARD
                              elif [[ $(hostname) = Howard ]]; then
                                    printf  "${arr[4]}\n${arr[4]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                    sudo usermod -g player $usn
                                    cp ./descriptions/Howard /home/$usn/README.txt
                                    cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                    cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# NEETHKEN
                                  elif [[ $(hostname) = nethken ]]; then
                                        printf  "${arr[17]}\n${arr[17]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                        sudo usermod -g player $usn
                                        cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                        cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# GTM
                                      elif [[ $(hostname) = gtm ]]; then
                                            printf  "${arr[5]}\n${arr[5]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                            sudo usermod -g player $usn
                                            cp ./descriptions/GTM /home/$usn/README.txt
                                            cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                            cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# SOUTH HALL
                                          elif [[ $(hostname) = SouthHall ]]; then
                                                printf  "${arr[9]}\n${arr[9]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                sudo usermod -g player $usn
                                                cp ./descriptions/SouthHall /home/$usn/README.txt
                                                cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# KEENY
                                              elif [[ $(hostname) = Keeny ]]; then
                                                    printf  "${arr[1]}\n${arr[1]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                    sudo usermod -g player $usn
                                                    cp ./descriptions/Keeny /home/$usn/README.txt
                                                    cp ./descriptions/Keeny2 /home/$usn/README2.txt
                                                    cp ./descriptions/Keeny3 /home/$usn/README3.txt
                                                    cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                    cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# UNIVERSITY HALL
                                                  elif [[ $(hostname) = UniversityHall ]]; then
                                                        printf  "${arr[2]}\n${arr[2]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                        sudo usermod -g player $usn
                                                        cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                        cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# POWER PLANT
                                                      elif [[ $(hostname) = PowerPlant ]]; then
                                                            printf  "${arr[11]}\n${arr[11]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                            sudo usermod -g player $usn
                                                            cp ./descriptions/PowerPlant /home/$usn/README.txt
                                                            cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                            cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# BAND BUILDING
                                                          elif [[ $(hostname) = bandBuilding ]]; then
                                                                printf  "${arr[8]}\n${arr[8]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                sudo usermod -g player $usn
                                                                cp ./descriptions/Band /home/$usn/README.txt
                                                                cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                                cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# TOLLIVER
							      elif [[ $(hostname) = tolliver ]]; then
								    printf  "${arr[12]}\n${arr[12]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                    sudo usermod -g player $usn
                                                                    cp ./descriptions/Tolliver /home/$usn/README.txt
                                                                    cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                                    cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# CTH
              						          elif [[ $(hostname) = cth ]]; then
                                                                        printf  "${arr[15]}\n${arr[15]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                        sudo usermod -g player $usn
                                                                        cp ./descriptions/CTH /home/$usn/README.txt
                                                                        cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                                        cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
 								      else
                                                                            echo "Failure in script - try again."
                                                                              fi
