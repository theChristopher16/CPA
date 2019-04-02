CREATE DATABASE IF NOT EXISTS testDB;
USE testDB;
CREATE TABLE testRaspPi ( Id smallint unsigned not null auto_increment primary key,
Name varchar(20) not null,
IP varchar(20) not null,
pingResponse boolean,
port80 boolean);

INSERT INTO testRaspPi ( Id, Name, IP, pingResponse, port80)
VALUES 
    (null, 'Wyly', '10.16.17.2', FALSE, FALSE),
    (null, 'Nethkin','10.16.17.3', FALSE, FALSE),
    (null, 'Bogard','10.16.17.4', FALSE, FALSE),
    (null, 'Keeny','10.16.17.5', FALSE, FALSE),
    (null, 'Carson Taylor','10.16.17.6', FALSE, FALSE),
    (null, 'Hale','10.16.17.7', FALSE, FALSE),
    (null, 'GTM','10.16.17.8', FALSE, FALSE),
    (null, 'Engineering Annex','10.16.17.9', FALSE, FALSE),
    (null, 'Howard','10.16.17.10', FALSE, FALSE),
    (null, 'Student Center','10.16.17.11', FALSE, FALSE),
    (null, 'Tolliver','10.16.17.12', FALSE, FALSE),
    (null, 'Woodard','10.16.17.13', FALSE, FALSE),
    (null, 'COBB','10.16.17.14', FALSE, FALSE),
    (null, 'Band Building','10.16.17.15', FALSE, FALSE),
    (null, 'IFM','10.16.17.16', FALSE, FALSE),
    (null, 'South Hall','10.16.17.17', FALSE, FALSE),
    (null, 'Power Plant','10.16.17.18', FALSE, FALSE),
    (null, 'University Hall','10.16.17.19', FALSE, FALSE);
