import { Despesa } from './../../../../models/despesa';
import { ItemDespesa } from './../../../../models/itemDespesa';
import { DespesaService } from 'src/app/services/despesa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-despesa',
  templateUrl: './editar-despesa.component.html',
  styleUrls: ['./editar-despesa.component.css']
})
export class EditarDespesaComponent implements OnInit {
  
  id!: number;
  lugar!: string;
  itemDespesa!: ItemDespesa;
  itensId!: number;
  carrinhoId!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: DespesaService) {}

  ngOnInit(): void {}

  editar(): void {
      let despesa: Despesa = {
        id: this.id,  
        lugar: this.lugar,
        itemDespesa: this.itemDespesa,
        itensId: this.itensId,
        carrinhoId: this.carrinhoId,
        criadoem: this.criadoEm
      };
      this.service.update(despesa).subscribe((despesa: any) => {
          console.log(despesa);
          this.router.navigate(["despesa/listar"]);
      });
  }
}