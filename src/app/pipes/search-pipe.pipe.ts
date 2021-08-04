import { Proje } from './../model/proje';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(projes: Proje[], aranan: string): Proje[] {
    aranan = aranan?aranan.toLocaleLowerCase():"";
    return aranan?projes.filter((proje:Proje)=>proje.proje.toLocaleLowerCase().indexOf(aranan)!==-1):projes;
  }

}
