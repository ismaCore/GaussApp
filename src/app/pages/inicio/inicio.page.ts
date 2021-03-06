import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }
  irASinonimos() {
    this.router.navigate(['/sinonimos']);
  }
  irAntonimos() {
    this.router.navigate(['/antonimos']);
  }
  irAPalabrasAgudas() {
    this.router.navigate(['/palabras']);

  }
  irAPalabrasGraves() {
    this.router.navigate(['/palabrasgraves']);

  }
  irAPalabrasEsdrujulas() {
    this.router.navigate(['/palabrasesdrujulas']);

  }


}
