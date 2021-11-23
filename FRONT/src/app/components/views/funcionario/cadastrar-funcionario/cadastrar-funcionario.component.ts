import { Funcionario } from 'src/app/models/funcionario';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  id!: number;
  nome!: string;
  matricula!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: FuncionarioService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let funcionario: Funcionario = {
      nome: this.nome,
      matricula: this.matricula,
      criadoem!: this.criadoEm
    };
    this.service.create(funcionario).subscribe((funcionario) => {
      console.log(funcionario);
      this.router.navigate(["funcionario/listar"]);
    });
  }
}
