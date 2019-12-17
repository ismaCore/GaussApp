import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'sinonimos', loadChildren: './pages/sinonimos/sinonimos.module#SinonimosPageModule' },
  { path: 'concepto', loadChildren: './pages/concepto/concepto.module#ConceptoPageModule' },
  { path: 'ejercicio', loadChildren: './pages/ejercicio/ejercicio.module#EjercicioPageModule' },
  { path: 'diccionario', loadChildren: './pages/diccionario/diccionario.module#DiccionarioPageModule' },
  { path: 'guardar', loadChildren: './pages/diccionario/guardar/guardar.module#GuardarPageModule' },
  { path: 'antonimos', loadChildren: './pages/antonimos/antonimos.module#AntonimosPageModule' },
  { path: 'concepto', loadChildren: './pages/antonimos/concepto/concepto.module#ConceptoPageModule' },
  { path: 'diccionario', loadChildren: './pages/antonimos/diccionario/diccionario.module#DiccionarioPageModule' },
  { path: 'ejercicio', loadChildren: './pages/antonimos/ejercicio/ejercicio.module#EjercicioPageModule' },
  { path: 'palabras', loadChildren: './pages/palabras/palabras.module#PalabrasPageModule' },
  { path: 'ejercicioAgudas', loadChildren: './pages/palabras/ejercicio/ejercicio.module#EjercicioPageModule' },
  { path: 'concepto-agudas', loadChildren: './pages/palabras/concepto-agudas/concepto-agudas.module#ConceptoAgudasPageModule' },
  { path: 'palabrasgraves', loadChildren: './pages/palabrasgraves/palabrasgraves.module#PalabrasgravesPageModule' },
  { path: 'conceptograve', loadChildren: './pages/palabrasgraves/conceptograve/conceptograve.module#ConceptogravePageModule' },
  { path: 'ejerciciograve', loadChildren: './pages/palabrasgraves/ejerciciograve/ejerciciograve.module#EjerciciogravePageModule' },
  { path: 'palabrasesdrujulas', loadChildren: './pages/palabrasesdrujulas/palabrasesdrujulas.module#PalabrasesdrujulasPageModule' },
  { path: 'ejercicioesdrujulas', loadChildren: './pages/palabrasesdrujulas/ejercicioesdrujulas/ejercicioesdrujulas.module#EjercicioesdrujulasPageModule' },
  { path: 'conceptoesdrujulas', loadChildren: './pages/palabrasesdrujulas/conceptoesdrujulas/conceptoesdrujulas.module#ConceptoesdrujulasPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
