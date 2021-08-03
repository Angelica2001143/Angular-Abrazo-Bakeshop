import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadsComponent } from './breads/breads.component';
import { CakesComponent } from './cakes/cakes.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PastriesComponent } from './pastries/pastries.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'product', component: ProductListComponent, pathMatch: 'full'},
  { path:'about', component: AboutComponent, pathMatch: 'full'},
  { path:'contact', component: ContactComponent, pathMatch: 'full'},
  { path:'breads', component: BreadsComponent, pathMatch: 'full'},
  { path:'pastries', component: PastriesComponent, pathMatch: 'full'},
  { path:'cakes', component: CakesComponent, pathMatch: 'full'},
  { path:'sign', component: SignUpComponent, pathMatch: 'full'},
  { path:'home', component: CarouselComponent, pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
