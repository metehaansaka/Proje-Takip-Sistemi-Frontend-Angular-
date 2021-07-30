import { Component, OnInit } from '@angular/core';
import { Proje } from 'src/app/model/proje';
import { ProjeService } from 'src/app/service/proje.service';

@Component({
  selector: 'app-proje',
  templateUrl: './proje.component.html',
  styleUrls: ['./proje.component.css']
})
export class ProjeComponent implements OnInit {
  projes : Proje[] = [];

  constructor(private projeService : ProjeService) { }   

  ngOnInit(): void {
    this.getProjes();
  }

  getProjes(){
    this.projeService.getProjes().subscribe(response => {
      this.projes = response;
    });
  }

}

