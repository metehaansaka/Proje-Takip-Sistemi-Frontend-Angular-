import { Takim } from './../../model/takim';
import { TakimServiceService } from './../../service/takim-service.service';
import { ProjeService } from 'src/app/service/proje.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proje-form',
  templateUrl: './proje-form.component.html',
  styleUrls: ['./proje-form.component.css']
})
export class ProjeFormComponent implements OnInit {

  projeForm : FormGroup;
  errorMessage : string;
  updateForm : number;
  takims : Takim[] = [];
  constructor(
    private formBuilder : FormBuilder, 
    private projeService : ProjeService,
    private toastrService : ToastrService,
    private takimService : TakimServiceService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if(param["projeId"]){
        this.updateForm = param["projeId"];
        this.createProjeUpdateForm(param["projeId"]);
      }else{
        this.createProjeAddForm();
      }
    });
    this.getTakims();
  }

  createProjeAddForm(){
    this.projeForm = this.formBuilder.group({
      proje : ["",Validators.required],
      aciklama : ["",Validators.required],
      projeDurum : ["1",Validators.required],
      takimId : ["1",Validators.required]
    })
  }

  createProjeUpdateForm(id : number){
    this.projeService.getProje(id).subscribe(response => {
      this.projeForm = this.formBuilder.group({
        id : [response.id],
        proje : [response.proje,Validators.required],
        aciklama : [response.aciklama,Validators.required],
        projeDurum : [response.projeDurum,Validators.required],
        takimId : [response.projeDurum, Validators.required]
      })
    });
  }

  add(){
    if (this.projeForm.value){
      let projeModel = Object.assign({},this.projeForm.value);
      this.projeService.add(projeModel).subscribe(response => {
        this.toastrService.success("Ekleme Başarılı");
      }, errorResponse => {
        this.errorMessage = "Ekleme Sırasında Bir Hata Oluştu";
      });
    }else{
      this.errorMessage = "Formu eksiksiz doldurunuz.";
    }
  }

  update(){
    if(this.projeForm.valid){
      let projeModel = Object.assign({},this.projeForm.value);
      this.projeService.update(projeModel).subscribe(response => {
        this.toastrService.success("Güncelleme Başarılı");
      }, errorResponse => {
        this.errorMessage = "Ekleme Sırasında Bir Hata Oluştu"
      })
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
