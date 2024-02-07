import { Selector } from "@ngxs/store";
import { CarSearchFormState } from "./car-search-form.state";
import { CarSearchForm, CarSearchFormStateModel } from "./car-search-form.model";
import { FormGroup } from "@angular/forms";


export class CarSearchFormSelector {


    @Selector([CarSearchFormState])
    static carSearchForm(state: CarSearchFormStateModel): FormGroup<CarSearchForm> | undefined {
        return state.carSearchForm
    } 
}