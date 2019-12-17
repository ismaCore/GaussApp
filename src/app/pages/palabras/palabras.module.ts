import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PalabrasPage } from './palabras.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'concepto'
  },
  {
    path: '',
    component: PalabrasPage,
    children: [
      {
       path: 'concepto',
       
       loadChildren: '../palabras/concepto-agudas/concepto-agudas.module#ConceptoAgudasPageModule'
       
      },
      {
        path: 'ejercicio',
        loadChildren: '../palabras/ejercicio/ejercicio.module#EjercicioPageModule'
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
  declarations: [PalabrasPage]
})
export class PalabrasPageModule {}
