import { Selector } from "@ngxs/store";
import { FilteredOffersState } from "./filtered-offers.state";
import { FilteredOffersStateModel, OfferPreview } from "./filtered-offers-state.model";


export class FilteredOffersSelector {

    @Selector([FilteredOffersState])
    static filteredOffers(state: FilteredOffersStateModel): OfferPreview[] | undefined {
        return state.filteredOffers
    }
}