import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

constructor(private userService:UserService) { }


ngOnInit(): void {
this.getAllUser();
  
}

userList:any;
  getAllUser(){
this.userService.getAllUsers().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.userList=res.data ;
  },
  error:(err:any)=>{
console.log(err);
  },
  complete:()=>{
console.log("Completed");
  }
})
  }
}
