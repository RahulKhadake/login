import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginSer:LoginService){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  router=inject(Router);

  userObj={
    username:'',
     password:''
  }

  login(){
       if(this.userObj.username=='admin'&& this.userObj.password=='admin'){
         alert('Login Success');
         this.router.navigateByUrl('navbar');
  }
  else{
    alert('Login Failed');
  }
}

LOgin(){
  debugger
  if(this.loginForm.value.username=='admin'&& this.loginForm.value.password=='admin'){
    alert('Login Success');
    // this.router.navigateByUrl('navbar');
    console.log("Checking",this.loginForm.value);
    this.router.navigate(['/navbar']);
  }
  else{
    alert('Login Failed gg');
  }
}

LoginAPi(){
  
    this.loginSer.login(this.loginForm.value).subscribe({
      next:(res:any)=>{
        if(res.result){
          alert('Login Success');
          sessionStorage.setItem('user data',JSON.stringify(res.data));
          this.router.navigateByUrl('navbar');
        }else{
          if(res.message){
            alert(res.message);
        }
      }
      
    },
    error:(err:any)=>{
      alert('Something went wrong');
    },
    complete:() =>{
      console.log('Completed');
    }
  });
}
}
