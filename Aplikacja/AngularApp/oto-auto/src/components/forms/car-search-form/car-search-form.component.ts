import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'car-search-form',
  templateUrl: './car-search-form.component.html',
  styleUrls: ['./car-search-form.component.css'],
})
export class CarSearchFormComponent {
  formGroup!: FormGroup;
}
