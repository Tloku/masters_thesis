import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'car-search-form',
  templateUrl: './car-search-form.component.html',
  styleUrls: ['./car-search-form.component.css'],
})
export class CarSearchFormComponent {

  formGroup!: FormGroup;

  constructor(private _router: Router) {}

  goToBrowserPage() {
    this._router.navigateByUrl('/browse')
  }
    
  filterOffers() {
    this._router.navigateByUrl('/browse')
  }
}
