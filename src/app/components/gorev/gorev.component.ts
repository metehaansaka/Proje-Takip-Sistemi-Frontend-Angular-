import { ProjeService } from 'src/app/service/proje.service';
import { GorevService } from './../../service/gorev.service';
import { Gorev } from './../../model/gorev';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-gorev',
  templateUrl: './gorev.component.html',
  styleUrls: ['./gorev.component.css']
})
export class GorevComponent implements OnInit {

  
  gorevs : Gorev[] = [];
  
  constructor(private gorevService : GorevService, private datepipe : DatePipe, private projeService:ProjeService) { }

  ngOnInit(): void {
    this.getGorevs();
  }

  getGorevs(){
    this.gorevService.getGorevs().subscribe(response => {
      this.gorevs = response;
      this.gorevs.forEach(gorev => {
        gorev.baslamaTarihi = this.datepipe.transform(gorev.baslamaTarihi, 'dd/MM/yy')!;
        this.projeService.getProje(gorev.projeId).subscribe(response => {
          gorev.proje = response.proje;
        })
      });
    })
  }

}
