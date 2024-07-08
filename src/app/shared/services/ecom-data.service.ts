import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomDataService {

  constructor(private _HttpClient:HttpClient) { }


  getAllProduct():Observable<any>{

    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getProductDetails(id:string):Observable<any>{
   return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getAllcategories():Observable<any>{

    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  getAllBrands():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
  }
  
Getspecificbrand(id:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
}
}
