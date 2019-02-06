# CPA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Create test database
From the terminal change into the backend directory and run:
mysql -u username -p password < createTestDB.sql
or
sudo mysql < createTestDB.sql
or
run each command in the sql script in the mysql terminal

## Create a user for the test database
In mysql run:
CREATE USER 'database'@'localhost' IDENTIFIED BY 'dbpass';

Give this user access to the testDb with:
GRANT ALL PRIVILEGES ON testDB . * TO 'database'@'localhost';

## Start PHP server
From outside the CPA directory run:
php -S 127.0.0.1:8080 -t ./CPA/backend
You can verify it's working by going to 127.0.0.1:8080 in your browser.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
