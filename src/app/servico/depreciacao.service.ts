import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bem} from '../modelo/bem.model';
import { Depreciacao } from '../modelo/depreciacao.model';

const url = 'http://localhost:8080/deprecia';
const urlBem = 'http://localhost:8080/bens';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DepreciacaoService { 

  constructor(private http: HttpClient) {  }



  consultarDepreciacao(): Observable<Depreciacao[]>{
    const urlLocal = `${url}/`;
    return this.http.get<Depreciacao[]>(url);
  }

  consultarBem(idBem:number): Observable<Bem>{
    const urlB = `${urlBem}/${idBem}`;
    return this.http.get<Bem>(urlB);
  }

  
  consultarDepreciacaoBem(idBem:number): Observable<Depreciacao[]>{
    const urlLocal = `${url}/${idBem}`;
    return this.http.get<Depreciacao[]>(urlLocal);
  }


  consultarDepreciacaoBemMes(id:number): Observable<Bem>{
    const urlLocal = `${url}/${id}`;

    return this.http.get<Bem>(urlLocal);
  }

  calcularDepreciacao(Depreciacao): Observable<Depreciacao>{
    const urlLocal = `${url}/`;
    return this.http.post<Depreciacao>(url, Depreciacao, httpOptions);
    
  }

 /* alterarBem(id, Bem): Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put<Bem>(urlLocal, Bem, httpOptions);
  }
  */

  excluirDepreciacao(id): Observable<Depreciacao>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Depreciacao>(urlLocal,  httpOptions);

  }
}

