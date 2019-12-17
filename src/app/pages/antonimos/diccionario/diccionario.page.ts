import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TaskI2 } from '../../../models/task.interface';
import { AntonimoService } from '../../../services/antonimo.service';

@Component({
  selector: 'app-diccionario',
  templateUrl: './diccionario.page.html',
  styleUrls: ['./diccionario.page.scss'],
})
export class DiccionarioPage implements OnInit {
  antonimos: TaskI2[];
  // buscar: string;
  textoBuscar = '';
  loading: any;

  constructor(private serviceAntonimo: AntonimoService,
              private loadingCtr: LoadingController) { }

  ngOnInit() {
    this.obtenerAntonimos()
  }


  async obtenerAntonimos() {
    this.loading = await this.loadingCtr.create({
      message: 'Cargando...',
      duration: 3000
    });

    this.loading.present();
    this.serviceAntonimo.getTodos().subscribe(res => console.log(this.antonimos = res));
    this.loading.dismiss();

  }

  buscar( event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
