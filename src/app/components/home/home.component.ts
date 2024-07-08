import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from 'src/app/shared/interfaces/categorie';
import { product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomDataService } from 'src/app/shared/services/ecom-data.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor(private _EcomDataService:EcomDataService,private _CartService:CartService,private _ToastrService:ToastrService,private _WishListService:WishListService){}
  products:product[]= []
  caregories:Categorie[]=[]
  wishList:string[]=[]
  searchvalue:string=''
  itemnum:number=0
  
ngOnInit(): void {
    this._EcomDataService.getAllProduct().subscribe({
      next:(response)=>{
        this.products=response.data
      },
      error:(err)=>{
       
      }
    })
    this._EcomDataService.getAllcategories().subscribe({
      next:(response)=>{
        this.caregories=response.data
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
      this._CartService.cartNum.next(response.numOfCartItems)
      this._ToastrService.success(response.message);
      this.itemnum=response.numOfCartItems
    }
  })
}
customOptionscateg: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplaySpeed:1000,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: true
}
mainslide: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplaySpeed:1000,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  nav: true
}
}
