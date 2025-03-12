import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive,NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  menuList:any={
    Customer:[
      {path:'Approved',Title:'Approved'},
      {path:'myApplication',Title:'My Application'},
    ],

    BankEmployee:[
      {path:'loanApplication',Title:'Loan Application'},
      {path:'customer',Title:'Customer'},
      {path:'changePassword',Title:'Change Password'},
       { path:'approvals',Title:'Approvals'}
    ]
    
}
loggedUserMunuList:any[]=[]
ngOnInit(): void {

   const loggData=sessionStorage.getItem('userlogin');
   if(loggData){
         const data=JSON.parse(loggData);
         console.log("Data",data);
         this.loggedUserMunuList=this.menuList[data.role];
   }
}
}
