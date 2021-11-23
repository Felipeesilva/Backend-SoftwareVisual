import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  
  constructor(private service: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe(funcionarios => {
        this.funcionarios = funcionarios;  
        console.log(funcionarios);
    });
  }

  deletar(nome: string):void{
    console.log(this.deletar);
    this.service.delete(nome).subscribe((nome) =>{
      console.log(nome);
      this.router.navigate(["funcionario/listar"]);
      this.ngOnInit
      this.service.list().subscribe((funcionarios) => {
        this.funcionarios = funcionarios;
        console.log(this.funcionarios);
      });
    });
   
  }

}
