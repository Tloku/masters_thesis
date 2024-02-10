import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { InitCarSearchForm } from 'src/store/car-search-form/car-search-form.actions';
import { CarSearchForm } from 'src/store/car-search-form/car-search-form.model';
import { CarSearchFormSelector } from 'src/store/car-search-form/car-search-form.selectors';

@Component({
  selector: 'car-search-form',
  templateUrl: './car-search-form.component.html',
  styleUrls: ['./car-search-form.component.css'],
})
export class CarSearchFormComponent {

  @Select(CarSearchFormSelector.carSearchForm)
  carSearchForm$!: Observable<FormGroup<CarSearchForm> | undefined> 

  constructor(
    private _store: Store,
    private _router: Router
  ) {
    debugger
    this._store.dispatch(new InitCarSearchForm())
  }

  goToBrowserPage() {
    this._router.navigateByUrl('/browse')
  }
    
  filterOffers() {
    this._router.navigateByUrl('/browse')
  }
}
