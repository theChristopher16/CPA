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
if [[ $(hostname) = Wyly ]]; then
    printf  "${arr[0]}\n${arr[0]}\n\n\n\n\n\n\n" | sudo adduser $usn
    sudo usermod -g player $usn
    sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
    sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
    sudo mkdir /home/$usn/Challenge1
    python /home/winadmin/Challenges/binary/binary7.py "The password to GTM (10.16.17.8) is: " ${arr[5]} > /home/$usn/Challenge1/challenge.txt
    sudo cp /home/winadmin/descriptions/Wyly /home/$usn/Challenge1/README.txt
    mkdir /home/$usn/Challenge2
    echo -n "Your password to Keeny (10.16.17.5) is: ${arr[1]}" > /home/winadmin/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Storage/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Challenges/tempstuff/challenge.txt
    bzip2 /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.bz2 /home/winadmin/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Challenges/tempstuff/challenge.txt
    bzip2 /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.bz2 /home/winadmin/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Challenges/tempstuff/challenge.txt
    gzip /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.gz /home/winadmin/Challenges/tempstuff/challenge.txt
    bzip2 /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.bz2 /home/winadmin/Challenges/tempstuff/challenge.txt
    bzip2 /home/winadmin/Challenges/tempstuff/challenge.txt | mv /home/winadmin/Challenges/tempstuff/challenge.txt.bz2 /home/winadmin/Challenges/tempstuff/challenge.txt
    mv /home/winadmin/Challenges/tempstuff/challenge.txt /home/$usn/Challenge2/challenge.txt
    sudo cp /home/winadmin/descriptions/Wyly2 /home/$usn/Challenge2/README.txt

# IFM
  elif [[ $(hostname) = IFM ]]; then
        printf  "${arr[10]}\n${arr[10]}\n\n\n\n\n\n\n" | sudo adduser $usn
        sudo usermod -g player $usn
        sudo cp /home/winadmin/descriptions/IFM /home/$usn/README.txt
        sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
        sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
# ENGINEERING ANNEX
      elif [[ $(hostname) = EngineeringAnnex ]]; then
            printf  "${arr[16]}\n${arr[16]}\n\n\n\n\n\n\n" | sudo adduser $usn
            sudo usermod -g player $usn
            
            sudo cp -a /home/winadmin/bashrc_backup /home/$usn/.bashrc
            sudo cp -a /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
            sudo mkdir /home/$usn/Challenge
			echo "The password to Nethken (10.16.17.3) is: ${arr[17]}" > /home/winadmin/Challenges/tempstuff/PASSWORD
			python /home/winadmin/Challenges/supersteg/xor.py /home/winadmin/Challenges/supersteg/fullkey.bmp < /home/winadmin/Challenges/tempstuff/PASSWORD > /home/$usn/Challenge/PASSWORD
			rm /home/winadmin/Challenges/tempstuff/PASSWORD
			sudo cp -a /home/winadmin/Challenges/supersteg/program_1024-8.bmp /home/$usn/Challenge/t-rex.bmp
			sudo cp -a /home/winadmin/Challenges/supersteg/1_128-4.bmp /home/$usn/Challenge/spinosaurus.bmp
			sudo cp -a /home/winadmin/Challenges/supersteg/2_202.bmp /home/$usn/Challenge/pterodacyl.bmp
			sudo cp -a /home/winadmin/Challenges/supersteg/2_hint.bmp /home/$usn/Challenge/triceratops.bmp
			sudo cp -a /home/winadmin/Challenges/supersteg/3_81.bmp /home/$usn/Challenge/packleader.bmp
			sudo cp -a /home/winadmin/Challenges/supersteg/3_hint1_2048.bmp /home/$usn/Challenge/packmember1.bmp
			sudo cp -a /home/winadmin/Challenges/supersteg/3_hint2_4096.bmp /home/$usn/Challenge/packmember2.bmp
			sudo cp -a /home/winadmin/Challenges/supersteg/4_512-2.bmp /home/$usn/Challenge/stegosaurus.bmp
			sudo cp -a /home/winadmin/Challenges/supersteg/keybase.bmp /home/$usn/Challenge/key.bmp
            sudo cp -a /home/winadmin/descriptions/Annex /home/$usn/Challenge/README.txt

            
