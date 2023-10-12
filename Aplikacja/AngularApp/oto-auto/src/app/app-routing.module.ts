import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/pages/main/main-page.component';
import { OfferViewComponent } from 'src/pages/offer-view/offer-view.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'offer/:offerId', component: OfferViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
