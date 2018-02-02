import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Reloj } from '../clases/reloj';
import { RelojFactory } from "../clases/relojFactory";


import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Ventana1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventana1',
  templateUrl: 'ventana1.html',
})
export class Ventana1Page {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    relojFactory:RelojFactory,
    public http:Http,
    ) 
      {
        this.relojFactory = relojFactory;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ventana1Page');
    console.log('Hello HttpProvider Provider');
  }

  public hora:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;

  public segundos2:number = 0;
  public minutos2:number = 0;
  public hora2:number = 0;

  public coleccion:Array<Reloj> = [];
  public contador:any;

  private relojFactory:RelojFactory;

  public tap: number = 1;


  tapEvent(e) 
  {
    this.tap++
    if(this.tap > 2)
    {
      this.tap = 1;
    }
  }


  start ()
  {
  if (this.contador == undefined)
    {
      this.contador = setInterval(()=>{
        if (this.hora2 == 2 && this.hora == 3 && this.minutos2 == 5 && this.minutos == 9 && this.segundos2 == 5 && this.segundos == 9)
        {
          this.hora = 0;
          this.minutos = 0;
          this.segundos = 0;
          this.segundos2 = 0;
          this.minutos2 = 0;
          this.hora2 = 0;
        } else
        {
          this.segundos += 1;
    
          if(this.segundos == 10)
          {
            this.segundos = 0;
            this.segundos2 +=1;

            if(this.segundos2 == 6)
            {
              this.segundos2 = 0;
              this.minutos += 1;
      
              if(this.minutos == 10)
              {
                this.minutos = 0;
                this.minutos2 += 1;

                if (this.minutos2 == 6) 
                {
                  this.minutos2 = 0;
                  this.hora += 1;

                  if (this.hora == 10) 
                  {
                    this.hora = 0;
                    this.hora2 += 1;
                  }
                }
              }
            }
          }
        } }, 10);
    }
  }

  lapso (hora, minutos, segundos)
  {
    let obj = this.relojFactory.nuevoReloj(
      this.hora, this.minutos, this.segundos,
      this.segundos2, this.minutos2, this.hora2);
    this.coleccion.push(obj);
  }

  pause ()
  {
    var h1 = this.hora;
    var h2 = this.hora2;
    var m1 = this.minutos;
    var m2 = this.minutos2;
    var s1 = this.segundos;
    var s2 = this.segundos2;

    stop();

this.relojFactory.nuevoReloj(this.hora = h1, this.minutos = m1, this.segundos = s1,
      this.segundos2 = s2, this.minutos2 = m2, this.hora2 = h2
   )
   stop
  }    

  stop ()
  {
    clearInterval(this.contador);
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.segundos2 = 0;
    this.minutos2 = 0;
    this.hora2 = 0;

    this.contador = null;

  }
}

