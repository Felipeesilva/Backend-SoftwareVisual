import { Despesa } from './../models/despesa';
import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
 

  private baseUrl = "http://localhost:5000/api/despesa";

  constructor(private http: HttpClient) { }

  list(): Observable<Despesa[]> {
    return this.http.get<[]>(`${this.baseUrl}/list `);
  }

  create(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(`${this.baseUrl}/create`, despesa);
  }

  delete(id: number): Observable<Despesa> {
    return this.http.delete<Despesa>(`${this.baseUrl}/delete/${id}`);
  }

  update(despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(`${this.baseUrl}/update`, despesa);
  }
}
