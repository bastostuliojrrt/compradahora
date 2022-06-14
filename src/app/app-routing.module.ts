import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { LoginComponent } from './features/login/login.component';
import { CadastroFornecedorComponent } from './features/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroClienteComponent } from './features/cadastro-cliente/cadastro-cliente.component';
import { InicioUsuarioComponent } from './features/inicio-usuario/inicio-usuario.component';
import { HomeComponent } from './features/home/home.component';
import { PedidosComponent } from './features/pedidos/pedidos.component';
import { PromocaoComponent } from './features/promocao/promocao.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "inicioUsuario",
    component: InicioUsuarioComponent
  },
  {
    path: "cadastroCliente",
    component: CadastroClienteComponent
  },
  {
    path: "cadastroFornecedor",
    component: CadastroFornecedorComponent
  },
  {
    path: "promocao",
    component: PromocaoComponent
  },
  {
    path: "pedidos",
    component: PedidosComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
