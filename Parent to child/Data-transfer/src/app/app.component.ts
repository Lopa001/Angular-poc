import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data-transfer';
  data=10;
  updateChild(){
    this.data= Math.floor(Math.random()*10)
  }
  title1='Reusable Component';
  userDetails=[{name:'Lopa', email:'lopalmn95@gmail.com'},
               {name:'Leeza', email:'leeza@gmail.com'},
               {name:'Lucy', email:'lucy@gmail.com'}]
}
