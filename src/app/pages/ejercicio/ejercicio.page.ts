import { Component, OnInit } from '@angular/core';
import { SinonimoService } from '../../services/sinonimo.service';
import { TaskI } from '../../models/task.interface';
import { LoadingController, AlertController } from '@ionic/angular';
import { Opcion } from '../../models/opcion.interface';
import { Boton } from 'src/app/models/boton.interface';
import { Validators } from '@angular/forms';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {
  sinonimos: TaskI[] = [];
  sinonimosAuxiliar: TaskI[] = [];
  botones: Boton [] = [];
  Opciones: Opcion[] = [];
  sinonimo: TaskI;
  Tamanio: number;
  loading: any;
  mostrar;
  contador=0;

 constructor( private serviceSinonimo: SinonimoService, private loadingCtr: LoadingController, public alertCtrl: AlertController) {

 }

  ngOnInit() {
    this.obtenerSinonimos(event)
    
    this.mostrar = false; 
  }

  ionViewDidEnter() {
       
   
  }
  async obtenerSinonimos(event){
    
    this.loading = await this.loadingCtr.create({
      message: 'Cargando...',
      duration: 2000
    });

    this.loading.present();
    this.sinonimos.splice(1,this.sinonimos.length)
    this.sinonimosAuxiliar.splice(1,this.sinonimosAuxiliar.length)

    this.serviceSinonimo.getTodos().subscribe(data =>{ 
      this.sinonimosAuxiliar = data
        for (let index = 0; index < this.sinonimosAuxiliar.length;index++) {
        this.sinonimos.push(this.sinonimosAuxiliar[index]) 
      }
      this.sinonimo = this.sinonimos[Math.floor(Math.random() * (this.sinonimos.length - 1) + 1)]
      console.log(this.sinonimo);
      this.Tamanio = this.sinonimo.sinonimo.length;
      for (let index = 0; index <this.Tamanio; index++) {
        let boton:Boton = {id:index,texto:'',color:'success',opcionid:0}
        this.botones.push(boton);//this.sinonimo.sinonimo.charAt(index)
        let opcion:Opcion = {id:index, texto:this.sinonimo.sinonimo.charAt(index), mostrar: true}
        this.Opciones.push(opcion);
      }
      let numGenerar = 10- this.Tamanio;
      for (let index = 0; index < numGenerar; index++) {
        let letra = String.fromCharCode(Math.floor(Math.random() * ( 90 - 65 ) + 65 ));
        console.log(letra);
        let opcion:Opcion = {id:index, texto:letra, mostrar: true}
        this.Opciones.push(opcion);
      }
      this.Opciones = this.shuffle(this.Opciones)
      for (let index = 0; index < this.Opciones.length; index++) {
         this.Opciones[index].id = index
      }


      
      console.log(this.Opciones)
      this.loading.dismiss();
      this.mostrar = true;
    });


  }
  enviarTxt(numero) {
    this.Opciones[numero].mostrar=false;
    if(this.contador<this.Tamanio){ 
      for (let index = 0; index < this.botones.length; index++) {
        if(this.botones[index].texto===''){
          this.botones[index].texto = this.Opciones[numero].texto;
          this.botones[index].opcionid = this.Opciones[numero].id; 
          break;
        }
      }
      this.contador++
    }
    if(this.contador===this.Tamanio){
      this.validar()
    }
  }

  async validar(){
    let cadena=''
    this.botones.forEach(boton => {
      cadena+=boton.texto
    });
    console.log(cadena);
    if(this.sinonimo.sinonimo==cadena){

      // alert('INCREIBLE ADIVINASTE EL SINONIMO')
      const alert = await this.alertCtrl.create({
        header: '! FELICIDADES ¡',
        // subHeader: 'Subtitle',
        message: 'Felicidades adivinaste el sinónimo',
        buttons: [
          // {
          //   text: 'Cancel',
          //   role: 'cancel',
          //   handler: (blah) => {
          //     console.log('Cancelar');
          //   }
          // },
          {
            text: 'Ok',
            handler: () => {
              location.reload();
              console.log('Boton Ok ');
            }
          }
        ]
      });
  
      await alert.present();
    }
    else{
      this.botones.forEach(boton=>{
        boton.color='danger'
      })
    }
  }
  regresarTxt(numero){
    this.Opciones[this.botones[numero].opcionid].mostrar=true
    this.botones[numero].texto =''
    this.contador--
    this.botones.forEach(boton=>{
      boton.color='success'
    })
  }
  shuffle(arr) {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
}
