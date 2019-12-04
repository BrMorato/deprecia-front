import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bem} from '../modelo/bem.model';
import {Crfb} from '../modelo/crfb.model'


const url = 'http://localhost:8080/bens/';
const urlCrfb = 'http://localhost:8080/classificacao/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ManterbemService {

  constructor(private http: HttpClient) { }

  
  consultarBem(): Observable<Bem[]>{
    return this.http.get<Bem[]>(url);
  }


  consultarBemPorId(id:number): Observable<Bem>{
    const urlLocal = `${url}/${id}`;

    return this.http.get<Bem>(urlLocal);
  }

  consultarCrfbPorId(id:number): Observable<Crfb>{
    const urlLocal = `${urlCrfb}/${id}`;

    return this.http.get<Crfb>(urlLocal);
  }

  consultarCrfb(): Observable<Crfb[]>{

    return this.http.get<Crfb[]>(urlCrfb);
  }
  
  adicionarBem(Bem): Observable<Bem>{
    const urlLocal = `${url}/`;
    return this.http.post<Bem>(url, Bem, httpOptions);
    
  }

  alterarBem(id, Bem): Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put<Bem>(urlLocal, Bem, httpOptions);
  }

  excluirBem(id): Observable<Bem>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Bem>(urlLocal,  httpOptions);

  }
}
