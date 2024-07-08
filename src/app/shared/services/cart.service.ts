import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
cartNum:BehaviorSubject<number>=new BehaviorSubject(0)
addProductToCart(productid:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{"productId":productid})
    
  }
removeitem(productid:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`)
}
  getUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart')
  }

  updateCount(id:string,count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      "count": count
    })
  }

  clearuserCart():Observable<any>{
    return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart')
  }
}
