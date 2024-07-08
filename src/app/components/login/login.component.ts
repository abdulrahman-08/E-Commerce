import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private _AuthService:AuthService,private _Router:Router,private _FormBuilder:FormBuilder){}
  loginform:FormGroup=this._FormBuilder.group({
    email: [null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]]
  })

  mserror:string=''
  spincheak:boolean=false
  setlogin():void{
  if (this.loginform.valid) {
    this.spincheak=true
    this._AuthService.signupApi(this.loginform.value).subscribe({
      next:(Response)=>{
        localStorage.setItem('eToken',Response.token)
        this._AuthService.saveUserData()
        this._Router.navigate(['/home'])  
      this.spincheak=false
      
      }, error:(err:HttpErrorResponse)=>{
        this.spincheak=false
        this.mserror= err.error.message
      }
    })
  }
  else{
    this.loginform.markAllAsTouched()
  }
  }
}
