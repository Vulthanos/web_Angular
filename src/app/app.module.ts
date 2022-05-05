import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './singin/singin.component';
import { SliderComponent } from './slider/slider.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SliderResultComponent } from './slider-result/slider-result.component';
import { LoadScriptsService } from './load-scripts.service';
import { AngularFireModule} from '@angular/fire/compat';
import {environment} from "../environments/environment";
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ProductsComponent } from './products/products.component';
import { CreditCardShippingComponent } from './credit-card-shipping/credit-card-shipping.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from './tutorials-details/tutorials-details.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SliderComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'search', component: SearchResultComponent },
      { path: 'result', component: SliderResultComponent},
        {path: 'fernando', component: ProductListComponent},
        {path: 'firestore', component: ProductsComponent},
        {path: 'shipping2', component: CreditCardShippingComponent},
        { path: 'tutorials', component: TutorialsListComponent },
        { path: 'add', component: AddTutorialComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FooterComponent,
    LoginComponent,
    SinginComponent,
    SliderComponent,
    SearchResultComponent,
    SliderResultComponent,
    ProductsComponent,
    CreditCardShippingComponent,
    AddTutorialComponent,
    TutorialsListComponent,
    TutorialsDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ],
    providers: [
        LoadScriptsService
    ]
})

export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
