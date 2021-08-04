import { TakimServiceService } from './../service/takim-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Takim } from '../model/takim';
import { Proje } from '../model/proje';

@Pipe({
  name: 'takimByProje'
})
export class TakimByProjePipe implements PipeTransform {
  takims : string = "";
  constructor(private takimService : TakimServiceService){
  }

  transform(value : number): any {
    return value;    
  }

}
