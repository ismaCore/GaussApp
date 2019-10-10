import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SinonimosPage } from './sinonimos.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'concepto'
  },
  {
    path: '',
    component: SinonimosPage,
    children: [
      {
       path: 'concepto',
       loadChildren: '../concepto/concepto.module#ConceptoPageModule'
      },
      {
        path: 'ejercicio',
        loadChildren: '../ejercicio/ejercicio.module#EjercicioPageModule'
       },
       {
        path: 'diccionario',
        loadChildren: '../diccionario/diccionario.module#DiccionarioPageModule'
       }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)

  ],
  declarations: [SinonimosPage]
})
export class SinonimosPageModule {}
