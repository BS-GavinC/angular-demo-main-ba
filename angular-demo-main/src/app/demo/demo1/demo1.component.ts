import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {

  monTexte : string = 'Bonjour tout le monde !'

  monEvenement = () => {
    this.monTexte = 'Oups le bouton a changé ma valeur'
  }

  monTextAValider : string = ''




}
