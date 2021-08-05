import { TakimServiceService } from './../../service/takim-service.service';
import { Takim } from './../../model/takim';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-takim',
  templateUrl: './takim.component.html',
  styleUrls: ['./takim.component.css']
})
export class TakimComponent implements OnInit {

  ara:string = "";
  takimlar : Takim[] = [];
  constructor(private takimService : TakimServiceService, private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.getTakims();
  }

  getTakims(){
    this.takimService.getTakims().subscribe(response =>{
      this.takimlar = response;
    });
  }

  delete(value : number){
    this.takimService.delete(value).subscribe(response => {
      this.takimlar.forEach((element,index)=>{
        if(element.id==value) this.takimlar.splice(index,1);
      });
      this.toastrService.success("Silindi");
    });
  }

}
