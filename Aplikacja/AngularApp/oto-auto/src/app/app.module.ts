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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EquipmentState } from 'src/store/states/equipment.state';
import { EquimpentRestService } from 'src/api/rest-service/equipment.rest-service';
import { CreateOfferFooterComponent } from 'src/components/create-offer-footer/create-offer-footer.component';
import { ButtonModule } from 'primeng/button';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { CreateOfferFormState } from 'src/store/states/create-offer-form.state';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { OfferViewPriceComponent } from 'src/components/offer-view-price/offer-view-price.component';
import { FilteredOffersPageComponent } from 'src/pages/filtered-offers/filtered-offers-page.component';
import { FilteredOfferCardComponent } from 'src/components/filtered-offer-card/filtered-offer-card.component';
import { FilteredOffersComponent } from 'src/components/filtered-offers/filtered-offers.component';

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
    CreateOfferFooterComponent,
    OfferViewPriceComponent,
    FilteredOffersPageComponent,
    FilteredOfferCardComponent,
    FilteredOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFormsModule,
    MatIconModule,
    TabViewModule,
    HttpClientModule,
    GalleriaModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    NgxsModule.forRoot([OfferState, EquipmentState, CreateOfferFormState]),
    NgxsFormPluginModule.forRoot()
  ],
  providers: [OfferRestService, EquimpentRestService, MessageService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
