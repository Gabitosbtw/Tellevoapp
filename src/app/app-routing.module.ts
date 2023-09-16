import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },
  {
    path: 'si',
    loadChildren: () => import('./si/si.module').then(m => m.SiPageModule)
  },
  {
    path: 'no',
    loadChildren: () => import('./no/no.module').then(m => m.NoPageModule)
  },
  {
    path: 'olvidar',
    loadChildren: () => import('./olvidar/olvidar.module').then(m => m.OlvidarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
