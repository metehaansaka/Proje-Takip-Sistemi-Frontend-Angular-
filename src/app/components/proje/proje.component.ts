import { Takim } from './../../model/takim';
import { TakimServiceService } from './../../service/takim-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proje } from 'src/app/model/proje';
import { ProjeService } from 'src/app/service/proje.service';

@Component({
  selector: 'app-proje',
  templateUrl: './proje.component.html',
  styleUrls: ['./proje.component.css']
})
export class ProjeComponent implements OnInit {
  projes : Proje[] = [];
  ara = "";
  id = 1;
  constructor(private projeService : ProjeService, private takimService : TakimServiceService, private toastrService:ToastrService) { }   

  ngOnInit(): void {
    this.getProjes();
    
  }
  takims : Takim[] = [];
  getProjes(){
    this.projeService.getProjes().subscribe(response => {
      this.takimService.getTakims().subscribe(response => {
        this.takims = response;
      });
      this.projes = response;
    });
    
  }

  getTakim(value : number) : any{
    let str = this.takims.filter(tk =>  tk.id == value);
    console.log(str);
    if (str.length>0){

      return str[0].takim;
    }
  }

}

