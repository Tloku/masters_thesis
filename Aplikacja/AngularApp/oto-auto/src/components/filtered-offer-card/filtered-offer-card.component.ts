import { Component } from "@angular/core";
import { OfferActivityComponentModel } from "src/store/offer/offer-card-component.model";


@Component({
    selector: 'filtered-offer-card',   
    templateUrl: './filtered-offer-card.component.html',
    styleUrls: ['./filtered-offer-card.component.css']
})
export class FilteredOfferCardComponent {
    
    public offer!: any;

}