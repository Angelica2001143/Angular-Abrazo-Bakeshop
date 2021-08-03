import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadsComponent } from './breads/breads.component';
import { CakesComponent } from './cakes/cakes.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path: '', redirectTo: 'carousel', pathMatch: 'full'},
  { path:'about', component: AboutComponent, pathMatch: 'full'},
  { path:'contact', component: ContactComponent, pathMatch: 'full'},
  { path:'breads', component: BreadsComponent, pathMatch: 'full'},
  { path:'cakes', component: CakesComponent, pathMatch: 'full'},
  { path:'sign', component: SignUpComponent, pathMatch: 'full'},
  { path:'carousel', component: CarouselComponent, pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
