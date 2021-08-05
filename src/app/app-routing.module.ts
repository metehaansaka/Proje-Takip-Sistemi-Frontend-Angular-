import { TakimFormComponent } from './components/takim-form/takim-form.component';
import { ProjeFormComponent } from './components/proje-form/proje-form.component';
import { GorevComponent } from './components/gorev/gorev.component';
import { ProjeComponent } from './components/proje/proje.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakimComponent } from './components/takim/takim.component';

const routes: Routes = [
  {path:"projeler", component:ProjeComponent},
  {path:"gorevler",component:GorevComponent},
  {path:"gorevler/proje/:projeId", component:GorevComponent},
  {path:"projeler/add", component:ProjeFormComponent},
  {path:"projeler/add/:projeId", component:ProjeFormComponent},
  {path:"takimlar",component:TakimComponent},
  {path:"takimlar/add",component:TakimFormComponent},
  {path:"takimlar/add/:takimId",component:TakimFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
