import { ItemDespesa } from 'src/app/models/itemDespesa';
import { ItemDespesaService } from 'src/app/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-itemDespesa',
  templateUrl: './editar-itemDespesa.component.html',
  styleUrls: ['./editar-itemDespesa.component.css']
})
export class EditarItemDespesaComponent implements OnInit {
  id!: number;
  produto!: string;
  quantidade!: number;
  preco!: number;

  constructor(private router: Router, private service: ItemDespesaService) {}

  ngOnInit(): void {}

  editar(): void {
      let itemDespesa: ItemDespesa = {
          produto: this.produto,
          quantidade: this.quantidade,
          preco: this.preco
      };
      this.service.update(itemDespesa).subscribe((itemDespesa: any) => {
          console.log(itemDespesa);
          this.router.navigate(["itemDespesa/listar"]);
      });
  }
}