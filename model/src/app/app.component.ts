import { Component } from '@angular/core';
import {dataType} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'model';
getData(){
  const data:dataType={
    name:'Lopamudra',
    id:1,
    Indian:true,
    address:"2/A CTC"
  }
  return data;
}

}
