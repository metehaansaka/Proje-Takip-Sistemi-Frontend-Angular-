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
}
