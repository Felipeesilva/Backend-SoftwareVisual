import { Administrativo } from '../../../../models/administrativo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministrativoService } from 'src/app/services/administrativo.service';

@Component({
  selector: 'app-cadastrar-administrativo',
  templateUrl: './cadastrar-administrativo.component.html',
  styleUrls: ['./cadastrar-administrativo.component.css']
})
export class CadastrarAdministrativoComponent implements OnInit {

  responsavel!: string;
  matriculaAdm!: string;

  constructor(private router: Router, private service: AdministrativoService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let administrativo: Administrativo = {
      responsavel: this.responsavel,
      matriculaAdm: this.matriculaAdm
    };
    this.service.create(administrativo).subscribe((administrativo) => {
      console.log(administrativo);
      this.router.navigate(["administrativo/listar"]);
    });
  }
}
