import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$!:Observable<any>;
  constructor(private _userService: UserService){}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.users$= this._userService.getUsers()
  }

  deleteUser(id:number){
    this._userService.deleteUser(id).subscribe((data)=> {console.log("deleted");this.getAllUsers()});
    }
}
