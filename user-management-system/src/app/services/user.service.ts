import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000/users"
  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get(this.url);
  }

  getUserById(id:number){
    return this._http.get(`${this.url}/${id}`)
  }

  submitUser(obj:User){
    return this._http.post<User>(this.url,obj);
  }

}
