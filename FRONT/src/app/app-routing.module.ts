import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastrarUsuarioComponent } from './components/views/login/cadastrar-login/cadastrar-login.component';
import { EditarUsuarioComponent } from './components/views/login/editar-login/editar-login.component';


import { CadastrarPedidoComponent } from './components/views/pedido/cadastrar-pedido/cadastrar-pedido.component';
import { ListarPedidoComponent } from './components/views/pedido/listar-pedido/listar-pedido.component';
import { EditarPedidoComponent } from './components/views/pedido/editar-pedido/editar-pedido.component';


import { CadastrarItemDespesaComponent } from './components/views/itemDespesa/cadastrar-itemDespesa/cadastrar-itemDespesa.component';
import { ListarItemDespesaComponent } from './components/views/itemDespesa/listar-itemDespesa/listar-itemDespesa.component';
import { EditarItemDespesaComponent } from './components/views/itemDespesa/editar-itemDespesa/editar-itemDespesa.component';


import { CadastrarDespesaComponent } from './components/views/despesa/cadastrar-despesa/cadastrar-despesa.component';
import { ListarDespesaComponent } from './components/views/despesa/listar-despesa/listar-despesa.component';
import { EditarDespesaComponent } from './components/views/despesa/editar-despesa/editar-despesa.component';

// Home
import { HomeComponent } from './components/views/home/home.component';



const routes: Routes = [
  
  {
    // Home
    path: "",
    component: HomeComponent
  },
  {
    path: "usuario/create",
    component: CadastrarUsuarioComponent
  },
  {
    path: "usuario/update/:id",
    component: EditarUsuarioComponent,
  },
  

  {
    // Home
    path: "",
    component: ListarPedidoComponent
  },
  {
    path: "pedido/list",
    component: ListarPedidoComponent
  },
  {
    path: "pedido/create",
    component: CadastrarPedidoComponent
  },
  {
    path: "pedido/update/:id",
    component: EditarPedidoComponent
  },


  {
    // Home
    path: "",
    component: ListarItemDespesaComponent
  },
  {
    path: "itemDespesa/list",
    component: ListarItemDespesaComponent
  },
  {
    path: "itemDespesa/create",
    component: CadastrarItemDespesaComponent
  },
  {
    path: "itemDespesa/update/:id",
    component: EditarItemDespesaComponent
  },


  {
    // Home
    path: "",
    component: ListarDespesaComponent
  },
  {
    path: "despesa/list",
    component: ListarDespesaComponent
  },
  {
    path: "despesa/create",
    component: CadastrarDespesaComponent
  },
  {
    path: "despesa/update/:id",
    component: EditarDespesaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
