import { ItemDespesa } from './../../../../models/itemDespesa';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDespesaService } from 'src/app/services/itemDespesa.service';

@Component({
  selector: 'app-cadastrar-itemDespesa',
  templateUrl: './cadastrar-itemDespesa.component.html',
  styleUrls: ['./cadastrar-itemDespesa.component.css']
})
export class CadastrarItemDespesaComponent implements OnInit {

  id!: number;
  produto!: string;
  quantidade!: number;
  preco!: number;
  criadoEm!: string;

  constructor(private router: Router, private service: ItemDespesaService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let itemDespesa: ItemDespesa = {
      produto: this.produto,
      quantidade: this.quantidade,
      preco: this.preco,
      criadoem!: this.criadoEm
    };
    this.service.create(itemDespesa).subscribe((itemDespesa) => {
      console.log(itemDespesa);
      this.router.navigate(["itemDespesa/listar"]);
    });
  }
}
