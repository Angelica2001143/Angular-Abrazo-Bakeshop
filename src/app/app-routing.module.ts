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
import { UserDashComponent } from './user-dash/user-dash.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent} from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { UserListComponent } from './user-list/user-list.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'product', component: ProductListComponent, pathMatch: 'full'},
  { path:'about', component: AboutComponent, pathMatch: 'full'},
  { path:'contact', component: ContactComponent, pathMatch: 'full'},
  { path:'breads', component: BreadsComponent, pathMatch: 'full'},
  { path:'pastries', component: PastriesComponent, pathMatch: 'full'},
  { path:'cakes', component: CakesComponent, pathMatch: 'full'},
  { path:'sign', component: SignUpComponent, pathMatch: 'full'},
  { path:'log', component: LogInComponent, pathMatch: 'full'},
  { path:'home', component: CarouselComponent, pathMatch: 'full'},
  { path: 'user', component: UserDashComponent, pathMatch: 'full'},
  { path: 'cart', component: CartComponent, pathMatch: 'full'},
  { path: 'admin', component: AdminComponent, pathMatch: 'full'},
  { path: 'products', component: AdminProductsComponent, pathMatch: 'full'},
  { path: 'add', component: UserListComponent, pathMatch: 'full'}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
