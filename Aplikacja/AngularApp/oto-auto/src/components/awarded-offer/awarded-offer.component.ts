import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferCardComponentModel } from 'src/store/model/offer-card-component.model';

@Component({
  selector: 'awarded-offer',
  templateUrl: './awarded-offer.component.html',
  styleUrls: ['./awarded-offer.component.css'],
})
export class AwardedOfferComponent {
  @Input() offer?: OfferCardComponentModel;

  constructor(private _router: Router) {}

  onOfferClick(): void {
    this._router.navigateByUrl('/offer/' + this.offer?.offerId);
  } 
}
