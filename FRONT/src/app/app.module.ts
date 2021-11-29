import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@Angular/common/http";
import { FormsModule } from '@angular/forms';
// Imports dos componentes da aplicação

import { AppComponent } from './app.component';
import { CadastrarUsuarioComponent } from './components/views/login/cadastrar-login/cadastrar-login.component';


import { CadastrarPedidoComponent } from './components/views/pedido/cadastrar-pedido/cadastrar-pedido.component';
import { ListarPedidoComponent } from './components/views/pedido/listar-pedido/listar-pedido.component';
import { EditarPedidoComponent } from './components/views/pedido/editar-pedido/editar-pedido.component';


import { CadastrarItemDespesaComponent } from './components/views/itemDespesa/cadastrar-itemDespesa/cadastrar-itemDespesa.component';
import { ListarItemDespesaComponent } from './components/views/itemDespesa/listar-itemDespesa/listar-itemDespesa.component';
import { EditarItemDespesaComponent } from './components/views/itemDespesa/editar-itemDespesa/editar-itemDespesa.component';


import { CadastrarDespesaComponent } from './components/views/despesa/cadastrar-despesa/cadastrar-despesa.component';
import { ListarDespesaComponent } from './components/views/despesa/listar-despesa/listar-despesa.component';
import { EditarDespesaComponent } from './components/views/despesa/editar-despesa/editar-despesa.component';
import { HomeComponent } from './components/views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    CadastrarPedidoComponent,
    ListarPedidoComponent,
    EditarPedidoComponent,
    CadastrarItemDespesaComponent,
    ListarItemDespesaComponent,
    EditarItemDespesaComponent,
    CadastrarDespesaComponent,
    ListarDespesaComponent,
    EditarDespesaComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
