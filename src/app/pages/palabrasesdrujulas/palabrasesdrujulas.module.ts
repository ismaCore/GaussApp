import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PalabrasesdrujulasPage } from './palabrasesdrujulas.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'concepto'
  },
  {
    path: '',
    component: PalabrasesdrujulasPage,
    children: [
      {
       path: 'concepto',
       
       loadChildren: '../palabrasesdrujulas/conceptoesdrujulas/conceptoesdrujulas.module#ConceptoesdrujulasPageModule'
       
       
      },
      {
        path: 'ejercicio',
        loadChildren: '../palabrasesdrujulas/ejercicioesdrujulas/ejercicioesdrujulas.module#EjercicioesdrujulasPageModule'
       },
       

    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PalabrasesdrujulasPage]
})
export class PalabrasesdrujulasPageModule {}
