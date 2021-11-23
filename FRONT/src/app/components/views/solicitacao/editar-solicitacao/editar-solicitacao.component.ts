import { SolicitacaoService } from 'src/app/services/solicitacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitacao } from 'src/app/models/solicitacao';

@Component({
  selector: 'app-editar-solicitacao',
  templateUrl: './editar-solicitacao.component.html',
  styleUrls: ['./editar-solicitacao.component.css']
})

export class EditarSolicitacaoComponent implements OnInit {
  id!: number;
  destino!: string;
  dataPartida!: string;
  dataRetorno!: string;
  finalidade!: string;
  funcionarioid!: number;
  criadoEm!: string;

  constructor(private router: Router, private service: SolicitacaoService) {}

  ngOnInit(): void {}

  editar(): void {
      let solicitacao: Solicitacao = {
          id: this.id,
          destino: this.destino,
          dataPartida: this.dataPartida,
          dataRetorno: this.dataRetorno,
          finalidade: this.finalidade,
          funcionarioid: this.funcionarioid
      };
      this.service.update(solicitacao).subscribe((solicitacao) => {
          console.log(solicitacao);
          this.router.navigate(["solicitacao/listar"]);
      });
  }
}