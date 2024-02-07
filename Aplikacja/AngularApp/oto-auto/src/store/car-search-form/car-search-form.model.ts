import { FormControl, FormGroup } from "@angular/forms";

export interface CarSearchFormStateModel {
    carSearchForm?: FormGroup<CarSearchForm>;
    carSearchFormDropdownOptions?: CarSearchFormDropdownOptions
}


export interface CarSearchForm {
    bodyType: FormControl<string | null>;
    brand: FormControl<string | null>;
    model: FormControl<string | null>;
    generation: FormControl<string | null>;
    priceFrom: FormControl<string | null>;
    priceTo: FormControl<string | null>;
    yearFrom: FormControl<string | null>;
    yearTo: FormControl<string | null>;
    fuelType: FormControl<string | null>;
    mileageFrom: FormControl<string | null>;
    mileageTo: FormControl<string | null>;
}

export interface CarSearchFormDropdownOptions {
    bodyTypeOptions: string[];
    brandOptions: string[];
    generationOptions: string[];
    priceOptions: string[];
    fuelTypeOptions: string[];
    mileageOptions: string[];
}