import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Funcionario
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { EditarFuncionarioComponent } from './components/views/funcionario/editar-funcionario/editar-funcionario.component';
//solicitacao
import { CadastrarSolicitacaoComponent } from './components/views/solicitacao/cadastrar-solicitacao/cadastrar-solicitacao.component';

import { ListarSolicitacaoComponent } from './components/views/solicitacao/listar-solicitacao/listar-solicitacao.component';
import { EditarSolicitacaoComponent } from './components/views/solicitacao/editar-solicitacao/editar-solicitacao.component';

//Administrativo

import { CadastrarAdministrativoComponent } from './components/views/administrativo/cadastrar-administrativo/cadastrar-administrativo.component';
import { ListarAdministrativoComponent } from './components/views/administrativo/listar-administrativo/listar-administrativo.component';
import { EditarAdministrativoComponent } from './components/views/administrativo/editar-administrativo/editar-administrativo.component';

// Home
import { HomeComponent } from './components/views/home/home.component';



const routes: Routes = [
  
  // Rotas do Funcionario
  {
    // Home
    path: "",
    component: HomeComponent
  },
  {
    // Rota para Listar os Funcionarios
    path: "funcionario/listar",
    component: ListarFuncionarioComponent
  },
  {
    // Rota para cadastrar o Funcionario
    path: "funcionario/cadastrar",
    component: CadastrarFuncionarioComponent
  },
  {
    path: "funcionario/update/:id",
    component: EditarFuncionarioComponent,
  },
  
  //solicitacao

  {
    // Home
    path: "",
    component: ListarSolicitacaoComponent
  },
  {
    // Rota para Listar solicitacoes
    path: "solicitacao/listar",
    component: ListarSolicitacaoComponent
  },
  {
    // Rota para cadastrar solicitacoes
    path: "solicitacao/cadastrar",
    component: CadastrarSolicitacaoComponent
  },
  {
    path: "solicitacao/update/:id",
    component: EditarSolicitacaoComponent
  },

  //Administrativo

  {
    // Home
    path: "",
    component: ListarAdministrativoComponent
  },
  {
    // Rota para Listar solicitacoes
    path: "administrativo/listar",
    component: ListarAdministrativoComponent
  },
  {
    // Rota para cadastrar solicitacoes
    path: "administrativo/cadastrar",
    component: CadastrarAdministrativoComponent
  },
  {
    path: "administrativo/update/:id",
    component: EditarAdministrativoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
