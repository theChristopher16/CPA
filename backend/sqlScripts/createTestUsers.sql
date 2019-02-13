CREATE DATABASE IF NOT EXISTS testDB;
USE testDB;
CREATE TABLE usersTest ( Id smallint unsigned not null auto_increment primary key, Name varchar(20) not null, Score integer not null,
  Online boolean, Achievements varchar(200), LastLocation varchar(50));

INSERT INTO usersTest ( Id, Name, Score, Online, Achievements, LastLocation)
VALUES ( null, 'Adam', 100, TRUE, '1,4,2','Nethken'),
  (null,'Josh', 50, FALSE, '1','Student Center'),
  (null,'Chris',70, TRUE, '1,3', 'Tolliver'),
  (null,'Gab',103, TRUE, '1,4,5','Wyly'),
  (null,'Madi',109, FALSE, '1,3,2,5', 'Howard');
