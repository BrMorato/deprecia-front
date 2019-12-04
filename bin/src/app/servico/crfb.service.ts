import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Crfb} from '../modelo/crfb.model';


const url = 'http://localhost:8080/classificacao/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CrfbService {

  constructor(private http: HttpClient) { }

  
  consultarCrfb(): Observable<Crfb[]>{
    return this.http.get<Crfb[]>(url);
  }

  consultarFcrfb(): Observable<Crfb[]>{
    const urlLocal = `${url}/familia`;

    return this.http.get<Crfb[]>(urlLocal);
  }

  consultarCrfbPorId(id:number): Observable<Crfb>{
    const urlLocal = `${url}/${id}`;

    return this.http.get<Crfb>(urlLocal);
  }
  
  adicionarCrfb(Crfb): Observable<Crfb>{
    const urlLocal = `${url}/`;
    return this.http.post<Crfb>(url, Crfb, httpOptions);
    
  }

  alterarCrfb(id, Crfb): Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put<Crfb>(urlLocal, Crfb, httpOptions);
  }

  excluirCrfb(id): Observable<Crfb>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Crfb>(urlLocal,  httpOptions);

  }
}
