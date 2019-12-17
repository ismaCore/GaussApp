import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AntonimosPage } from './antonimos.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'concepto'
  },
  {
    path: '',
    component: AntonimosPage,
    children: [
      {
       path: 'concepto',
       loadChildren: '../antonimos/concepto/concepto.module#ConceptoPageModule'
      },
      {
        path: 'ejercicio',
        loadChildren: '../antonimos/ejercicio/ejercicio.module#EjercicioPageModule'
       },
       {
        path: 'diccionario',
        loadChildren: '../antonimos/diccionario/diccionario.module#DiccionarioPageModule'
       }
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
  declarations: [AntonimosPage]
})
export class AntonimosPageModule {}
