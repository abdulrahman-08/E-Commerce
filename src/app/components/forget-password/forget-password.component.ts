import { authGuard } from './../../shared/guards/auth.guard';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
constructor(private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router){}
spincheak:boolean=false
apierror:string=''
forget_form:FormGroup=this._FormBuilder.group({
  email:[null,[Validators.required,Validators.email]]
})

sendEmail(){
  if(this.forget_form.valid){
    this.spincheak=true
    this._AuthService.forgetpassword(this.forget_form.value).subscribe({
      next:(response)=>{
        this._Router.navigate(['/verify-code']) 
        this.spincheak=false
      },error:(err)=>{
        this.spincheak=false
        console.log(err)
        this.apierror=err.error.message

      }
    })
  }
  else{
    this.forget_form.markAllAsTouched()
  }
  
}
}
