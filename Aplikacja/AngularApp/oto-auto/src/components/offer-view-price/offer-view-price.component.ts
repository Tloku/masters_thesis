import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { OfferActivityComponentModel } from "src/store/model/offer-card-component.model";
import { OffersSelector } from "src/store/selectors/offers.selector";

@Component({
    selector: 'offer-view-price',
    templateUrl: './offer-view-price.component.html',
    styleUrls: ['./offer-view-price.component.css'],
})
export class OfferViewPriceComponent {

    @Select(OffersSelector.offer)
    offer$!: Observable<OfferActivityComponentModel>
    

    getNumberFromString(num: string): number {
        return parseInt(num.replace(" ", ""));
    }

    getLoanFromNumber(num: string): number {
        return Math.round(this.getNumberFromString(num) / 12)
    }
}