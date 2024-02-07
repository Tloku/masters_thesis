import { Injectable } from "@angular/core";
import { CarSearchFormStateModel } from "./car-search-form.model";
import { Action, State, StateContext } from "@ngxs/store";
import { CarSearchFormService } from "./car-search-form.service";
import { InitCarSearchForm } from "./car-search-form.actions";

@State<CarSearchFormStateModel>({
    name: "carSearchForm",
    defaults: {
        carSearchForm: undefined,
        carSearchFormDropdownOptions: undefined
    }
})
@Injectable()
export class CarSearchFormState { 

    constructor(
        private carSearchFormService: CarSearchFormService
    ) {}


    @Action(InitCarSearchForm)
    initCarSearchForm(ctx: StateContext<CarSearchFormStateModel>, action: InitCarSearchForm) {
        ctx.patchState({
            carSearchForm: this.carSearchFormService.initCarSearchForm()
        })
    }

}







