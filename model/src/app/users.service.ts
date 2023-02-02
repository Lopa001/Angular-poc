import { Injectable } from '@angular/core';
import {dataType} from './user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

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
