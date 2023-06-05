import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  email="";
  nom:string="";
  message="";
envoyer()
{
  alert("envoyé avec succés");
  this.message="";
  this.email = "";
  this.nom = "";
}
}
