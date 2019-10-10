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


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
