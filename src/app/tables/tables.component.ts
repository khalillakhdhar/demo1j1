import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  //@Directive({ selector:"[ccCardHover]"}) n'est plus utilisé
titre ="les tableaux angular";
dateValue: Date = new Date();

  technos=['angular','spring','symfony','php','java'];
formateurs=[
  {nom:"Lakhdhar",prenom:"Khalil",experience:12},
  {nom:"F2nom",prenom:"F2prénom",experience:10},
  {nom:"F3nom",prenom:"F3prénom",experience:3},
]

}
