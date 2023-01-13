import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reusable-Component';
  userDetails=[{name:'Lopa',email:'lopa@gmail.com'},
               {name:'Lucy',email:'lucy@gmail.com'},
               {name:'Leeza',email:'leeza@gmail.com'}]
}
