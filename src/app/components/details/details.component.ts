import { product } from 'src/app/shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomDataService } from 'src/app/shared/services/ecom-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor( private _ActivatedRoute:ActivatedRoute,private _EcomDataService:EcomDataService,private _CartService:CartService,private _ToastrService:ToastrService){}
  productDetails:product= {} as product
  images:string[]=[]
  
 ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe({
    next:(parmeter)=>{
     let productid:any= parmeter.get('id')

     this._EcomDataService.getProductDetails(productid).subscribe({
      next:(response)=>{
        console.log(response.data)
        this.productDetails=response.data
        this.images=response.data.images
        console.log(this.images)
      }
     })
    }
   })
 }
 addbutton(id:string){
  this._CartService.addProductToCart(id).subscribe({
    next:(response)=>{
     console.log(response)
     this._ToastrService.success(response.message)
    },
    error:(err)=>{
      console.log(err) 
    }
  })
 }
 detailsoptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  nav: true
}
}
