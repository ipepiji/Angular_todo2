# AngularTodo2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## RXJS
https://blog.angular-university.io/rxjs-higher-order-mapping/
https://luukgruijs.medium.com/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

1. mergeMap = creates an Observable immediately for any source item (Show late result from all previous Observables, overlapping)
3. concatMap = waits for the previous Observable to complete before creating the next one (Show in order, not overlapping)
4. switchMap = for any source item, completes the previous Observable and immediately creates the next one (Not show late result from all previous Observables, skip late result)
5. exhaustMap = source items are ignored while the previous Observable is not completed (Wait first observable first, then can proceed to next, if 2nd emit during first observable, it will be ignored, which be proceed to third after first done, skip latter observable if too fast)
