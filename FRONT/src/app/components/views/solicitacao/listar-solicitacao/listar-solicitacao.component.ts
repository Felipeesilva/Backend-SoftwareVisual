import { Solicitacao } from '../../../../models/solicitacao';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';

@Component({
  selector: 'app-listar-solicitacao',
  templateUrl: './listar-solicitacao.component.html',
  styleUrls: ['./listar-solicitacao.component.css']
})
export class ListarSolicitacaoComponent implements OnInit {

  solicitacoes: Solicitacao[] = [];
  id!: number;
  constructor(private service: SolicitacaoService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe(solicitacoes => {
        this.solicitacoes = solicitacoes;  
        console.log(solicitacoes);
    });
  }

  deletar(id: number):void{
    console.log(this.deletar);
    this.service.delete(id).subscribe((id) =>{
      console.log(id);
      this.router.navigate(["solicitacao/listar"]);
      this.ngOnInit
      this.service.list().subscribe((solicitacoes) => {
        this.solicitacoes = solicitacoes;
        console.log(solicitacoes);
      });
    });
  }

}
