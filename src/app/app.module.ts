import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { BreadsComponent } from './breads/breads.component';
import { CakesComponent } from './cakes/cakes.component';
import { Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PastriesComponent } from './pastries/pastries.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    CarouselComponent,
    FooterComponent,
    BreadsComponent,
    CakesComponent,
    AboutComponent,
    ContactComponent,
    PastriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }