import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePagePageRoutingModule } from './create-page-routing.module';

import { CreatePagePage } from './create-page.page';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatToolbarModule,
    MatIconModule,
    CreatePagePageRoutingModule
  ],
  declarations: [CreatePagePage]
})
export class CreatePagePageModule {}
