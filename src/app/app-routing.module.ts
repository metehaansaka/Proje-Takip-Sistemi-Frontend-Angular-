import { GorevComponent } from './components/gorev/gorev.component';
import { ProjeComponent } from './components/proje/proje.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"projeler", component:ProjeComponent},
  {path:"gorevler",component:GorevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
