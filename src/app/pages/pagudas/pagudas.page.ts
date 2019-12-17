import { Component, OnInit } from '@angular/core';
import { PalabraService } from '../../services/palabra.service';
import { Palabra } from '../../models/palabra.interface';

@Component({
  selector: 'app-pagudas',
  templateUrl: './pagudas.page.html',
  styleUrls: ['./pagudas.page.scss'],
})
export class PAgudasPage implements OnInit {
 
  constructor(private palabraService: PalabraService) { }

  ngOnInit() {
 
  }

}
