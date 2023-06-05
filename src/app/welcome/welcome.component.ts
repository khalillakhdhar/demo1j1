import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  primary: boolean = false;
message:string='welcome to angular'
adresse="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
constructor()
{
  this.message="Bienvenu à la formation angular"

}
showMessage()
{
  alert("hello this is my message");
}
}
