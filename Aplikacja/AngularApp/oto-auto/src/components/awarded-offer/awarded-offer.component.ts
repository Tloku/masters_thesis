import { Component, Input, OnInit } from '@angular/core';
import { OfferCardData } from 'src/models/offer-card-data/offer-card-data.model';

@Component({
  selector: 'awarded-offer',
  templateUrl: './awarded-offer.component.html',
  styleUrls: ['./awarded-offer.component.css'],
})
export class AwardedOfferComponent {
  @Input() offer?: OfferCardData;
 
}
