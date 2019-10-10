import { Component, OnInit } from '@angular/core';
import { SinonimoService } from '../../services/sinonimo.service';
import { TaskI } from '../../models/task.interface';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {
  sinonimos: TaskI[];

  constructor( private serviceSinonimo: SinonimoService) { }

  ngOnInit() {
    this.obtenerSinonimos();
  }

  obtenerSinonimos() {
    this.serviceSinonimo.getTodos().subscribe(res => this.sinonimos = res ); console.log(this.sinonimos);
    // this.serviceSinonimo.getTodos().subscribe(res => console.log(res));


    // res => console.log(res)
  }


}
