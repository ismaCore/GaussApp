import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-concepto-agudas',
  templateUrl: './concepto-agudas.page.html',
  styleUrls: ['./concepto-agudas.page.scss'],
})
export class ConceptoAgudasPage implements OnInit {
  ejecutar=true

  constructor() { }

  ngOnInit() {
  }
  // atras(){
  //   this.ejecutar=false;
  //   console.log("sdsdsdsaasd")
  //   this.router.navigate(['/inicio']);
  // }
  ionViewDidLeave(){
    console.log("Did")
  }
  ionViewWillUnload(){
    console.log("putita")
  }
  ionViewWillLeave(){
    console.log("fghjklñ{")
  }


}
