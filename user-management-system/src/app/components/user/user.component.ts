import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  userId!:number;
  userObject:any;
  constructor(private ar:ActivatedRoute, private _userSrevice:UserService){}
  ngOnInit(): void {
    this.userId = this.ar.snapshot.params['id'];
    this._userSrevice.getUserById(this.userId).subscribe(
      (data)=>{ 
        this.userObject = data
      }
    )
}
}
