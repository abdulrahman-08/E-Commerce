import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
   wishCount:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient) { }
  getUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')
  }
  addToWishList(id:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
      "productId": id
    });

  }
  removeitem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }
}
