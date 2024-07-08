import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomDataService } from 'src/app/shared/services/ecom-data.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:product[]= []
  searchvalue:string=''
  wishList:string[]=[]


  constructor(private _EcomDataService:EcomDataService,private _ToastrService:ToastrService,private _CartService:CartService,private _WishListService:WishListService){}
  ngOnInit(): void {
    this._EcomDataService.getAllProduct().subscribe({
      next:(response)=>{
        this.products=response.data
      },
      error:(err)=>{
       
      }
    })
    this._WishListService.getUserCart().subscribe({
      next:(response)=>{
        console.log(response);
        const newData=response.data.map((item:any)=>item._id)
        this.wishList=newData
      }
    })
  }
  addToWichList(id:string){
    this._WishListService.addToWishList(id).subscribe({
      next:(response)=>{
        console.log(response);        
        this.wishList=response.data
        this._ToastrService.success(response.message)
        this._WishListService.wishCount.next(response.data.length)
        
      }
    })
    }
    removeProuWichList(id:string){
      this._WishListService.removeitem(id).subscribe({
        next:(response)=>{
          console.log(response);
        this.wishList=response.data
          this._ToastrService.success(response.message)
          this._WishListService.wishCount.next(response.data.length)

        }
      })}
  addbutton(id:string){
    this._CartService.addProductToCart(id).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message);
        this._CartService.cartNum.next(response.numOfCartItems)
      }
    })
  }

}
