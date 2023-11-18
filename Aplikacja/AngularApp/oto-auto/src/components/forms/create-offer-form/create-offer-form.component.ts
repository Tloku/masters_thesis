import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-offer-form',
  templateUrl: './create-offer-form.component.html',
  styleUrls: ['./create-offer-form.component.css'],
})
export class CreateOfferFormComponent {
    stateOptions: any[] = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];
    stateOptions2: any[] = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];
    value: boolean = false;
    value2: boolean = false;
    form = new FormGroup({
        vehicleType: new FormControl(),
        destroyed: new FormControl(),
        imported: new FormControl(),
        vin: new FormControl(),
        mileage: new FormControl(),
        yearOfProduction: new FormControl(),
        brand: new FormControl(),
        model: new FormControl(),
        fuelType: new FormControl(),
        horsepower: new FormControl(),
        engineCapacity: new FormControl(),
        numberOfDoors: new FormControl(),
        transmission: new FormControl(),
        version: new FormControl(),
        generation: new FormControl(),
        bodyType: new FormControl(),
        color: new FormControl(),
    })
}
