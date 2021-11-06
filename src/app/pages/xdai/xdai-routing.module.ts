import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XdaiPage } from './xdai.page';

const routes: Routes = [
  {
    path: '',
    component: XdaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XdaiPageRoutingModule {}
