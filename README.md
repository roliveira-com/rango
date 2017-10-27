# Rango
Estudando Angular 4 com typescipt e Angular CLI! 

## Usando o HttpClient
Este branch encapsula o refactory para usar o Módulo HttpClient introduzido no Angular 4.3. Alterações foram necessárias no múdulo principal da aplicação (providers) e nas classes `RestaurantService`, `OrderService` e `ErrorHandler`.

## Angular 4 and Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Installing dependencies
Just run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. The local server use [json-server](https://github.com/roliveira-com/json-server) library to setup a local REST api. Run `json-server mock.json` at the rrot folder to start server.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Initializing server

`ng serve` or `npm start`

## 2. Initializing Backend

### Installing json-server

`npm install -g json-server`

### Initializing the backend server (at app root folder)

`json-server db.json`

## Goodies

Regex most used

### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Credits

- Images by [freepik.com](http://www.freepik.com).
- Project setup made during the [HTML5 Study Group #67](https://www.meetup.com/GDG-SP/events/242359569/?_af=event&_af_eid=242359569&https=on) meetup.
- Study Base: [https://www.udemy.com/angular-pt/learn/v4/content](https://www.udemy.com/angular-pt/learn/v4/content)
