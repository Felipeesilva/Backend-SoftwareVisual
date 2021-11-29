import { Pedido } from 'src/app/models/pedido';
import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  private baseUrl = "http://localhost:5000/api/pedido";

  constructor(private http: HttpClient) { }

  list(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/list `);
  }

  create(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.baseUrl}/create`, pedido);
  }

  find(id: Number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseUrl}/getbyid/${id}`);
  }

  findByPedidoId(pedidoId: Number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/getbypedidoId/${pedidoId}`);
  }
  
  delete(id: number): Observable<Pedido> {
    return this.http.delete<Pedido>(`${this.baseUrl}/delete/${id}`);
  }
  update(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.baseUrl}/update`, pedido);
  }
}
