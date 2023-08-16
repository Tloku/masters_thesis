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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSearchEngineComponent,
    AwardedOfferComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFormsModule,
    MatIconModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
