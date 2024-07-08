import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit {
  constructor( private _AuthService:AuthService,private _Renderer2:Renderer2,private _CartService:CartService ,private _WishListService:WishListService){}
  cartCount:number=0
  wishCount:number=0
  @ViewChild('navBar')navElementRef!:ElementRef
  @HostListener('window:scroll')
  onScroll():void{
if(scrollY>500){
  this._Renderer2.addClass(this.navElementRef.nativeElement,'px-5')
  this._Renderer2.addClass(this.navElementRef.nativeElement,'shadow')


}
else{
  this._Renderer2.removeClass(this.navElementRef.nativeElement,'px-5')
  this._Renderer2.removeClass(this.navElementRef.nativeElement,'shadow')

}
  }
  ngOnInit(): void {
      this._CartService.cartNum.subscribe({
        next:(data)=>{
          this.cartCount=data
        }
      })

      this._CartService.getUserCart().subscribe({
        next:(response)=>{
          this._CartService.cartNum.next(response.numOfCartItems)
        }
      })
      this._WishListService.wishCount.subscribe({
        next:(data)=>{
          this.wishCount=data
        }
      })

      this._WishListService.getUserCart().subscribe({
        next:(response)=>{
          this._WishListService.wishCount.next(response.count)
        }
      })
  }
  logout(){
    this._AuthService.logout();
  }

}
