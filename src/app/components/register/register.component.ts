import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router, private _FormBuilder:FormBuilder){}

  registerForm:FormGroup=this._FormBuilder.group({
    name:[null,[Validators.required,Validators.maxLength(20),Validators.minLength(3)]],
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
    rePassword:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
    phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],

  })
  mserror:string=''
  spincheak:boolean=false
  
  handelForm():void{
   if(this.registerForm.valid){
    this.spincheak=true
    console.log(this.registerForm.value)
    this._AuthService.setRegister(this.registerForm.value).subscribe({
      next:(Response)=>{
        this.spincheak=false

        console.log(Response)
        this._Router.navigate(['/login'])
      },
      error:(err:HttpErrorResponse)=>{
        this.spincheak=false
        console.log(err)
       this.mserror= err.error.message
      }
    })
   }
   else{
    this.registerForm.markAllAsTouched();
   }
  }
}
