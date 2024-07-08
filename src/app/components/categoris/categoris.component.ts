import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/shared/interfaces/brands';
import { EcomDataService } from 'src/app/shared/services/ecom-data.service';

@Component({
  selector: 'app-categoris',
  templateUrl: './categoris.component.html',
  styleUrls: ['./categoris.component.css']
})
export class CategorisComponent implements OnInit {
  constructor(private _EcomDataService:EcomDataService){}
  brandsdata:Brands[]=[]

  ngOnInit(): void {
    this._EcomDataService.getAllcategories().subscribe({
      next:(Response)=>{
      this.brandsdata=Response.data
      console.log(this.brandsdata)
      }
      })
  }
  

}
