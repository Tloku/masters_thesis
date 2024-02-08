import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Select, Selector, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { CarSearchValues, CarSearchForm } from "src/store/car-search-form/car-search-form.model";
import { CarSearchFormSelector } from "src/store/car-search-form/car-search-form.selectors";
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

    showPictureWhenFiltersAreNull: boolean = true;


    constructor(
        private _store: Store,
        private _router: Router
    ) {}

    ngOnInit(): void {
        let carSearchForm: FormGroup<CarSearchForm> | undefined  = this._store.selectSnapshot(CarSearchFormSelector.carSearchForm);
        
        if (carSearchForm) {
            let carSearchValues: CarSearchValues = carSearchForm.getRawValue();
            this._store.dispatch(new GetFilteredOffers(carSearchValues))
            this.showPictureWhenFiltersAreNull = false
            return;
        }
        this.showPictureWhenFiltersAreNull = true;
    }
    
    navigateToOffer(offerId: number) {
        this._router.navigateByUrl("/offer/" + offerId);
    }
}