import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TachesComponent } from './taches/taches.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    WelcomeComponent,
    TachesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
