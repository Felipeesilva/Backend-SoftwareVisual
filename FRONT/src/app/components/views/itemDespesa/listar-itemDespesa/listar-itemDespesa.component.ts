import { ItemDespesa } from 'src/app/models/itemDespesa';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemDespesaService } from 'src/app/services/itemDespesa.service';

@Component({
  selector: 'app-listar-itemDespesa',
  templateUrl: './listar-itemDespesa.component.html',
  styleUrls: ['./listar-itemDespesa.component.css']
})
export class ListarItemDespesaComponent implements OnInit {

  itemDespesas: ItemDespesa[] = [];
  
  constructor(private service: ItemDespesaService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe((itemDespesa: ItemDespesa[]) => {
        this.itemDespesas = itemDespesa;  
        console.log(itemDespesa);
    });
  }

  deletar(nome: string):void{
    console.log(this.deletar);
    this.service.delete(nome).subscribe((nome: any) =>{
      console.log(nome);
      this.router.navigate(["itemDespesa/listar"]);
      this.ngOnInit
      this.service.list().subscribe((itemDespesas: ItemDespesa[]) => {
        this.itemDespesas = itemDespesas;
        console.log(this.itemDespesas);
      });
    });
  }

}
