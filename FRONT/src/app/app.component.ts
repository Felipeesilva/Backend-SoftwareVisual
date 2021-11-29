import { Funcionario } from './models/funcionario';
import { FuncionarioService } from './services/itemDespesa.service';
import { Solicitacao } from './models/solicitacao';
import { SolicitacaoService } from './services/pedido.service';
import { Administrativo } from './models/usuario';
import { AdministrativoService } from './services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {}
