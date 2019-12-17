import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConceptoesdrujulasPage } from './conceptoesdrujulas.page';

const routes: Routes = [
  {
    path: '',
    component: ConceptoesdrujulasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConceptoesdrujulasPage]
})
export class ConceptoesdrujulasPageModule {}
