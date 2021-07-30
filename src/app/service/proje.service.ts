import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Proje } from '../model/proje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjeService {
  apiUrl = "http://localhost:8080/proje/getAll";

  constructor(private httpClient : HttpClient) { }

  getProjes() : Observable<Proje[]>{
    return this.httpClient.get<Proje[]>(this.apiUrl);
  }
}
