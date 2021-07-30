import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjeComponent } from './components/proje/proje.component';
import { NaviComponent } from './components/navi/navi.component';
import { GorevComponent } from './components/gorev/gorev.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjeComponent,
    NaviComponent,
    GorevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
