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
    console.log("fgdddddddddddddddd")
    console.log(this.sinonimos[0]);
    this.getRandomInt();

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
      

      this.loading.dismiss();
      this.mostrar = true;
      console.log(this.sinonimo);
    });

  }
  getRandomInt() {
    console.log(Math.random());
    // return Math.floor(Math.random() * Math.floor(max));
  }
}
