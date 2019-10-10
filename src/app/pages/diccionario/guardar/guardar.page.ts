import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../../models/task.interface';
import { SinonimoService } from '../../../services/sinonimo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.page.html',
  styleUrls: ['./guardar.page.scss'],
})
export class GuardarPage implements OnInit {
  sinonimo: TaskI = {
    palabra: '',
    sinonimo: ''
  };

  todoId = null;
  constructor( private route: ActivatedRoute, private navCtr: NavController, private sinonimoService: SinonimoService,
               private loadingCtr: LoadingController) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params[' id '];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingCtr.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.sinonimoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.sinonimo = res;
    });
  }

  async guardar() {
    const loading = await this.loadingCtr.create({
      message: 'Guardando...'
    });
    await loading.present();
    if (this.todoId) {
      // update
      this.sinonimoService.updateTodo(this.sinonimo, this.todoId).then(() => {
        loading.dismiss();
        this.navCtr.navigateForward('/guardar');
      });

    } else {
      this.sinonimoService.addTodo(this.sinonimo).then(() => {
        loading.dismiss();
        this.navCtr.navigateForward('/guardar');
      });
    }
  }

}