# WOODARD
          elif [[ $(hostname) = Woodard ]]; then
                printf  "${arr[7]}\n${arr[7]}\n\n\n\n\n\n\n" | sudo adduser $usn
                sudo usermod -g player $usn
                
                sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                sudo mkdir /home/$usn/Challenge
                echo "The password to Band Building (10.16.17.15) is: ${arr[8]}" > /home/winadmin/Challenges/tempstuff/steg2file
                python /home/winadmin/Challenges/steg/steg.py -b -s -o729 -w/home/winadmin/Challenges/steg/steg2/dog3.bmp -h/home/winadmin/Challenges/tempstuff/steg2file > /home/$usn/Challenge/dog3.bmp
                sudo cp /home/winadmin/Challenges/steg/steg2/dog1.bmp /home/$usn/Challenge/dog1.bmp
                sudo cp /home/winadmin/Challenges/steg/steg2/dog2.bmp /home/$usn/Challenge/dog2.bmp
                rm /home/winadmin/Challenges/tempstuff/steg2file
                sudo cp /home/winadmin/descriptions/Woodard /home/$usn/Challenge/README.txt

                
# COBB
              elif [[ $(hostname) = COBB ]]; then
                    printf  "${arr[3]}\n${arr[3]}\n\n\n\n\n\n\n" | sudo adduser $usn
                    sudo usermod -g player $usn
                    sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                    sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
					sudo cp /home/winadmin/Challenges/steg/steg_encode.py /home/winadmin/Challenges/tempstuff/steg.py
                    sudo chmod 111 /home/winadmin/Challenges/tempstuff/steg.py
                    mv /home/winadmin/Challenges/tempstuff/steg.py /home/$usn/steg.py
                    echo "python steg.py [-bB] -r -o[offset] -i[interval] -w[wrapper]" > /home/$usn/syntax.txt

                    
# HALE
                  elif [[ $(hostname) = Hale ]]; then
                        printf  "${arr[6]}\n${arr[6]}\n\n\n\n\n\n\n" | sudo adduser $usn
                        sudo usermod -g player $usn
                        
                        sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                        sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                        sudo mkdir /home/$usn/Challenge
                        python /home/winadmin/Challenges/binary/binary7.py "The password to Woodard (10.16.17.13) is: " ${arr[5]} > /home/$usn/Challenge/challenge.txt
                        sudo cp /home/winadmin/descriptions/Hale /home/$usn/Challenge/README.txt

                        
# STUDENT CENTER
                      elif [[ $(hostname) = StudentCenter ]]; then
                            printf  "${arr[13]}\n${arr[13]}\n\n\n\n\n\n\n" | sudo adduser $usn
                            sudo usermod -g player $usn
                            
                            sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                            sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                            sudo mkdir /home/$usn/Challenge
                            python /home/winadmin/Challenges/caesar/caesar.py "The password for Tolliver (10.16.17.12) is: " ${arr[12]} "12" > /home/$usn/Challenge/challenge.txt
                            sudo cp /home/winadmin/descriptions/StudentCenter /home/$usn/Challenge/README.txt

                            
# BOGARD
                          elif [[ $(hostname) = Bogard ]]; then
                                printf  "${arr[14]}\n${arr[14]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                sudo usermod -g player $usn
                                
                                sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                                sudo mkdir /home/$usn/Challenge
                                sudo cp /home/winadmin/Challenges/xor/t-rex.bmp /home/$usn/Challenge/t-rex.bmp
                                sudo cp /home/winadmin/Challenges/xor/dodo.bmp /home/$usn/Challenge/dodo.bmp
                                sudo cp /home/winadmin/Challenges/xor/mammoth.bmp /home/$usn/Challenge/mammoth.bmp
                                echo "The password to CTH (10.16.17.6) is: ${arr[15]}" > /home/winadmin/Challenges/tempstuff/xorfile
                                python /home/winadmin/Challenges/xor/xor.py t-rex.bmp < /home/winadmin/Challenges/tempstuff/xorfile > /home/$usn/Challenge/key
                                rm /home/winadmin/Challenges/tempstuff/xorfile
                                sudo cp /home/winadmin/descriptions/Bogard /home/$usn/Challenge/README.txt

                                
# HOWARD
                              elif [[ $(hostname) = Howard ]]; then
                                    printf  "${arr[4]}\n${arr[4]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                    sudo usermod -g player $usn
                                    
                                    sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                    sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                                    sudo mkdir /home/$usn/Challenge1
                                    sudo mkdir /home/$usn/Challenge1/Challenge
                                    python /home/winadmin/Challenges/ftp/ftp.py -s "The password to Student Center (10.16.17.11) is: " ${arr[13]} "/home/$usn/Challenge1/Challenge/"
                                    sudo cp /home/winadmin/descriptions/Howard /home/$usn/Challenge1/README.txt
                                    sudo mkdir /home/$usn/Challenge2
                                    sudo mkdir /home/$usn/Challenge2/Challenge
                                    python /home/winadmin/Challenges/ftp/ftp -t "The password to Bogard (10.16.17.4) is: " ${arr[14]} "/home/$usn/Challenge2/Challenge/"
                                    sudo cp /home/winadmin/descriptions/Howard2 /home/$usn/Challenge2/README.txt

                                    
