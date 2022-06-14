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
import { PedidosComponent } from './features/pedidos/pedidos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './features/navbar/navbar.component';
import { PromocaoComponent } from './features/promocao/promocao.component';
import {MatTableModule} from '@angular/material/table';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
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
    PedidosComponent,
    NavbarComponent,
    PromocaoComponent,
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
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule
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
