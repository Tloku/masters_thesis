import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable, takeWhile, tap } from "rxjs";
import { CreateOfferFormStateModel } from "src/api/models/form/create-offer-form";
import { CreateOffer } from "src/store/offer/offer-actions";
import { CreateOfferSelector } from "src/store/create-offer/create-offer.selector";
import { CreateOfferFormState } from "src/store/create-offer/create-offer-form.state";

@Component({
    selector: 'create-offer-footer',
    templateUrl: './create-offer-footer.component.html',
    styleUrls: ['./create-offer-footer.component.css'],
})
export class CreateOfferFooterComponent implements OnInit {
    
    
    constructor(private _store: Store) {}
    
    ngOnInit(): void {}
    
    createOffer(): void {
        this._store.select(CreateOfferSelector.createOfferForm).subscribe(
            (value: CreateOfferFormStateModel) => {
                this._store.dispatch(new CreateOffer(value))
            } 
        ).unsubscribe();
    }


}