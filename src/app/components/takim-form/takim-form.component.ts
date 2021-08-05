import { TakimServiceService } from './../../service/takim-service.service';
import { Proje } from './../../model/proje';
import { ProjeService } from 'src/app/service/proje.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-takim-form',
  templateUrl: './takim-form.component.html',
  styleUrls: ['./takim-form.component.css'],
})
export class TakimFormComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  errorMessage: string = '';
  takimForm: FormGroup;
  projes: Proje[] = [];
  updateForm : number;
  constructor(
    private formBuilder: FormBuilder,
    private projeService: ProjeService,
    private takimService : TakimServiceService,
    private toastrService : ToastrService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if(param["takimId"]){
        this.updateForm = param["takimId"];
        this.createTakimUpdateForm(param["takimId"]);
      }else{
        this.createTakimAddForm();
      }
    })
    this.getProjes();
  }

  createTakimAddForm() {
    this.takimForm = this.formBuilder.group({
      takim: ['', Validators.required],
      aciklama: ['', Validators.required]
    });
  }

  createTakimUpdateForm(value : number){
    this.takimService.getTakim(value).subscribe(respone => {
      this.takimForm = this.formBuilder.group({
        id : [respone.id],
        takim : [respone.takim,Validators.required],
        aciklama : [respone.aciklama, Validators.required]
      })
    });
  }

  getProjes() {
    this.projeService.getProjes().subscribe((response) => {
      this.projes = response;
    });
  }

  add() {
    if (this.takimForm.value){
      let takimModel = Object.assign({},this.takimForm.value);
      this.takimService.add(takimModel).subscribe(response => {
        this.toastrService.success("Ekleme Başarılı");
      }, errorResponse => {
        this.errorMessage = "Ekleme Sırasında Bir Hata Oluştu";
      });
    }else{
      this.errorMessage = "Formu eksiksiz doldurunuz.";
    }
  }

  update(){
    if(this.takimForm.valid){
      let takimModel = Object.assign({},this.takimForm.value);
      this.takimService.update(takimModel).subscribe(response => {
        this.toastrService.success("Güncelleme Başarılı");  
      },errorResponse => {
        this.toastrService.error("Güncelleme Başarısız");
      });
    }else{
      this.errorMessage = "Formu eksiksiz doldurunuz";
    }
  }
}
