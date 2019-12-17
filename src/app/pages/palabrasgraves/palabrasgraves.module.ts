import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PalabrasgravesPage } from './palabrasgraves.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'concepto'
  },
  {
    path: '',
    component: PalabrasgravesPage,
    children: [
      {
       path: 'concepto',
       
       loadChildren: '../palabrasgraves/conceptograve/conceptograve.module#ConceptogravePageModule'
       
       
      },
      {
        path: 'ejercicio',
        loadChildren: '../palabrasgraves/ejerciciograve/ejerciciograve.module#EjerciciogravePageModule'
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
  declarations: [PalabrasgravesPage]
})
export class PalabrasgravesPageModule {}
