import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [

    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },{
        path:'navbar',component:NavbarComponent
    }
];
