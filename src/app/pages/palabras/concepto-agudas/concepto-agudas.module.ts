import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConceptoAgudasPage } from './concepto-agudas.page';

const routes: Routes = [
  {
    path: '',
    component: ConceptoAgudasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConceptoAgudasPage]
})
export class ConceptoAgudasPageModule {}
