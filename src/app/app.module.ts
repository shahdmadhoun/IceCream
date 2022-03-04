import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { ServicesComponent } from './services/services.component';
import { SomePhotosComponent } from './some-photos/some-photos.component';
import { ProductsComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    AboutComponent,
    OrderComponent,
    ServicesComponent,
    SomePhotosComponent,
    ProductsComponent,
    TeamComponent,
    CustomerReviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
