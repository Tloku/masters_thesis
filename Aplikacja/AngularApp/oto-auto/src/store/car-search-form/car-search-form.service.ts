import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CarSearchForm } from "./car-search-form.model";

@Injectable({
    providedIn: 'root'
})
export class CarSearchFormService {

    constructor(
        private _fb: FormBuilder
    ) {}

    initCarSearchForm(): FormGroup<CarSearchForm>  {
        return this._fb.group<CarSearchForm>({
            bodyType: this._fb.control<string>(''),
            brand: this._fb.control<string>(''),
            model: this._fb.control<string>(''),
            generation: this._fb.control<string>(''),
            priceFrom: this._fb.control<string>(''),
            priceTo: this._fb.control<string>(''),
            yearFrom: this._fb.control<string>(''),
            yearTo: this._fb.control<string>(''),
            fuelType: this._fb.control<string>(''),
            mileageFrom: this._fb.control<string>(''),
            mileageTo: this._fb.control<string>(''),
        })
    }
}