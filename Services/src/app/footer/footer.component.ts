import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  memberData=[
    {name:'Anil',email:'anil@test.com'},
    {name:'Sam',email:'sam@test.com'},
    {name:'Bhaskar',email:'bhaskar@test.com'},
    {name:'Peter',email:'peter@test.com'}
  ]
}
