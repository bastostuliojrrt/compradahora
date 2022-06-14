import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { LoginComponent } from './features/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { CadastroFornecedorComponent } from './features/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroClienteComponent } from './features/cadastro-cliente/cadastro-cliente.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { InicioUsuarioComponent } from './features/inicio-usuario/inicio-usuario.component';
import { HomeComponent } from './features/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparativoPrecosComponent } from './features/comparativo-precos/comparativo-precos.component';
import {AccordionModule} from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';


// import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    CadastroFornecedorComponent,
    CadastroClienteComponent,
    InicioUsuarioComponent,
    HomeComponent,
    ComparativoPrecosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    // CdkVirtualScrollViewport
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
