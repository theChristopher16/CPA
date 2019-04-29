#!/bin/bash


pass=$(sed -n '1p' user.txt)
usn=$(sed -n '2p' user.txt)

passList=`python3 -c 'from userPassword import *; print(" ".join(userPassword()))'`
arr=($passList)
for i in {0..17}
do
    echo ${arr[i]}
done

if [[ $(hostname) = wyly ]]; then
    printf  "${arr[0]}\n${arr[0]}\n\n\n\n\n\n\n" | sudo adduser $usn
    sudo usermod -g player $usn
  elif [[ $(hostname) = IFM ]]; then
        printf  "${arr[10]}\n${arr[10]}\n\n\n\n\n\n\n" | sudo adduser $usn
        sudo usermod -g player $usn
      elif [[ $(hostname) = EngineeringAnnex ]]; then
            printf  "${arr[16]}\n${arr[16]}\n\n\n\n\n\n\n" | sudo adduser $usn
            sudo usermod -g player $usn
          elif [[ $(hostname) = Woodard ]]; then
                printf  "${arr[7]}\n${arr[7]}\n\n\n\n\n\n\n" | sudo adduser $usn
                sudo usermod -g player $usn
              elif [[ $(hostname) = COBB ]]; then
                    printf  "${arr[3]}\n${arr[3]}\n\n\n\n\n\n\n" | sudo adduser $usn
                    sudo usermod -g player $usn
                  elif [[ $(hostname) = Hale ]]; then
                        printf  "${arr[6]}\n${arr[6]}\n\n\n\n\n\n\n" | sudo adduser $usn
                        sudo usermod -g player $usn
                      elif [[ $(hostname) = StudentCenter ]]; then
                            printf  "${arr[13]}\n${arr[13]}\n\n\n\n\n\n\n" | sudo adduser $usn
                            sudo usermod -g player $usn
                          elif [[ $(hostname) = Bogard ]]; then
                                printf  "${arr[14]}\n${arr[14]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                sudo usermod -g player $usn
                              elif [[ $(hostname) = Howard ]]; then
                                    printf  "${arr[4]}\n${arr[4]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                    sudo usermod -g player $usn
                                  elif [[ $(hostname) = nethken ]]; then
                                        printf  "${arr[17]}\n${arr[17]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                        sudo usermod -g player $usn
                                      elif [[ $(hostname) = gtm ]]; then
                                            printf  "${arr[5]}\n${arr[5]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                            sudo usermod -g player $usn
                                          elif [[ $(hostname) = SouthHall ]]; then
                                                printf  "${arr[9]}\n${arr[9]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                sudo usermod -g player $usn
                                              elif [[ $(hostname) = Keeny ]]; then
                                                    printf  "${arr[1]}\n${arr[1]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                    sudo usermod -g player $usn
                                                  elif [[ $(hostname) = UniversityHall ]]; then
                                                        printf  "${arr[2]}\n${arr[2]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                        sudo usermod -g player $usn
                                                      elif [[ $(hostname) = PowerPlant ]]; then
                                                            printf  "${arr[11]}\n${arr[11]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                            sudo usermod -g player $usn
                                                          elif [[ $(hostname) = bandBuilding ]]; then
                                                                printf  "${arr[8]}\n${arr[8]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                sudo usermod -g player $usn
							      elif [[ $(hostname) = tolliver ]]; then
								    printf  "${arr[12]}\n${arr[12]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                    sudo usermod -g player $usn
              						          elif [[ $(hostname) = cth ]]; then
                                                                        printf  "${arr[15]}\n${arr[15]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                        sudo usermod -g player $usn
 								      else
                                                                            echo "Failure in script - try again."
                                                                              fi
