import { CreateOfferFormStateModel } from "src/api/models/form/create-offer-form";
import { CreateOfferFormState } from "../states/create-offer-form.state";
import { Selector } from "@ngxs/store";

export class CreateOfferSelector { 

    @Selector([CreateOfferFormState])
    static createOfferForm(state: CreateOfferFormStateModel): CreateOfferFormStateModel {
        return state;
    }
}
