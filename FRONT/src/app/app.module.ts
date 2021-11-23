import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@Angular/common/http";
import { FormsModule } from '@angular/forms';
// Imports dos componentes da aplicação
import { AppComponent } from './app.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from './components/views/funcionario/editar-funcionario/editar-funcionario.component';
//import adm
import { ListarAdministrativoComponent } from './components/views/administrativo/listar-administrativo/listar-administrativo.component';
import { CadastrarAdministrativoComponent } from './components/views/administrativo/cadastrar-administrativo/cadastrar-administrativo.component';
import { EditarAdministrativoComponent } from './components/views/administrativo/editar-administrativo/editar-administrativo.component';
//import solicitacao
import { ListarSolicitacaoComponent } from './components/views/solicitacao/listar-solicitacao/listar-solicitacao.component';
import { CadastrarSolicitacaoComponent } from './components/views/solicitacao/cadastrar-solicitacao/cadastrar-solicitacao.component';
import { EditarSolicitacaoComponent } from './components/views/solicitacao/editar-solicitacao/editar-solicitacao.component';
import { HomeComponent } from './components/views/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent,
    //adm
    ListarAdministrativoComponent,
    CadastrarAdministrativoComponent,
    EditarAdministrativoComponent,
    //solicitacao
    ListarSolicitacaoComponent,
    CadastrarSolicitacaoComponent,
    EditarSolicitacaoComponent,
    // Home
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
