import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { VehicleDetailsRow } from "src/store/model/vehicle-details-row.model";
import { OffersSelector } from "src/store/offer/offers.selector";

@Component({
    selector: 'offer-details',
    templateUrl: './offer-details.component.html',
    styleUrls: ['./offer-details.component.css'],
})
export class OfferDetailsComponent {

    @Select(OffersSelector.offerDetails)
    offerDetails$!: Observable<VehicleDetailsRow[]>
}