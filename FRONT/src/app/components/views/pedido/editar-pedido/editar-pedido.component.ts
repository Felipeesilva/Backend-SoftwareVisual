import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {
  
  id!: number;
  destino!: string;
  dataPartida!: string;
  dataRetorno!: string;
  finalidade!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: PedidoService) {}

  ngOnInit(): void {}

  editar(): void {
      let pedido: Pedido = {
        id: this.id,  
        destino: this.destino,
        dataPartida: this.dataPartida,
        dataRetorno: this.dataRetorno,
        finalidade: this.finalidade,
        criadoem: this.criadoEm
      };
      this.service.update(pedido).subscribe((pedido: any) => {
          console.log(pedido);
          this.router.navigate(["pedido/listar"]);
      });
  }
}