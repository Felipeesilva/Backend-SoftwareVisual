import { Administrativo } from './../models/administrativo';
import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrativoService {
 

  private baseUrl = "http://localhost:5000/api/administrativo";

  constructor(private http: HttpClient) { }

  list(): Observable<Administrativo[]> {
    return this.http.get<Administrativo[]>(`${this.baseUrl}/list `);
  }

  create(administrativo: Administrativo): Observable<Administrativo> {
    return this.http.post<Administrativo>(`${this.baseUrl}/create`, administrativo);
  }

  delete(responsavel: string): Observable<Administrativo> {
    return this.http.delete<Administrativo>(`${this.baseUrl}/delete/${responsavel}`);
  }
  update(administrativo: Administrativo): Observable<Administrativo> {
    return this.http.put<Administrativo>(`${this.baseUrl}/update`, administrativo);
  }
}
