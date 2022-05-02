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
import { GenerateTicketComponent } from './generate-ticket/generate-ticket.component';
import { GenerateTicket2Component } from './generate-ticket2/generate-ticket2.component';
import { GiveawayComponent } from './giveaway/giveaway.component';
import { GiveawayEndComponent } from './giveaway-end/giveaway-end.component';
import { HelpComponent } from './help/help.component';
import { InformationComponent } from './information/information.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewsletterEndComponent } from './newsletter-end/newsletter-end.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ShowGiveawayComponent } from './show-giveaway/show-giveaway.component';
import { TicketEndComponent } from './ticket-end/ticket-end.component';

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
        { path: 'help', component: HelpComponent },
        { path: 'information', component: InformationComponent },
        { path: 'show-giveaway', component: ShowGiveawayComponent },
        { path: 'newsletter-end', component: NewsletterEndComponent },
        { path: 'ticket-end', component: TicketEndComponent },
        { path: 'profile-page', component: ProfilePageComponent },
        { path: 'newsletter', component: NewsletterComponent },
        { path: 'giveaway', component: GiveawayComponent },
        { path: 'generate-ticket', component: GenerateTicketComponent },
        { path: 'generate-ticket2', component: GenerateTicket2Component },
        { path: 'giveaway-end', component: GiveawayEndComponent }
    ])
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
    GenerateTicketComponent,
    GenerateTicket2Component,
    GiveawayComponent,
    GiveawayEndComponent,
    HelpComponent,
    InformationComponent,
    NewsletterComponent,
    NewsletterEndComponent,
    ProfilePageComponent,
    ShowGiveawayComponent,
    TicketEndComponent
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
