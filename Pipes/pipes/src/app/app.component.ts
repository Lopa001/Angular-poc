import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  today=Date();

  capString(item:string){
    return item.toUpperCase();
  }
// JSON object
  user={name:'Lopa',age:27}


}
