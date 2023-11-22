import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { CreateOfferFormStateModel } from "src/api/models/form/create-offer-form";

@State<CreateOfferFormStateModel>({
    name: 'createOffer',
    defaults: {
        createOfferForm: {
            model: undefined
        }
    }
  })
@Injectable()
export class CreateOfferFormState {}