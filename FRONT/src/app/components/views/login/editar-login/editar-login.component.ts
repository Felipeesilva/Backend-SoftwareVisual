import { Usuario } from './../../../../models/usuario';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id!: number;
  email!: string;
  senha!: string;
  permissao!: string;
  token!: string;

  constructor(private router: Router, private service: UsuarioService) {}

  ngOnInit(): void {}

  editar(): void {
      let usuario: Usuario = {
          email: this.email,
          senha: this.senha,
          permissao: this.permissao,
          token: this.token
      };
      this.service.update(usuario).subscribe((usuario: any) => {
          console.log(usuario);
          this.router.navigate(["usuario/listar"]);
      });
  }
}