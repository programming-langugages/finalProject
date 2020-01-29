import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'create-page',
    loadChildren: () => import('./pages/create-page/create-page.module').then( m => m.CreatePagePageModule)
  },
  {
    path: 'create-row',
    loadChildren: () => import('./modals/create-row/create-row.module').then( m => m.CreateRowPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages/pages.module').then( m => m.PagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
