import { Gorev } from './../model/gorev';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GorevService {
  apiUrl = "http://localhost:8080/gorev/";

  constructor(private httpClient : HttpClient) { }

  getGorevs() : Observable<Gorev[]>{
    let path = this.apiUrl + "getAll";
    return this.httpClient.get<Gorev[]>(path);
  }

  getGorevsByProje(id:number) : Observable<Gorev[]>{
    let path = this.apiUrl + "getAllByProje?id=" + id;
    return this.httpClient.get<Gorev[]>(path);
  }
}
