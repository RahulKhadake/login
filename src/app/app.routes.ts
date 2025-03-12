import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SignalComponent } from './signal/signal.component';
import { UserListComponent } from './user-list/user-list.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerComponent } from './customer/customer.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { MyApplicationComponent } from './my-application/my-application.component';
import { AprovedApplicationComponent } from './aproved-application/aproved-application.component';

export const routes: Routes = [

    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'navbar',component:NavbarComponent
    },
    {
        path:'Signal',component:SignalComponent
    },
    {
        path:'userList',component:UserListComponent
    },
    {
        path:'Dropdown',component:DropdownComponent
    },
    
    {
        path:'approvals',component:ApprovalsComponent
    },
    
    {
        path:'changePassword',component:ChangePasswordComponent
    },
    {
        path:'customer',component:CustomerComponent
    },
    
    {
        path:'loanApplication',component:LoanApplicationComponent
    },
    

    
    {
        path:'myApplication',component:MyApplicationComponent
    },
    {
        path:'Approved',component:AprovedApplicationComponent
    },
];
