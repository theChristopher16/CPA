#!/usr/bin/python3

#NOTES: install mysql-connector
#maybe put this on a CRON job

import os, subprocess, mysql.connector

#Dictionary to hold raspberry Pi details
raspberryPis = {
    "Wyly": {'ip': "10.16.17.2",'PingResponse': False,'port80': False},
    "Nethkin": {'ip': "10.16.17.3",'PingResponse': False,'port80': False},
    "Bogard": {'ip':"10.16.17.4",'PingResponse': False,'port80': False},
    "Keeny": {'ip':"10.16.17.5",'PingResponse': False,'port80': False},
    "Carson Taylor": {'ip':"10.16.17.6",'PingResponse': False,'port80': False},
    "Hale": {'ip':"10.16.17.7",'PingResponse': False,'port80': False},
    "GTM": {'ip':"10.16.17.8",'PingResponse': False,'port80': False},
    "Engineering Annex": {'ip':"10.16.17.9",'PingResponse': False,'port80': False},
    "Howard": {'ip':"10.16.17.10",'PingResponse': False,'port80': False},
    "Student Center": {'ip':"10.16.17.11",'PingResponse': False,'port80': False},
    "Tolliver": {'ip':"10.16.17.12",'PingResponse': False,'port80': False},
    "Woodard": {'ip':"10.16.17.13",'PingResponse': False,'port80': False},
    "COBB": {'ip':"10.16.17.14",'PingResponse': False,'port80': False},
    "Band Building": {'ip':"10.16.17.15",'PingResponse': False,'port80': False},
    "IFM": {'ip':"10.16.17.16",'PingResponse': False,'port80': False},
    "South Hall": {'ip':"10.16.17.17",'PingResponse': False,'port80': False},
    "Power Plant": {'ip':"10.16.17.18",'PingResponse': False,'port80': False},
    "University Hall": {'ip':"10.16.17.19",'PingResponse': False,'port80': False}
}


#pings all the raspberry pi's
for pi in raspberryPis.keys():
    response = os.system("ping -c1 -w2 " + raspberryPis[pi]['ip']) #ping 1 time and wait 2 sec for response
    if response == 0:
        raspberryPis[pi]['PingResponse'] = True
    else:
        raspberryPis[pi]['PingResponse'] = False

#check port 80 (webserver)
for pi in raspberryPis.keys():
    output = subprocess.check_output('nmap -p80 '+raspberryPis[pi]['ip'],shell=True) #nmap scan on port 80
    if "open".encode() in output:
        raspberryPis[pi]['port80'] = True
    else:
        raspberryPis[pi]['port80'] = False

#create connectio to DB
#ADD SECURITY TO PASSWORD
dbConnection = mysql.connector.connect(
    host='localhost',
    user='database',
    password = 'dbpass',
    database = 'testDB'
)

mycursor = dbConnection.cursor()

#update the DB on Ping and port 80 info for each pi
for pi in raspberryPis:

    sql = "UPDATE testRaspPi SET pingResponse = %s where Name = %s"
    vals = (raspberryPis[pi]['PingResponse'],pi)
    mycursor.execute(sql,vals)

    sql = "UPDATE testRaspPi SET port80 = %s where Name = %s"
    vals = (raspberryPis[pi]['port80'],pi)
    mycursor.execute(sql,vals)

    dbConnection.commit()

dbConnection.close()
