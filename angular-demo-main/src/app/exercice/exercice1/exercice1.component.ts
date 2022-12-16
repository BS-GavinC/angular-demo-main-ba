import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component {

  get minute() : number {
    return Math.floor(this.compteur / 60)
  }

  get seconde() : number {
    return this.compteur % 60
  }

  compteur : number = 0

  interval! : NodeJS.Timer;

  isCounting : boolean = false

  start(){
    console.log('start');
    this.interval = setInterval(() => {this.compteur++}, 1000)
    this.isCounting = true;
  }

  pause(){
    console.log('pause');
    clearInterval(this.interval)
    this.isCounting = false;
  }

  reset(){
    console.log('reset');
    this.compteur = 0
  }

}
