import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
url="https://dummy.restapiexample.com/api/v1/employees";
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url);
  }
}
