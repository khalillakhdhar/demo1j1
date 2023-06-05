import { Component } from '@angular/core';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent {
taches=["t1", "t2", "t3", "t4"]; // déclarations d'un tableaux des taches
visible=false; // initialisation de la variable de visibilité
visibility()
{
  this.visible= !this.visible;
}
}
