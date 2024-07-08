import { Pipe, PipeTransform } from '@angular/core';
import { product } from './shared/interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:product[],term:string): product[] {
    return items.filter((item)=>
    item.title.toLowerCase().includes(term.toLowerCase())
    ) ;
  }

}
