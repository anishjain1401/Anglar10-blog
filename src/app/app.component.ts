import { Component } from '@angular/core';

// this @Component whole function is decorator 
@Component({
  selector: 'app-root', // app-root is used in index.html
  templateUrl: './app.component.html', // app name can be changed
  styleUrls: ['./app.component.css'] // same css can be changed
})
// learning angular interpolation
//sending data from app.component.ts to app.component.html with function
// array,objects etc..s
export class AppComponent {
  title = 'blog';
  name = 'anish jain';
  getName(){
    return "AJ"
  }
  getN(){
    return this.name
  }
  obj = {
    firstname: "peter",
    lastname: "parker"
  }
  arr = ['bruce','peter','chris']
  a = 10;
  b = 20
  siteURL = "http://localhost:4200/"

  getFunName1(){
    alert("normal call fun Name1")
  }
  getFunName2(nameParameter:string)
  {
    alert(nameParameter)
  }
  getFunName3(para2:string){
    alert(para2)
  }
  yourNameForFun = "anish inside app.component.ts"
  getFunName4(Para3:string){
    alert(Para3)
  }
}
