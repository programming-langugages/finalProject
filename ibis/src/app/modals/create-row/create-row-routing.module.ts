import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRowPage } from './create-row.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRowPageRoutingModule {}
