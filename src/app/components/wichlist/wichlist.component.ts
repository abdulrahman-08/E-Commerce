import { WishListService } from 'src/app/shared/services/wish-list.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wichlist',
  templateUrl: './wichlist.component.html',
  styleUrls: ['./wichlist.component.css']
})
export class WichlistComponent implements OnInit {
constructor(private _WishListService:WishListService , private _CartService:CartService,private _ToastrService:ToastrService){}
cartitem:any={} 
searchvalue:string=''
wishList:string[]=[]
ngOnInit(): void {
    
 this.getWishList()

}
removeProuWichList(id:string){
  this._WishListService.removeitem(id).subscribe({
    next:(response)=>{
      console.log(response);
      this.wishList=response.data
      const filterData=this.cartitem.filter((item:any)=>this.wishList.includes(item._id))
      this.cartitem=filterData
      this._ToastrService.success(response.message)
      this._WishListService.wishCount.next(response.data.length)
      
    }
  })}
getWishList(){
  this._WishListService.getUserCart().subscribe({
    next:(response)=>{
      this.cartitem=response.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
removeitem(id:string){
  this._WishListService.removeitem(id).subscribe({
    next:(response)=>{
      this.getWishList()
      console.log(response);
      
    }
  })
}
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
