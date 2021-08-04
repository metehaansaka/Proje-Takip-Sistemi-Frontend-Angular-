import { Takim } from './../../model/takim';
import { TakimServiceService } from './../../service/takim-service.service';
import { ProjeService } from 'src/app/service/proje.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proje-form',
  templateUrl: './proje-form.component.html',
  styleUrls: ['./proje-form.component.css']
})
export class ProjeFormComponent implements OnInit {

  projeAddForm : FormGroup;
  errorMessage : string;
  takims : Takim[] = [];
  constructor(
    private formBuilder : FormBuilder, 
    private projeService : ProjeService,
    private toastrService : ToastrService,
    private takimService : TakimServiceService
    ) { }

  ngOnInit(): void {
    this.createProjeAddForm();
    this.getTakims();
  }

  createProjeAddForm(){
    this.projeAddForm = this.formBuilder.group({
      proje : ["",Validators.required],
      aciklama : ["",Validators.required],
      projeDurum : ["1",Validators.required],
      takimId : ["1",Validators.required]
    })
  }

  add(){
    if (this.projeAddForm.value){
      console.log(this.projeAddForm.value)
      let projeModel = Object.assign({},this.projeAddForm.value);
      this.projeService.add(projeModel).subscribe(response => {
        this.toastrService.success("Ekleme Başarılı");
      }, errorResponse => {
        this.errorMessage = "Ekleme Sırasında Bir Hata Oluştu";
      });
    }else{
      this.errorMessage = "Formu eksiksiz doldurunuz.";
    }
  }

  getTakims(){
    this.takimService.getTakims().subscribe(response => {
      this.takims = response;
    });
  }

}
