import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/services/login.service';

@Component({
  selector: 'app-cadastrar-login',
  templateUrl: './cadastrar-login.component.html',
  styleUrls: ['./cadastrar-login.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  email!: string;
  senha!: string;
  permissao!: string;

  constructor(private router: Router, private service: Login) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let usuario: Usuario = {
      email: this.email,
      senha: this.senha,
      permissao: this.permissao

    };
    // this.service.create(usuario).subscribe((usuario: any) => {
    //   console.log(usuario);
    //   this.router.navigate(["usuario/listar"]);
    // });
  }
}
