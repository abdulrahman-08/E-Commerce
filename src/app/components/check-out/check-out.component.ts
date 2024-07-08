import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  constructor(private _OrdersService:OrdersService, private _FormBuilder:FormBuilder,private _ActivatedRoute:ActivatedRoute){}
  checkOutForm:FormGroup=this._FormBuilder.group({
    Details:[null,[Validators.required]],
    Phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city:[null,[Validators.required]]
  })
  cartid:any=''
  ngOnInit(): void {
     this._ActivatedRoute.paramMap.subscribe({
        next:(response)=>{
          this.cartid=response.get('id')
        }
      })
  }
  pay(){
  this._OrdersService.createCachOrder(this.cartid,{"shippingAddress":this.checkOutForm.value}).subscribe({
    next:(response)=>{
      console.log(response)
      if(response.status=='success'){
        window.open(response.session.url,'_self')

      }
    }
  })
  }
}
