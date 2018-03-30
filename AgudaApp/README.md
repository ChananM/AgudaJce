# AgudaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Sync with VS Code

- Open VS Code
- Clone the main project
    - Go to Settings icon (bottom-left) and click 'Command-Pallete...'
    - Write 'Git: Clone' and press enter
    - Insert the URL: https://github.com/ChananM/AgudaJce.git and press enter
    - Choose the location that you want to save the local project
    - Import 'node_modules' folder to the local project from another Angular project (copy-paste to AgudaApp folder)
    - For further info, send msg in whatsup/gitter

## Development server

Naviate to cordova folder in CMD and run `cordova run browser`. The app will automatically reload if you change any of the source files.

<!-- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. -->

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Navigate to AgudaApp folder in CMD and run:<br>
`ng build --target=production --environment=prod --output-path cordova/www/ --base-href .`<br>
(`--base-href .` with the space+dot ` .`)
The build artifacts will be stored in the `cordova/www/` directory.

<!-- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. -->

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further helps

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
