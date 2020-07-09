import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      footer: false,
    },
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(p => p.ProductsModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('./comparation/comparation.module').then(c => c.ComparationModule),
      },
    ]
  },
  {
    path: 'login',
    component: LayoutComponent,
    data: {
      login: true,
      homepage: true,
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
    ]
  },
  {
    path: 'register',
    redirectTo: '/login/register',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: LayoutComponent,
    data: {
      login: true,
      homepage: true,
    },
    loadChildren: () => import('./user/user.module').then(u => u.UserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
