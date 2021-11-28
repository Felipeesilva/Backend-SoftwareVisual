import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
  
  id!: number;
  nome!: string;
  matricula!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: FuncionarioService) {}

  ngOnInit(): void {}

  editar(): void {
      let funcionario: Funcionario = {
        id: this.id,  
        nome: this.nome,
        matricula: this.matricula,
        criadoem: this.criadoEm
      };
      this.service.update(funcionario).subscribe((funcionario) => {
          console.log(funcionario);
          this.router.navigate(["funcionario/listar"]);
      });
  }
}