import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics-of-typeScript';
  data:number=10;
  object:{name:string,phn:number}={name:'Lopa',phn:123}
  item:string[]=["hello","hi","hey"];


  getData(item:number | boolean)
  {
    if(typeof item==="number")
    return item*20;
  }
   // this.getData("hello")

   getObject(item:{name:string,phn:number})
   {
    return item;
   }

  }
