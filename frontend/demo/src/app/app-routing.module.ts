import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditUsuarioComponent } from './home/components/edit-usuario/edit-usuario.component';
import { ProdGuardService as guard } from './core/services/prod/prod-guard.service';
import { ListaProductoComponent } from './producto/lista-producto/lista-producto.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children:[
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'home',

        loadChildren: () => import('./home/home.module').then(m =>  m.HomeModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } 

      },

      {
        path: 'lista-productos',
        loadChildren: () => import('./producto/producto.module').then(m =>  m.ProductoModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } 
      },

     

     
      
    ],
    
    
  },

  {
    path: 'edit-usuario/:id',
    component: EditUsuarioComponent,

  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m =>  m.LoginModule),

  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m =>  m.RegisterModule),

  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m =>  m.PageNotFoundModule),

  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
