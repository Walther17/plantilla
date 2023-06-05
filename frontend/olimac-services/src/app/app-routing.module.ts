import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

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
        loadChildren: () => import('./home/home.module').then(m =>  m.HomeModule),
      },
     
      {
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m =>  m.PageNotFoundModule),
    
      },


    ],

  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
