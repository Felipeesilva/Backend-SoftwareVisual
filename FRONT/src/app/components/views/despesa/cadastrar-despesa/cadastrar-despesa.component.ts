import { ItemDespesa } from './../../../../models/itemDespesa';
import { Despesa } from './../../../../models/despesa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DespesaService } from 'src/app/services/despesa.service';

@Component({
  selector: 'app-cadastrar-despesa',
  templateUrl: './cadastrar-despesa.component.html',
  styleUrls: ['./cadastrar-despesa.component.css']
})
export class CadastrarDespesaComponent implements OnInit {

  id!: number;
  lugar!: string;
  itemDespesa!: ItemDespesa;
  itensId!: number;
  carrinhoId!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: DespesaService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let despesa: Despesa = {
      lugar:this.lugar,
      ItemDespesa: this.itemDespesa,
      itensId: this.itensId,
      carrinhoId: this.carrinhoId,
      criadoem!: this.criadoEm
    };
    this.service.create(despesa).subscribe((despesa: any) => {
      console.log(despesa);
      this.router.navigate(["despesa/listar"]);
    });
  }
}
