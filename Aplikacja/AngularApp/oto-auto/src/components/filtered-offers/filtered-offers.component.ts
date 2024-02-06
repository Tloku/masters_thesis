import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Select, Selector, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { GetFilteredOffers } from "src/store/filtered-offer/filtered-offers-state.actions";
import { OfferPreview } from "src/store/filtered-offer/filtered-offers-state.model";
import { FilteredOffersSelector } from "src/store/filtered-offer/filtered-offers-state.selector";


@Component({
    selector: 'filtered-offers',   
    templateUrl: './filtered-offers.component.html',
    styleUrls: ['./filtered-offers.component.css']
})
export class FilteredOffersComponent implements OnInit {
    
    @Select(FilteredOffersSelector.filteredOffers)
    filteredOffers$!: Observable<OfferPreview[] | undefined>

    constructor(
        private _store: Store,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this._store.dispatch(new GetFilteredOffers())
    }
    
    navigateToOffer(offerId: number) {
        this._router.navigateByUrl("/offer/" + offerId);
    }
}