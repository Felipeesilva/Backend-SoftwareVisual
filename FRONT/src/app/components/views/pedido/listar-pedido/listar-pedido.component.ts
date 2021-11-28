import { Pedido } from 'src/app/models/pedido';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {

  pedidos: Pedido[] = [];
  
  constructor(private service: PedidoService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe((pedido: Pedido[]) => {
        this.pedidos = pedido;  
        console.log(pedido);
    });
  }

  deletar(nome: string):void{
    console.log(this.deletar);
    this.service.delete(nome).subscribe((nome: any) =>{
      console.log(nome);
      this.router.navigate(["pedido/listar"]);
      this.ngOnInit
      this.service.list().subscribe((pedidos: Pedido[]) => {
        this.pedidos = pedidos;
        console.log(this.pedidos);
      });
    });
  }

}
