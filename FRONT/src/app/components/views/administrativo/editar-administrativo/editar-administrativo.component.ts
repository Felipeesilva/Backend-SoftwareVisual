import { Administrativo } from './../../../../models/administrativo';
import { AdministrativoService } from 'src/app/services/administrativo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-administrativo',
  templateUrl: './editar-administrativo.component.html',
  styleUrls: ['./editar-administrativo.component.css']
})
export class EditarAdministrativoComponent implements OnInit {
  id!: number;
  responsavel!: string;
  matriculaAdm!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: AdministrativoService) {}

  ngOnInit(): void {}

  editar(): void {
      let administrativo: Administrativo = {
          id: this.id,
          responsavel: this.responsavel,
          matriculaAdm: this.matriculaAdm
      };
      this.service.update(administrativo).subscribe((administrativo) => {
          console.log(administrativo);
          this.router.navigate(["administrativo/listar"]);
      });
  }
}