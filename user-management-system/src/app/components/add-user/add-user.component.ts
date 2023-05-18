import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
constructor(private _userService:UserService){}
userForm = new FormGroup({
  name: new FormControl(),
  email: new FormControl(),
  phone: new FormControl(),
  bio: new FormControl(),
})

submitUser(){
  const user:User = {
    name: this.userForm?.get('name')?.value,
    email: this.userForm?.get('email')?.value,
    phone: this.userForm?.get('phone')?.value,
    bio: this.userForm?.get('bio')?.value,
  }
  this._userService.submitUser(user).subscribe(data=> console.log(data))
}
}
