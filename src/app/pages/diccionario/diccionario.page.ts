import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/task.interface';
import { SinonimoService } from '../../services/sinonimo.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-diccionario',
  templateUrl: './diccionario.page.html',
  styleUrls: ['./diccionario.page.scss'],
})
export class DiccionarioPage implements OnInit {
  sinonimos: TaskI[];
  // buscar: string;
  textoBuscar = '';
  loading: any;


  constructor(private serviceSinonimo: SinonimoService,
              private loadingCtr: LoadingController) { }

  ngOnInit() {
     this.obtenerSinonimos();
    //console.log(this.sinonimos.length);

  }

  ionViewDidEnter() {
    //this.obtenerSinonimos();


  }
  async obtenerSinonimos() {
    this.loading = await this.loadingCtr.create({
      message: 'Cargando...',
      duration: 3000
    });

    this.loading.present();
    this.serviceSinonimo.getTodos().subscribe(res => console.log(this.sinonimos = res));
    this.loading.dismiss();

  }

  buscar( event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }




}
