import { ItemDespesa } from 'src/app/models/itemDespesa';
import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDespesaService {
 

  private baseUrl = "http://localhost:5000/api/itemDespesa";

  constructor(private http: HttpClient) { }

  list(): Observable<ItemDespesa[]> {
    return this.http.get<ItemDespesa[]>(`${this.baseUrl}/list `);
  }

  create(itemDespesa: ItemDespesa): Observable<ItemDespesa> {
    return this.http.post<ItemDespesa>(`${this.baseUrl}/create`, itemDespesa);
  }

  delete(nome: string): Observable<ItemDespesa> {
    return this.http.delete<ItemDespesa>(`${this.baseUrl}/delete/${nome}`);
  }

  find(id: Number): Observable<ItemDespesa> {
    return this.http.get<ItemDespesa>(`${this.baseUrl}/getbyid/${id}`);
  }
  
  update(itemDespesa: ItemDespesa): Observable<ItemDespesa> {
    return this.http.put<ItemDespesa>(`${this.baseUrl}/update`, itemDespesa);
  }
}
