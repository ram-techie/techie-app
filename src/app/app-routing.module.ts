import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    pathMatch : 'full',
    redirectTo : 'parent'
  },
  { 
    path: "home",
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePageModule)
  },
  { 
    path: "login",
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPageModule)
  },
  { 
    path: "parent",
    loadChildren: () => import('./parent/parent.module').then( m => m.ParentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
