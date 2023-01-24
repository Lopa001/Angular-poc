import { Component } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';
  memberData=[
    {name:'Anil',email:'anil@test.com'},
    {name:'Sam',email:'sam@test.com'},
    {name:'Bhaskar',email:'bhaskar@test.com'},
    {name:'Peter',email:'peter@test.com'}
  ]



  users:any;
  constructor(private userdata:UserDataService)
  {
console.warn("userdata",userdata.users())
this.users=userdata.users();
  }
}
