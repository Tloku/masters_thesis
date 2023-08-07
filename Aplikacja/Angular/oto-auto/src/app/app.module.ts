import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { MainSearchEngineComponent } from 'src/components/main-search-engine/main-search-engine.component';
import { TabViewModule } from 'primeng/tabview';
import { CarSearchFormComponent } from 'src/components/forms/car-search-form/car-search-form.component';
import { MotocycleSearchFormComponent } from 'src/components/forms/motocycle-search-form-component/motocycle-search-form.component';
import { MatIconModule } from '@angular/material/icon';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSearchEngineComponent,
    CarSearchFormComponent,
    MotocycleSearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    TabViewModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
