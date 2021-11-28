import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  email!: string;
  senha!: string;
  permissao!: string;
  token!: string;

  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let usuario: Usuario = {
      email: this.email,
      senha: this.senha,
      permissao: this.permissao,
      token: this.token

    };
    this.service.create(usuario).subscribe((usuario: any) => {
      console.log(usuario);
      this.router.navigate(["usuario/listar"]);
    });
  }
}
