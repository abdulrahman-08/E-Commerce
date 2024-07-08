import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-new-data',
  templateUrl: './set-new-data.component.html',
  styleUrls: ['./set-new-data.component.css']
})
export class SetNewDataComponent {
constructor(private _AuthService:AuthService, private _FormBuilder:FormBuilder, private _Router:Router){}
spincheak:boolean=false
apierror:string=''
newDataForm:FormGroup=this._FormBuilder.group({
  email:[null,[Validators.required,Validators.email]],
  newPassword:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]]
})

sendNewData(){
 if(this.newDataForm.valid){
  this.spincheak=true
  this._AuthService.setNewData(this.newDataForm.value).subscribe({
    next:()=>{
      this.spincheak=false
      this._Router.navigate(['/login'])
    },error:(err)=>{
      this.spincheak=false
      this.apierror=err.error.message
    }
  })
 }
}
}