# NEETHKEN
                                  elif [[ $(hostname) = Nethken ]]; then
                                        printf  "${arr[17]}\n${arr[17]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                        sudo usermod -g player $usn
                                        sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                        sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
										echo "Congratulations $usn!!! You've completed all of the CPA cyber challenges!" > /home/$usn/winner.txt

                                        
# GTM
                                      elif [[ $(hostname) = GTM ]]; then
                                            printf  "${arr[5]}\n${arr[5]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                            sudo usermod -g player $usn
                                            
                                            sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                            sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                                            sudo mkdir /home/$usn/Challenge
                                            echo "The password for Hale (10.16.17.7) is: ${arr[6]}" > /home/winadmin/Challenges/tempstuff/steg1file
                                            python /home/winadmin/Challenges/steg/steg.py -B -s -o1024 -i8 -w/home/winadmin/Challenges/steg/steg1/cat1.bmp -h/home/winadmin/Challenges/tempstuff/steg1file > /home/$usn/Challenge/cat1.bmp
                                            sudo cp /home/winadmin/Challenges/steg/steg1/cat2.bmp /home/$usn/Challenge/cat2.bmp
                                            sudo cp /home/winadmin/Challenges/steg/steg1/cat3.bmp /home/$usn/Challenge/cat3.bmp
                                            rm /home/winadmin/Challenges/tempstuff/steg1file
                                            sudo cp /home/winadmin/descriptions/GTM /home/$usn/Challenge/README.txt

                                            
# SOUTH HALL
                                          elif [[ $(hostname) = SouthHall ]]; then
                                                printf  "${arr[9]}\n${arr[9]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                sudo usermod -g player $usn
                                                
                                                sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                                                sudo mkdir /home/$usr/Challenge
                                                echo "The password for IFM (10.16.17.16) is: ${arr[10]}" > /home/winadmin/Challenges/tempstuff/steg3file
                                                python /home/winadmin/Challenges/steg/steg.py -b -s -o2938 -w/home/winadmin/Challenges/steg/steg3/dogpassword.bmp -h/home/winadmin/Challenges/tempstuff/steg3file > /home/winadmin/Challenges/tempstuff/dogtohide
                                                python /home/winadmin/Challenges/steg/steg.py -B -s -o2005 -i6 -w/home/winadmin/Challenges/steg/steg3/dogcat2.bmp -h/home/winadmin/Challenges/tempstuff/dogtohide > /home/$usn/Challenge/dogcat2.bmp
                                                sudo cp /home/winadmin/Challenges/steg/steg3/dogcat1.bmp /home/$usn/Challenge/dogcat1.bmp
                                                sudo cp /home/winadmin/Challenges/steg/steg3/hiddendogcat3.bmp /home/$usn/Challenge/dogcat3.bmp
                                                rm /home/winadmin/Challenges/tempstuff/steg3file /home/winadmin/Challenges/tempstuff/dogtohide
                                                sudo cp /home/winadmin/descriptions/SouthHall /home/$usn/Challenge/README.txt

                                                
# KEENY
                                              elif [[ $(hostname) = Keeny ]]; then
                                                    printf  "${arr[1]}\n${arr[1]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                    sudo usermod -g player $usn
                                                    sudo cp /home/winadmin/Challenges/shortdictionary.txt /home/$usn/dictionary.txt
                                                    sudo mkdir /home/$usn/Challenge1
                                                    echo -n "The password for University Hall (10.16.17.19) is: ${arr[2]}" > /home/winadmin/Challenges/tempstuff/passwordmd5.txt | ccrypt -K "place" /home/winadmin/Challenges/tempstuff/passwordmd5.txt
                                                    mv /home/winadmin/Challenges/tempstuff/passwordmd5.txt.cpt /home/$usn/Challenge1/password.txt
                                                    echo -n "place" | md5sum > /home/$usn/Challenge1/challenge.txt
                                                    sudo cp /home/winadmin/descriptions/Keeny /home/$usn/Challenge1/README.txt
                                                    sudo mkdir /home/$usn/Challenge2
                                                    echo -n "The password for COBB (10.16.17.14) is: ${arr[3]}" | base64 > /home/$usn/Challenge2/challenge.txt
                                                    sudo cp /home/winadmin/descriptions/Keeny2 /home/$usn/Challenge2/README.txt
                                                    sudo mkdir /home/$usn/Challenge3
                                                    echo -n "The password for Howard (10.16.17.10) is: ${arr[2]}" > /home/winadmin/Challenges/tempstuff/passwordsha512.txt | ccrypt -K "Heaven" /home/$usn/Challenge3/passwordsha512.txt
                                                    sudo mv /home/winadmin/Challenges/tempstuff/passwordsha512.txt.cpt /home/$usn/Challenge3/password.txt
                                                    echo -n "Heaven" | sha512 > /home/$usn/Challenge3/challenge.txt
                                                    sudo cp /home/winadmin/descriptions/Keeny3 /home/$usn/Challenge3/README.txt

                                                    
