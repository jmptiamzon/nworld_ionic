import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncashmentPage } from './encashment.page';

const routes: Routes = [
  {
    path: '',
    component: EncashmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncashmentPageRoutingModule {}
