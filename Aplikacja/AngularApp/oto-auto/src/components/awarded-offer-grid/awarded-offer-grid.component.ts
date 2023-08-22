import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OfferCardData } from 'src/models/offer-card-data/offer-card-data.model';

@Component({
  selector: 'awarded-offer-grid',
  templateUrl: './awarded-offer-grid.component.html',
  styleUrls: ['./awarded-offer-grid.component.css']
})
export class AwardedOfferGridComponent implements OnInit {
  offers$ = new BehaviorSubject<OfferCardData[]>([]);

  ngOnInit(): void {
    const offers: OfferCardData[] = [];
    offers.push({
      name: 'Mercedes-Benz CLA 180 d AMG Line 7G-DCT',
      year: '2019',
      mileage: '55039 km',
      engineCapacity: '1 461 cm3',
      fuelType: 'Diesel',
      price: '143 500 PLN',
    })  

    offers.push({
      name: 'Audi S8 4.0 TFSI Quattro ',
      year: '2019',
      mileage: '55039 km',
      engineCapacity: '1 461 cm3',
      fuelType: 'Diesel',
      price: '143 500 PLN',
    })  


    offers.push({
      name: 'Ford Mondeo 1.6 Ambiente ',
      year: '2019',
      mileage: '55039 km',
      engineCapacity: '1 461 cm3',
      fuelType: 'Diesel',
      price: '143 500 PLN',
    })  


    offers.push({
      name: 'Skoda Octavia 2 0tdi 150km Style Tablet Full Ledy 2019rok I Wl Salon Pl',
      year: '2019',
      mileage: '55039 km',
      engineCapacity: '1 461 cm3',
      fuelType: 'Diesel',
      price: '143 500 PLN',
    })  


    offers.push({
      name: 'Jaguar XF 2.0 i4D AWD Prestige ',
      year: '2019',
      mileage: '55039 km',
      engineCapacity: '1 461 cm3',
      fuelType: 'Diesel',
      price: '143 500 PLN',
    })  


    offers.push({
      name: 'Volkswagen Tiguan Volkswagen Tiguan 2.0 Tdi 4motion Fv23',
      year: '2019',
      mileage: '55039 km',
      engineCapacity: '1 461 cm3',
      fuelType: 'Diesel',
      price: '143 500 PLN',
    })  

    offers.push({
      name: 'Land Rover Range Rover Velar 2.0 Si4',
      year: '2019',
      mileage: '55039 km',
      engineCapacity: '1 461 cm3',
      fuelType: 'Diesel',
      price: '143 500 PLN',
    })  

    offers.push({
      name: 'Mercedes-Benz Klasa A 180 AMG Line',
      year: '2019',
      mileage: '55039 km',
      engineCapacity: '1 461 cm3',
      fuelType: 'Diesel',
      price: '143 500 PLN',
    })  

    this.offers$.next(offers);
  }
}
