import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API';
  apiResponseStatus:string='';
  apiResponseMsg:string='';
  users:any;
  constructor(private userData:UsersDataService)
{
 userData.users().subscribe((x)=>{
  console.warn("records come from backend",x);
  let response:any=x;
  //console.warn("users1",response.status);
  this.apiResponseStatus=response.status;
   this.users=response.data;
   this.apiResponseMsg=response.message;
   //console.warn("users",this.users.data);
});
}
}
