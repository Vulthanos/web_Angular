import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SinginComponent } from './components/singin/singin.component';
import { SliderComponent } from './components/slider/slider.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SliderResultComponent } from './components/slider-result/slider-result.component';
import { LoadScriptsService } from './services/load-scripts.service';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from "../environments/environment";
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ProductsComponent } from './components/products/products.component';
import { CreditCardShippingComponent } from './components/credit-card-shipping/credit-card-shipping.component';
import { GenerateTicketComponent } from './components/generate-ticket/generate-ticket.component';
import { GenerateTicket2Component } from './components/generate-ticket2/generate-ticket2.component';
import { GiveawayComponent } from './components/giveaway/giveaway.component';
import { GiveawayEndComponent } from './components/giveaway-end/giveaway-end.component';
import { HelpComponent } from './components/help/help.component';
import { InformationComponent } from './components/information/information.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NewsletterEndComponent } from './components/newsletter-end/newsletter-end.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ShowGiveawayComponent } from './components/show-giveaway/show-giveaway.component';
import { TicketEndComponent } from './components/ticket-end/ticket-end.component';
import { SuccessfulPurchaseComponent } from './components/successful-purchase/successful-purchase.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: SliderComponent},
            {path: 'search', component: SearchResultComponent},
            {path: 'result', component: SliderResultComponent},
            {path: 'help', component: HelpComponent},
            {path: 'information', component: InformationComponent},
            {path: 'show-giveaway', component: ShowGiveawayComponent},
            {path: 'newsletter-end', component: NewsletterEndComponent},
            {path: 'ticket-end', component: TicketEndComponent},
            {path: 'profile-page', component: ProfilePageComponent},
            {path: 'newsletter', component: NewsletterComponent},
            {path: 'giveaway', component: GiveawayComponent},
            {path: 'generate-ticket', component: GenerateTicketComponent},
            {path: 'generate-ticket2', component: GenerateTicket2Component},
            {path: 'giveaway-end', component: GiveawayEndComponent},
            {path: 'cart', component: ProductsComponent},
            {path: 'shipping', component: CreditCardShippingComponent},
            {path: 'success', component: SuccessfulPurchaseComponent}
        ]),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        FooterComponent,
        LoginComponent,
        SinginComponent,
        SliderComponent,
        SearchResultComponent,
        SliderResultComponent,
        ProductsComponent,
        CreditCardShippingComponent,
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
        TicketEndComponent,
        ProductsComponent,
        CreditCardShippingComponent,
        SuccessfulPurchaseComponent
    ],
  bootstrap: [
    AppComponent
  ],
    providers: [
        LoadScriptsService
    ]
})

export class AppModule { }


