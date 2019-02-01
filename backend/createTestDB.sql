CREATE DATABASE IF NOT EXISTS testDB;
USE testDB;
CREATE TABLE scoreTest ( id smallint unsigned not null auto_increment primary key, name varchar(20) not null, score integer not null);
INSERT INTO scoreTest ( id, name, score ) VALUES ( null, 'Adam', 100 ), (null,'Josh', 110), (null,'Chris',105),(null,'Gab',103),(null,'Madi',109);