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
            bodyType: this._fb.control<string | null>(null),
            brand: this._fb.control<string | null>(null),
            model: this._fb.control<string | null>(null),
            generation: this._fb.control<string | null>(null),
            priceFrom: this._fb.control<string | null>(null),
            priceTo: this._fb.control<string | null>(null),
            yearFrom: this._fb.control<string | null>(null),
            yearTo: this._fb.control<string | null>(null),
            fuelType: this._fb.control<string | null>(null),
            mileageFrom: this._fb.control<string | null>(null),
            mileageTo: this._fb.control<string | null>(null),
        })
    }
}