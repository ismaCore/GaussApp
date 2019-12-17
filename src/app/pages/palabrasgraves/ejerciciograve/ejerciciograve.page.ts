import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/Models/palabra.interface';
import { PalabraService } from 'src/app/services/palabra.service';
import { element } from 'protractor';
import { Vida } from 'src/app/models/vida.interface';
import { clearInterval } from 'timers';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ejerciciograve',
  templateUrl: './ejerciciograve.page.html',
  styleUrls: ['./ejerciciograve.page.scss'],
})
export class EjerciciogravePage implements OnInit {
  Palabras: Palabra[] = [];
  PalabrasAuxiliar: Palabra[] = [];
  porcentaje = 1;
  myVar: any;
  palabra: Palabra;
  mostrar=false
  mensaje:String
  vidas: Vida[] =[]
  colorMensaje:String
  ejecutar=true

  constructor(private palabraService: PalabraService, private alertCtrl:AlertController,public router: Router ) { }

  ngOnInit() {
    this.agregarVidas()
    this.palabraService.getTodos().subscribe(data => {
      this.PalabrasAuxiliar = data;
      this.PalabrasAuxiliar.forEach((palabra) => {
       this.Palabras.push(palabra);
     })
     this.ejecutarIntervalo();
    });
  }

  agregarVidas(){
    for (let index = 0; index <3; index++) {
      this.vidas.push({url_imagen:"../../../../assets/vida.png",mostrar:true})
    }
  }
  ejecutarIntervalo(){
    this.iniciarValores()
    this.myVar = setInterval( () => this.ejecutarInstruccion() , 900);
 }
 iniciarValores(){
   this.mostrarPalabra() 
    this.porcentaje=1;
 }
 mostrarPalabra(){
   this.palabra = this.Palabras[Math.floor(Math.random() * this.Palabras.length) ];
   if(this.palabra!=null){
     this.mostrar=true
   }
 }

 ejecutarInstruccion() {
   if(this.ejecutar){
   this.porcentaje -= 0.1;
   this.porcentaje = parseFloat(this.porcentaje.toPrecision(1));
   if (this.porcentaje === -0.1) {
     this.iniciarValores()
     this.vidas.shift()
   }
   if(this.vidas.length===0){
     this.mostrarGameOver()
     this.ejecutar=false
   }
   console.log(this.porcentaje);
 }
 }
 async mostrarGameOver(){
   const alert = await this.alertCtrl.create({
     header: 'Game Over :(',
     message:"Se acabo el Juego :(" ,
     cssClass:"danger",
     buttons: [{
       text:"Reiniciar :)",
       cssClass:"success",
       handler:()=>{
         this.agregarVidas()
         this.iniciarValores()
         this.ejecutar=true
       }
     }]
   });

   alert.present();
 }
 async mostrarMensaje(titulo,subtitulo,mensaje,color) {
   const alert = await this.alertCtrl.create({
     header: titulo,
     subHeader:subtitulo,
     message: mensaje,
     buttons: [{
       text:"OK", 
       handler:()=>{
         this.ejecutar=true;
       }
     }]
   });

   alert.present();
 }

 validar(respuesta){
   let esAguda = this.palabra.tipo==="aguda"       
   
   if(respuesta){
     if(esAguda){
       
       //alert("Bien hecho");`
       this.mensaje="Es una Palabra Aguda"
       this.colorMensaje="success"
       this.ejecutar=false
       this.mostrarMensaje("Bien Hecho :)",this.palabra.texto,this.mensaje,this.colorMensaje);
     }else{
       //alert("Mal");
       this.vidas.shift()
       this.mensaje="No es una palabra Aguda :("
       this.colorMensaje="danger"
       this.ejecutar=false
       this.mostrarMensaje("Te Equivocaste :(",this.palabra.texto,this.mensaje,this.colorMensaje);

     }
   }else{
     if(!esAguda){
      // alert("Bien Hecho")
      this.mensaje="No es una Palabra Aguda"
       this.colorMensaje="success"
       this.ejecutar=false
       this.mostrarMensaje("Bien Hecho :)",this.palabra.texto,this.mensaje,this.colorMensaje);

     }else{
       this.mensaje="Si es una palabra Aguda :("
       this.colorMensaje="danger"
       this.mostrarMensaje("Te Equivocaste :(",this.palabra.texto,this.mensaje,this.colorMensaje);
       this.ejecutar=false
       this.vidas.shift()
     }
   }
   
   this.iniciarValores()
 }
 atras(){
   this.ejecutar=false;
   console.log("sdsdsdsaasd")
   this.router.navigate(['/inicio']);
 }
 ionViewWillLeave(){
   this.ejecutar=false
   console.log("Hola");
 }
 ionViewDidEnter(){
   this.ejecutar=true
 }

}
