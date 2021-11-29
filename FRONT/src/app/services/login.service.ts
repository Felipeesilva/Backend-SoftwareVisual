import { Usuario } from '../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Login {
 

  private baseUrl = "http://localhost:5000/api/usuario";

  constructor(private http: HttpClient) { }

  list(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.baseUrl}/list `);
  }

  create(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.baseUrl}/create`, login);
  }

}
