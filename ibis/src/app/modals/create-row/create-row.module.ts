import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRowPageRoutingModule } from './create-row-routing.module';

import { CreateRowPage } from './create-row.page';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatToolbarModule,
    CreateRowPageRoutingModule
  ],
  declarations: [CreateRowPage]
})
export class CreateRowPageModule {}
