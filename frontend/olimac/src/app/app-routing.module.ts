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
import { ListaUsuariosComponent } from './usuarios/components/lista-usuarios/lista-usuarios.component';
import { DetalleUsuariosComponent } from './usuarios/components/detalle-usuarios/detalle-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/components/editar-usuarios/editar-usuarios.component';
import { NuevoUsuarioComponent } from './usuarios/components/nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'listar-usuarios', component: ListaUsuariosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalleUser/:id', component: DetalleUsuariosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'editarUser/:id', component: EditarUsuariosComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: 'nuevoUser', component: NuevoUsuarioComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
