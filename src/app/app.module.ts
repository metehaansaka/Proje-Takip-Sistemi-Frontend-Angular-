import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjeComponent } from './components/proje/proje.component';
import { NaviComponent } from './components/navi/navi.component';
import { GorevComponent } from './components/gorev/gorev.component';
import { DatePipe } from '@angular/common';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProjeFormComponent } from './components/proje-form/proje-form.component';
import { TakimComponent } from './components/takim/takim.component';
import {MatSelectModule} from "@angular/material/select";
import {NgxMatSelectModule} from "ngx-mat-select";
import { TakimFormComponent } from './components/takim-form/takim-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjeComponent,
    NaviComponent,
    GorevComponent,
    SearchPipePipe,
    ProjeFormComponent,
    TakimComponent,
    TakimFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    NgxMatSelectModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
