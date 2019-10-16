import { Component, OnInit } from '@angular/core';
import { SinonimoService } from '../../services/sinonimo.service';
import { TaskI } from '../../models/task.interface';
import { LoadingController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {
  sinonimos: TaskI[] = [];
  sinonimosAuxiliar: TaskI[] = [];
  botones:any []=[]
  Opciones:any[]=[]
  sinonimo: TaskI;
  Tamanio: number;
  loading: any;
  mostrar;

 constructor( private serviceSinonimo: SinonimoService, private loadingCtr: LoadingController) {

 }

  ngOnInit() {
    this.mostrar = false;
  }

  ionViewDidEnter() {
    this.obtenerSinonimos(event)
  }
  async obtenerSinonimos(event){
    this.loading = await this.loadingCtr.create({
      message: 'Cargando...',
      duration: 2000
    });

    this.loading.present();
    this.serviceSinonimo.getTodos().subscribe(data =>{ 
      this.sinonimosAuxiliar = data
        for (let index = 0; index < this.sinonimosAuxiliar.length;index++) {
        this.sinonimos.push(this.sinonimosAuxiliar[index]) 
      }
      this.sinonimo = this.sinonimos[Math.floor(Math.random() * (this.sinonimos.length - 1) + 1)]
      console.log(this.sinonimo);
      let tamanio = this.sinonimo.sinonimo.length
      for (let index = 0; index <tamanio; index++) {
        this.botones.push(this.sinonimo.sinonimo.charAt(index))
        this.Opciones.push(this.sinonimo.sinonimo.charAt(index))
      }
      let numGenerar = 10-tamanio
      for (let index = 0; index < numGenerar; index++) {
        let letra = String.fromCharCode(Math.floor(Math.random()*(90-65)+65))
        console.log(letra);
        this.Opciones.push(letra)
      }
      this.Opciones = this.shuffle(this.Opciones)
      this.loading.dismiss();
      this.mostrar = true;
    });

  }
  shuffle(arr) {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
}
