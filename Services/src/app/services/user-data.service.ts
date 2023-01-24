import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() {}
    users()
    {
      return[
        {name:'Anil',age:'28',email:'anil@test.com'},
        {name:'Peter',age:'25',email:'peter@test.com'},
        {name:'Bhasker',age:'24',email:'bhasker@test.com'}
      ]
    }
   
}
