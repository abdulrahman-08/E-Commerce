import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/shared/interfaces/brands';
import { EcomDataService } from 'src/app/shared/services/ecom-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
constructor(private _EcomDataService:EcomDataService){}
brandsdata:Brands[]=[]
onebrand:Brands={} as Brands
onebrandbolan:boolean=false
ngOnInit(): void {
    this._EcomDataService.getAllBrands().subscribe({
    next:(Response)=>{
    this.brandsdata=Response.data
    console.log(this.brandsdata)
    }
    })
}

}
