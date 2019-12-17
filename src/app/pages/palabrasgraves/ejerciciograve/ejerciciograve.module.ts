import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EjerciciogravePage } from './ejerciciograve.page';

const routes: Routes = [
  {
    path: '',
    component: EjerciciogravePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EjerciciogravePage]
})
export class EjerciciogravePageModule {}
