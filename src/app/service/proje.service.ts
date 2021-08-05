import { Proje } from './../model/proje';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjeService {
  apiUrl = "http://localhost:8080/proje/";

  constructor(private httpClient : HttpClient) { }

  getProjes() : Observable<Proje[]>{
    let path = this.apiUrl + "getAll";
    return this.httpClient.get<Proje[]>(path);
  }

  getProje(id : number): Observable<Proje>{
    let path = this.apiUrl + "get?id=" + id;
    return this.httpClient.get<Proje>(path);
  }

  add(proje:Proje){
    return this.httpClient.post(this.apiUrl + "add",proje);
  }

  update(proje:Proje){
    return this.httpClient.put(this.apiUrl+"update",proje);
  }

  delete(id : number){
    return this.httpClient.delete(this.apiUrl+"delete?id="+id);
  }
}
