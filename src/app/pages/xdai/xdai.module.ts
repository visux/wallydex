import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XdaiPageRoutingModule } from './xdai-routing.module';

import { XdaiPage } from './xdai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XdaiPageRoutingModule
  ],
  declarations: [XdaiPage]
})
export class XdaiPageModule {}
