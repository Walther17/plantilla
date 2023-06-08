import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistroComponent } from './auth/components/registro/registro.component';
import { ListaProductoComponent } from './producto/components/lista-producto/lista-producto.component';
import { ProdGuardService as guard } from './services/guards/prod-guard.service';
import { DetalleProductoComponent } from './producto/components/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/components/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/components/editar-producto/editar-producto.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
