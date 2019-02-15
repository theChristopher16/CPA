CREATE DATABASE IF NOT EXISTS testDB;
USE testDB;
CREATE TABLE Achievements ( Id smallint unsigned not null auto_increment primary key, Title varchar(50) not null,
    Description varchar(140), Score integer not null);

INSERT INTO Achievements ( Id, Title, Description, Score)
VALUES ( null, 'Start', 'Complete the fist Challenge', 100),
  (null,'Continue', 'Complete Challenge 2', 100),
  (null,'Trilogy', 'Do part 3', 100),
  (null,'One More', 'Challenge Fore', 100),
  (null,'The last one', 'The Last One', 100);
