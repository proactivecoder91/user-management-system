import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId!:number;
  userObject:any;
  constructor(private _userService:UserService,private ar:ActivatedRoute){}
  userForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    bio: new FormControl(),
  })

  ngOnInit(): void {
    this.userId = this.ar.snapshot.params['id'];
    this._userService.getUserById(this.userId).subscribe(
      (data)=>{ 
        this.userObject = data;
        const {name , email , id , phone , bio} = this.userObject ?? {};
        this.userForm.get('id')?.setValue(id)
        this.userForm.get('name')?.setValue(name)
        this.userForm.get('email')?.setValue(email)
        this.userForm.get('phone')?.setValue(phone)
        this.userForm.get('bio')?.setValue(bio)
      }
    )
  }

  editUser(){
    const user:User = {
      id: this.userForm?.get('id')?.value,
      name: this.userForm?.get('name')?.value,
      email: this.userForm?.get('email')?.value,
      phone: this.userForm?.get('phone')?.value,
      bio: this.userForm?.get('bio')?.value,
    }
    this._userService.editUser(user).subscribe(data=> console.log(data))
  }
}
