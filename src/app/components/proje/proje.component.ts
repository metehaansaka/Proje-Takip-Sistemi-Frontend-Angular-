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
  constructor(private projeService : ProjeService, private toastrService:ToastrService) { }   

  ngOnInit(): void {
    this.getProjes();
    
  }


  getProjes(){
    this.projeService.getProjes().subscribe(response => {
      this.projes = response;
    });
  }

}

