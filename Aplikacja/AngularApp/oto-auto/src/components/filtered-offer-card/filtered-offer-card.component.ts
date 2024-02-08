import { Component, Input } from "@angular/core";
import { OfferPreview } from "src/store/filtered-offer/filtered-offers-state.model";


@Component({
    selector: 'filtered-offer-card',   
    templateUrl: './filtered-offer-card.component.html',
    styleUrls: ['./filtered-offer-card.component.css']
})
export class FilteredOfferCardComponent {
    
    @Input()
    offer: OfferPreview | undefined;

}