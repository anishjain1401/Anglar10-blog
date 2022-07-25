# Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## !!!! LEARN ANGULAR !!!!
Angular is an open-source, JavaScript framework written in TypeScript. Google maintains
it, and its primary purpose is to develop single-page applications.

## 1) Run commands in command prompt
install node and npm
then , to install angular command is 
" npm install -g @angular/cli "
latest version is 14
To check version command is 
" ng version "
To create new project or app or blog command is
" ng new blog " 
Now go inside blog folder and run 
" ng serve "
to run the app of angular

## 2) UNDERSTANDING FOLDERS AND FILES
(package.json file) -- the very first file of project having dependencies and devDependencies 
and every external new dependency is added in devDependencies.
(node_modules directory) -- you can write your code anywhere in project buy never write code 
in node_modules.All dependencies files are present.
(src folder) -- almost all work done is done in src folder.
(environments) -- when developing app the developing environment is used for testing is different
 and for live production environment is used, so different config can be kept in environment.
(assets) -- so external css can be kept in assets
(index.html) -- first file loading in project
(main.ts) -- first js loading in project.
(style.css) 
(app) -- it have module, component and route. mainly running from app-root tag present in html.
(modules) -- collection of components
(components) -- small functionalities.

editorconfig
karmaconfig
package.lock.json
tslint
typescript files
e2e folder

## 3) LEARNING ANGULAR INTERPOLATION
sending data from app.component.ts to app.component.html with function, array, objects etc..s

## 4) WHAT IS COMPONENT IN ANGULAR
(understand component) -- piece of code responsible for specific work ex : component of login,
component of header, footer
component are resuable so difference is in component is piece of code with bunch of files
built in component by angular is app  
(4 files in component) -- in .ts we will write logic, in .spec.ts is used for testing, html and css for styling
this @Component whole function is decorator -- all these component are connected to each-other
in this component we have - seletor , templateUrl,  styleUrls.
(edit component) -- as html and css component name can be changed(
(make new component) -- command is
" ng g c user-list "
here g is generate and c means component
it will develop a new component with again 4 new files.
To access our new Component we can use selector name from component decorator.
The new component is build inside app folder so compulsory first name "app" will come
then after you can define your name.
which is app-user-list can be used in app.component.html.
So by default app-root is present in index.html
[FLOW] -- So firslty index.html component app-root will work and then its further 
app.component.ts will work then according to that app.component.html will work in that 
it is finding our new component tag as "app-user-list" then user.component.ts
will work and further user.component.html will work 

## 5) WHAT IS MODULE IN ANGULAR
What is Module -- A mechanism to group components , directives, pipes and services.
In module we have NgModule deractive which include declarations which contains list of components,
imports containting list of modules, providers and bootstrap which contain the component
How to make module --
(new module) -- to generate new module command "ng g m users" it will create users folder with user.module.ts
create components in users folder by command "ng g c users/login"

## 6) FUNCTION IN ANGULAR
<button (click)="funName1()">
with parameters -- <button (click)="funName2('parameter')"> 
at time of parameter give the "type" of parameter passing like nameParameter:string
<button (click)="funName2(parameter1)">
if without quotes inside function then value will be undefined and error will be generated
So, define variable inside app.component.ts and then pass that variable inside function
example: yourNameForFun