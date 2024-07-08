import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-update-user-data',
  templateUrl: './update-user-data.component.html',
  styleUrls: ['./update-user-data.component.css']
})
export class UpdateUserDataComponent {
  constructor(private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router){}
  spincheak:boolean=false
  apierror:string=''
  updateUserData_form:FormGroup=this._FormBuilder.group({
    name:[null,[Validators.required,Validators.maxLength(20),Validators.minLength(3)]],
    email:[null,[Validators.required,Validators.email]],
    phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
  })
  sendData(){
    this.spincheak=true
    this._AuthService.changeUserData(this.updateUserData_form.value).subscribe({
      next:(response)=>{
      console.log(response)
      this.spincheak=false
      this._AuthService.logout()
      },
      error:(err)=>{
        console.log(err);
        this.spincheak=false
        this.apierror=err.error.errors.msg
      }
    })
  }
}
