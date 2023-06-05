import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TachesComponent } from './taches/taches.component';
import { CompteurComponent } from './compteur/compteur.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    WelcomeComponent,
    TachesComponent,
    CompteurComponent,
    TablesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
