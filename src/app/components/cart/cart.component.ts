import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService,private _Router:Router){}
cartitem:any={} 
ngOnInit(): void {
    
  this._CartService.getUserCart().subscribe({
    next:(response)=>{
      this.cartitem=response.data
    },
    error:(err)=>{
      console.log(err)
    }
  })

}
removeitem(id:string){
  this._CartService.removeitem(id).subscribe({
    next:(response)=>{
      this.cartitem=response.data
      console.log(response);
      
      this._CartService.cartNum.next(response.numOfCartItems)
    }
  })

}
updatecount(id:string,count:number){

  this._CartService.updateCount(id,count).subscribe({
    next:(Response)=>{
      this.cartitem=Response.data
    }
  })
}
clearCartUser(){
  this._CartService.clearuserCart().subscribe({
    next:(response)=>{
      console.log(response);
      
      this._Router.navigate(['/home'])
      this._CartService.cartNum.next(0)

    }
  })
}
}
