import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ProductListComponent } from './product-list/product-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { LogInComponent}  from './log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { UserListComponent } from './user-list/user-list.component';



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
    PastriesComponent,
    ProductListComponent,
    SignUpComponent,
    FeedbackComponent,
    UserDashComponent,
    LogInComponent,
    CartComponent,
    AdminComponent,
    AdminProductsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }