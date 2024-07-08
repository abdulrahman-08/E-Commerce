import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router){}
  spincheak:boolean=false
  apierror:string=''
  changePassword_form:FormGroup=this._FormBuilder.group({
    currentPassword:[null,[Validators.required]],
    password:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
    rePassword:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]]
  })
  sendData(){
    this.spincheak=true
    this._AuthService.changePassword(this.changePassword_form.value).subscribe({
      next:(response)=>{
      console.log(response)
      this.spincheak=false
      this._AuthService.logout()

      },
      error:(err)=>{
        console.log(err);
        this.spincheak=false
        this.apierror=err.message
      }
    })
  }
}
