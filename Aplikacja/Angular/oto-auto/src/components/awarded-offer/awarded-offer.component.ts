import { Component } from '@angular/core';
import { OfferCardData } from 'src/models/offer-card-data/offer-card-data..model';

@Component({
  selector: 'awarded-offer',
  templateUrl: './awarded-offer.component.html',
  styleUrls: ['./awarded-offer.component.css'],
})
export class AwardedOfferComponent {
  offer: OfferCardData = {
    name: 'Mercedes-Benz CLA 180 d AMG Line 7G-DCT',
    year: '2019',
    mileage: '55039 km',
    engineCapacity: '1 461 cm3',
    fuelType: 'Diesel',
    price: '143 500 PLN',
  };
}
