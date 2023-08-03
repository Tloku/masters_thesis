import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { MainSearchEngineComponent } from 'src/components/main-search-engine/main-search-engine.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainSearchEngineComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
