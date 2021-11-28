import { Pedido } from 'src/app/models/pedido';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.css']
})
export class CadastrarPedidoComponent implements OnInit {

  id!: number;
  destino!: string;
  dataPartida!: string;
  dataRetorno!: string;
  finalidade!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: PedidoService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let pedido: Pedido = {
      destino:this.destino,
      dataPartida: this.dataPartida,
      dataRetorno: this.dataRetorno,
      finalidade: this.finalidade,
      criadoem!: this.criadoEm
    };
    this.service.create(pedido).subscribe((pedido) => {
      console.log(pedido);
      this.router.navigate(["pedido/listar"]);
    });
  }
}
