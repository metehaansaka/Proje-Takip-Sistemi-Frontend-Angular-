import { ProjeFormComponent } from './components/proje-form/proje-form.component';
import { GorevComponent } from './components/gorev/gorev.component';
import { ProjeComponent } from './components/proje/proje.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"projeler", component:ProjeComponent},
  {path:"gorevler",component:GorevComponent},
  {path:"gorevler/proje/:projeId", component:GorevComponent},
  {path:"projeler/add", component:ProjeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
