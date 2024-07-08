import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private _HttpClient:HttpClient) { }

  createCachOrder(id:string,userdata:object):Observable<any>{
return this._HttpClient.post(
  `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
{userdata}
)
  }
}
