import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProdGuardService, ProdGuardService as guard } from './core/services/guardian/prod-guard.service';
import { LoginGuard } from './core/services/guardian/login.guard';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,

    
    children:[
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },

      {
        path: 'index',
    
        loadChildren: () => import('./index/index.module').then(m =>  m.IndexModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } 
    
      },
    
      
      
      {
        path: 'home',

        loadChildren: () => import('./home/home.module').then(m =>  m.HomeModule), canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } 

      },

      {
        path: 'lista-productos',
        loadChildren: () => import('./producto/producto.module').then(m =>  m.ProductoModule), canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } 
      },

     

     
      
    ],
    
    
  },

 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m =>  m.LoginModule), canActivate: []
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m =>  m.RegisterModule), canActivate: [LoginGuard]

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
