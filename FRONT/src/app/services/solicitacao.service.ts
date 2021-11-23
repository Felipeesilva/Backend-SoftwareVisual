import { Solicitacao } from './../models/solicitacao';
import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {
  
  private baseUrl = "http://localhost:5000/api/solicitacao";

  constructor(private http: HttpClient) { }

  list(): Observable<Solicitacao[]> {
    return this.http.get<Solicitacao[]>(`${this.baseUrl}/list `);
  }

  create(solicitacao: Solicitacao): Observable<Solicitacao> {
    return this.http.post<Solicitacao>(`${this.baseUrl}/create`, solicitacao);
  }

  find(id: Number): Observable<Solicitacao> {
    return this.http.get<Solicitacao>(`${this.baseUrl}/getbyid/${id}`);
  }

  findByFuncionarioId(funcionarioId: Number): Observable<Solicitacao[]> {
    return this.http.get<Solicitacao[]>(`${this.baseUrl}/getbyfuncionarioid/${funcionarioId}`);
  }
  
  delete(id: number): Observable<Solicitacao> {
    return this.http.delete<Solicitacao>(`${this.baseUrl}/delete/${id}`);
  }
  update(solicitacao: Solicitacao): Observable<Solicitacao> {
    return this.http.put<Solicitacao>(`${this.baseUrl}/update`, solicitacao);
  }
}
