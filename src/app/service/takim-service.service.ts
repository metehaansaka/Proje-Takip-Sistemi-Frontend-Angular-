import { Takim } from './../model/takim';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TakimServiceService {
  apiUrl = "http://localhost:8080/takim/";

  constructor(private httpClient : HttpClient) { }

  getTakims() : Observable<Takim[]>{
    let path = this.apiUrl + "getAll";
    return this.httpClient.get<Takim[]>(path);
  }

  getTakim(id:number): Observable<Takim>{
    let path = this.apiUrl + "get?id="+id;
    return this.httpClient.get<Takim>(path);
  }

  add(takim : Takim){
    let path = this.apiUrl + "add";
    return this.httpClient.post(path,takim);
  }

  update(takim : Takim){
    return this.httpClient.put(this.apiUrl + "update",takim);
  }

  delete(value : number){
    return this.httpClient.delete(this.apiUrl + "delete?id=" + value);
  }
}
