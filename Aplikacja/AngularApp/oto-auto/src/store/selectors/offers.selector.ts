import { Selector } from "@ngxs/store";
import { OfferActivityComponentModel, OfferCardComponentModel, OfferCardComponentStateModel } from "../model/offer-card-component.model";
import { OfferState } from "../states/offer.state";
import { OfferImage } from "../model/offer-image.model";

export class OffersSelector {

    @Selector([OfferState])
    static offerCards(state: OfferCardComponentStateModel): OfferCardComponentModel[] {
        return state.offerCardsComponent;
    }

    @Selector([OfferState])
    static vehicleImages(state: OfferCardComponentStateModel): OfferImage[] {
        return state.offer.offerImages;
    }

    @Selector([OfferState])
    static offer(state: OfferCardComponentStateModel): OfferActivityComponentModel {
        return state.offer;
    }
}