import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngxs/store";
import { GetOfferById } from "src/store/actions/offer-actions";


@Component({
    selector: 'offer-view-component',
    templateUrl: './offer-view.component.html',
    styleUrls: ['./offer-view.component.css'],
})
export class OfferViewComponent implements OnInit {
    constructor(
        private _store: Store,
        private _activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const offerId: string | null = this._activatedRoute.snapshot.paramMap.get('offerId'); 
        this._store.dispatch(new GetOfferById(+offerId!!))
    }


}