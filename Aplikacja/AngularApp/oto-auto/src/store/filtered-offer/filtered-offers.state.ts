import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { FilteredOffersStateModel, OfferPreview } from "./filtered-offers-state.model";
import { GetFilteredOffers, GetFilteredOffersSuccess } from "./filtered-offers-state.actions";
import { OfferRestService } from "src/api/rest-service/offer.rest-service";
import { catchError, map } from "rxjs";


@State<FilteredOffersStateModel>({
    name: 'filteredOffers',
    defaults: {
        filteredOffers: undefined
    }
})
@Injectable()
export class FilteredOffersState {

    constructor(private _restService: OfferRestService) {}

    @Action(GetFilteredOffers)
    getFilteredOffers(ctx: StateContext<GetFilteredOffers>, action: GetFilteredOffers) {

        return this._restService.getFilteredOffers()
        .pipe(
            map((offers: OfferPreview[]) => ctx.dispatch(new GetFilteredOffersSuccess(offers))),
            catchError(error => {
                console.log(error);
                throw error;
            })
        )
    }

    @Action(GetFilteredOffersSuccess)
    getFilteredOffersSuccess(ctx: StateContext<GetFilteredOffers>, action: GetFilteredOffersSuccess) {
        const state = ctx.getState();

        ctx.setState({
            ...state,
            filteredOffers: action.filteredOffers
        })
    }
}