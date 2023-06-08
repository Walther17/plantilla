import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { ListaProductoComponent } from './producto/components/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/components/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/components/editar-producto/editar-producto.component';
import { NuevoProductoComponent } from './producto/components/nuevo-producto/nuevo-producto.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistroComponent } from './auth/components/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    NuevoProductoComponent,
    LoginComponent, RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
