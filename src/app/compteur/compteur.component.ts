import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent {
  compteurValue:number=0;
  jour="4";
  increment()
  {
    this.compteurValue++;
  }
  decrement()
  {
    this.compteurValue--;
  }

}
