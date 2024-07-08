import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient, private _Router:Router) {}
  saveuserdata:any;

  logout(){
    localStorage.removeItem('eToken')
    this._Router.navigate(['/login'])
  }
  saveUserData(){
  if (   localStorage.getItem('eToken')!=null  ) {
    let encodetoken:any= localStorage.getItem('eToken')
    let decodetoken= jwtDecode(encodetoken)
    this.saveuserdata=decodetoken
    

  }   
  }

  setRegister(userData:object):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)
  }

  signupApi(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
  }
  changePassword(userData:object):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',userData)
  }
  changeUserData(userData:object):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/',userData)
  }
  forgetpassword(email:object):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',email)
  }
  resetCode(code:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',code)
  }
  setNewData(newData:object){
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',newData)
  }
}
