import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/task.interface';
import { SinonimoService } from '../../services/sinonimo.service';
import { LoadingController } from '@ionic/angular';





@Component({
  selector: 'app-diccionario',
  templateUrl: './diccionario.page.html',
  styleUrls: ['./diccionario.page.scss'],
})
export class DiccionarioPage implements OnInit {
  sinonimos: TaskI[];
  sinonimosAuxiliar:TaskI[]
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
    this.sinonimos=[]
    this.sinonimosAuxiliar=[]
    this.loading = await this.loadingCtr.create({
      message: 'Cargando...',
      duration: 3000
    });

    this.loading.present();
    this.serviceSinonimo.getTodos().subscribe(res => {
        res.forEach(element => {
        this.sinonimosAuxiliar.push(element)
      });
    });
 
    this.loading.dismiss();
    console.log(this.sinonimosAuxiliar);
  }

  buscar( event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }




}
