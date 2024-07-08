import { Component } from '@angular/core';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent {
  UpToTop(){
    scrollTo(0,0)
  }
}
