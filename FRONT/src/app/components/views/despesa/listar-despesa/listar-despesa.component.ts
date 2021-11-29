import { Despesa } from 'src/app/models/despesa';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DespesaService } from 'src/app/services/despesa.service';

@Component({
  selector: 'app-listar-despesa',
  templateUrl: './listar-despesa.component.html',
  styleUrls: ['./listar-despesa.component.css']
})
export class ListarDespesaComponent implements OnInit {

  despesas: Despesa[] = [];
  
  constructor(private service: DespesaService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe((despesa: Despesa[]) => {
        this.despesas = despesa;  
        console.log(despesa);
    });
  }

  deletar(id: string):void{
    console.log(this.deletar);
    this.service.delete(id).subscribe((id: any) =>{
      console.log(id);
      this.router.navigate(["despesa/listar"]);
      this.ngOnInit
      this.service.list().subscribe((despesas: Despesa[]) => {
        this.despesas = despesas;
        console.log(this.despesas);
      });
    });
  }

}
