import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { MainSearchEngineComponent } from 'src/components/main-search-engine/main-search-engine.component';
import { AppFormsModule } from 'src/components/forms/app-forms.module';
import { MatIconModule } from '@angular/material/icon';
import { TabViewModule } from 'primeng/tabview';
import { AwardedOfferComponent } from 'src/components/awarded-offer/awarded-offer.component';
import { MainPageComponent } from 'src/pages/main/main-page.component';
import { AwardedOfferGridComponent } from 'src/components/awarded-offer-grid/awarded-offer-grid.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { OfferState } from 'src/store/states/offer.state';
import { OfferRestService } from 'src/api/rest-service/offer.rest-service';
import {GalleriaModule} from 'primeng/galleria';
import { VehicleImagesGalleryComponent } from 'src/components/vehicle-images-gallery/vehicle-images-gallery.component';
import { OfferViewComponent } from 'src/pages/offer-view/offer-view.component';
import { OfferDetailsComponent } from 'src/components/offer-details/offer-details.component';
import { CreateOfferComponent } from 'src/pages/create-offer/create-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainSearchEngineComponent,
    AwardedOfferComponent,
    MainPageComponent,
    AwardedOfferGridComponent,
    VehicleImagesGalleryComponent,
    OfferViewComponent,
    OfferDetailsComponent,
    CreateOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFormsModule,
    MatIconModule,
    TabViewModule,
    HttpClientModule,
    GalleriaModule,
    NgxsModule.forRoot([OfferState])
  ],
  providers: [OfferRestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
