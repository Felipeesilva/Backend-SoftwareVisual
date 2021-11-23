import { ListarFuncionarioComponent } from './../../funcionario/listar-funcionario/listar-funcionario.component';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';
import { Solicitacao } from 'src/app/models/solicitacao';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';

@Component({
  selector: 'app-cadastrar-solicitacao',
  templateUrl: './cadastrar-solicitacao.component.html',
  styleUrls: ['./cadastrar-solicitacao.component.css']
})
export class CadastrarSolicitacaoComponent implements OnInit {

  id!: number;
  destino!: string;
  dataPartida!: string;
  dataRetorno!: string;
  finalidade!: string;
  funcionarioid!: number;
  funcionarios!: Funcionario[];


  constructor(private router: Router, private service: SolicitacaoService, private funcionario: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionario.list().subscribe(funcionarios => { this.funcionarios = funcionarios});
  }

  cadastrar(): void {
    let solicitacao: Solicitacao = {
      id!: this.id,
      destino: this.destino,
      dataPartida: this.dataPartida,
      dataRetorno: this.dataRetorno,
      finalidade: this.finalidade,
      funcionarioid: this.funcionarioid
    };
    this.service.create(solicitacao).subscribe((solicitacao) => {
      console.log(solicitacao);
      this.router.navigate(["solicitacao/listar"]);
    });
  }
}
