import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetAwardedOffers } from 'src/store/actions/offer-actions';
import { OfferCardComponentModel } from 'src/store/model/offer-card-component.model';
import { OffersSelector } from 'src/store/selectors/offers.selector';

@Component({
  selector: 'awarded-offer-grid',
  templateUrl: './awarded-offer-grid.component.html',
  styleUrls: ['./awarded-offer-grid.component.css']
})
export class AwardedOfferGridComponent implements OnInit {
  
  @Select(OffersSelector.offerCards)
  offers$!: Observable<OfferCardComponentModel[]>

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(new GetAwardedOffers());
  }
}