# UNIVERSITY HALL
                                                  elif [[ $(hostname) = UniversityHall ]]; then
                                                        printf  "${arr[2]}\n${arr[2]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                        sudo usermod -g player $usn
                                                        sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                        sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
														sudo cp /home/winadmin/Challenges/xor/xor.py /home/winadmin/Challenges/tempstuff/xor.py
                                                        sudo chmod 111 /home/winadmin/Challenges/tempstuff/xor.py
                                                        sudo mv /home/winadmin/Challenges/tempstuff/xor.py /home/$usn/xor.py
                                                        echo "python xor.py [key file] < [encrypted file] > [decrypted file]" > /home/$usn/syntax.txt

                                                        
# POWER PLANT
                                                      elif [[ $(hostname) = PowerPlant ]]; then
                                                            printf  "${arr[11]}\n${arr[11]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                            sudo usermod -g player $usn
                                                            
                                                            sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                            sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                                                            sudo mkdir /home/$usn/Challenge
                                                            sudo cp /home/winadmin/Challenges/shortdictionary.txt /home/$usn/Challenge/dictionary.txt
                                                            python /home/winadmin/Challenges/vigenere/vigenere_encode.py "The password for IFM (10.16.17.16) is: " ${arr[10]} "kinds" > /home/$usn/Challenge/challenge.txt
                                                            sudo cp /home/winadmin/descriptions/PowerPlant /home/$usn/Challenge/README.txt

                                                            
# BAND BUILDING
                                                          elif [[ $(hostname) = BandBuilding ]]; then
                                                                printf  "${arr[8]}\n${arr[8]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                sudo usermod -g player $usn
                                                                
                                                                sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                                sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                                                                sudo mkdir /home/$usn/Challenge
                                                                python /home/winadmin/Challenges/binary/binaryvertical.py "The password for South Hall (10.16.17.17) is: " ${arr[9]} > /home/$usn/Challenge/challenge.txt
                                                                sudo cp /home/winadmin/descriptions/Band /home/$usn/Challenge/README.txt

                                                                
    
# TOLLIVER
							      elif [[ $(hostname) = Tolliver ]]; then
								    printf  "${arr[12]}\n${arr[12]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                    sudo usermod -g player $usn
                                                                    
                                                                    sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                                    sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                                                                    sudo mkdir /home/$usn/Challenge
                                                                    sudo cp /home/winadmin/Challenges/shortdictionary.txt /home/$usn/Challenge/dictionary.txt
                                                                    python /home/winadmin/Challenges/abraxas/abraxas.py "The password for the Power Plant (10.16.17.18) is: " ${arr[11]} "Obama" > /home/$usn/Challenge/challenge.txt
                                                                    sudo cp /home/winadmin/descriptions/Tolliver /home/$usn/Challenge/README.txt

                                                                    
    
# CTH
              						          elif [[ $(hostname) = CarsonTaylor ]]; then
                                                                        printf  "${arr[15]}\n${arr[15]}\n\n\n\n\n\n\n" | sudo adduser $usn
                                                                        sudo usermod -g player $usn
                                                                        
                                                                        sudo cp /home/winadmin/bashrc_backup /home/$usn/.bashrc
                                                                        sudo cp /home/winadmin/bash_logoutBackup /home/$usn/.bash_logout
                                                                        sudo mkdir /home/$usn/Challenge
                                                                        echo "Half of the password for the Engineering Annex (10.16.17.7) is: ${arr[16]}" > /home/$usn/Challenge/halfpassword.txt
                                                                        sudo cp /home/winadmin/descriptions/CTH /home/$usn/Challenge/README.txt
 								      else
                                                                            echo "Failure in script - try again."
                                                                              fi
