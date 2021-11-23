import { Administrativo } from './../../../../models/administrativo';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdministrativoService } from 'src/app/services/administrativo.service';

@Component({
  selector: 'app-listar-administrativo',
  templateUrl: './listar-administrativo.component.html',
  styleUrls: ['./listar-administrativo.component.css']
})
export class ListarAdministrativoComponent implements OnInit {

  administrativos: Administrativo[] = [];
  
  constructor(private service: AdministrativoService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe(administrativos => {
        this.administrativos = administrativos;  
        console.log(administrativos);
    });
  }

  deletar(responsavel: string):void{
    console.log(this.deletar);
    this.service.delete(responsavel).subscribe((responsavel) =>{
      console.log(responsavel);
      this.router.navigate(["administrativo/listar"]);
      this.ngOnInit
      this.service.list().subscribe((administrativos) => {
        this.administrativos = administrativos;
        console.log(this.administrativos);
      });
    });
  }
}
