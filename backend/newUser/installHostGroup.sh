#!/bin/bash
echo "Enter username"
read usn
echo "Enter a password"
pass=`python3 -c 'from userPassword import *; print(" ".join(userPassword()))'`
arr=($pass)
for i in {0..17}
do
    echo ${arr[i]}
done

echo ${arr[7]}

if [[ $(hostname) = wyly ]]; then
    printf  "${arr[0]}\n${arr[0]}\n\n\n\n\n\n\n" | sudo adduser $usn
    sudo usermod -g player $usn
    mkdir wyly_succeed
  elif [[ $(hostname) = IFM ]]; then
        printf  "${arr[10]}\n${arr[10]}\n\n\n\n\n\n\n" | sudo adduser $usn
        sudo usermod -g player $usn
        mkdir IFM_succeed
      elif [[ $(hostname) = EngineeringAnnex ]]; then
            printf  "${arr[16]}\n${arr[16]}\n\n\n\n\n\n\n" | sudo adduser $usn
            sudo usermod -g player $usn
            mkdir EngineeringAnnex_succeed
          elif [[ $(hostname) = Woodard ]]; then
                printf  "${arr[7]}\n${arr[7]}\n\n\n\n\n\n\n" | sudo adduser $usn
                sudo usermod -g player $usn
                mkdir Woodard_succeed
              elif [[ $(hostname) = COBB ]]; then
                    printf  "${arr[3]}\n${arr[3]}\n\n\n\n\n\n\n" | sudo adduser $usn
                    sudo usermod -g player $usn
                    mkdir COBB_succeed
                  elif [[ $(hostname) = Hale ]]; then
                        printf  "${arr[6]}\n${arr[6]}\n\n\n\n\n\n\n" | sudo adduser $usn
                        sudo usermod -g player $usn
                        mkdir Hale_succeed
                      elif [[ $(hostname) = StudentCenter ]]; then
                            printf  "${arr[13]}\n${arr[13]}\n\n\n\n\n\n\n" | sudo adduser $usn
                            sudo usermod -g player $usn
                            mkdir StudentCenter_succeed
                          elif [[ $(hostname) = Bogard ]]; then
                                printf  "${arr[14]}\n${arr[14]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                sudo usermod -g player $usn
                                mkdir Bogard_succeed
                              elif [[ $(hostname) = Howard ]]; then
                                    printf  "${arr[4]}\n${arr[4]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                    sudo usermod -g player $usn
                                    mkdir Howard_succeed
                                  elif [[ $(hostname) = nethken ]]; then
                                        printf  "${arr[17]}\n${arr[17]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                        sudo usermod -g player $usn
                                        mkdir nethken_succeed
                                      elif [[ $(hostname) = gtm ]]; then
                                            printf  "${arr[5]}\n${arr[5]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                            sudo usermod -g player $usn
                                            mkdir gtm_succeed
                                          elif [[ $(hostname) = SouthHall ]]; then
                                                printf  "${arr[9]}\n${arr[9]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                sudo usermod -g player $usn
                                                mkdir SouthHall_succeed
                                              elif [[ $(hostname) = Keeny ]]; then
                                                    printf  "${arr[1]}\n${arr[1]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                    sudo usermod -g player $usn
                                                    mkdir Keeny_succeed
                                                  elif [[ $(hostname) = UniversityHall ]]; then
                                                        printf  "${arr[2]}\n${arr[2]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                        sudo usermod -g player $usn
                                                        mkdir UniversityHall_succeed
                                                      elif [[ $(hostname) = PowerPlant ]]; then
                                                            printf  "${arr[11]}\n${arr[11]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                            sudo usermod -g player $usn
                                                            mkdir PowerPlant_succeed
                                                          elif [[ $(hostname) = bandBuilding ]]; then
                                                                printf  "${arr[8]}\n${arr[8]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                sudo usermod -g player $usn
                                                                mkdir bandBuilding_succeed
                                                              else
                                                                echo "Failure in script - try again."
                                                              fi
