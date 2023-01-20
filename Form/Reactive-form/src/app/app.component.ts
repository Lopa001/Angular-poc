import { Component } from '@angular/core';
import{FormControl,FormGroup,FormControlName} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-form';
  loginForm= new FormGroup({
    user:new FormControl(''),
    password:new FormControl('') 
   })
   loginUser(){
    console.warn(this.loginForm.value);
   }
}
