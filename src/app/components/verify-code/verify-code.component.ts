import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {
constructor(private _AuthService:AuthService, private _FormBuilder:FormBuilder, private _Router:Router){}

code_Form:FormGroup=this._FormBuilder.group({
  resetCode:[null,[Validators.required]]
})
spincheak:boolean=false
apierror:string=''

sendcode(){
  if(this.code_Form.valid){
    this.spincheak=true
    this._AuthService.resetCode(this.code_Form.value).subscribe({
      next:()=>{
        this.spincheak=false
        this._Router.navigate(['/set-new-data'])
      },error:(err)=>{
        this.spincheak=false
        this.apierror=err.error.message
      }
    })
  }
  else(
    this.code_Form.markAllAsTouched()
  )
}
}
