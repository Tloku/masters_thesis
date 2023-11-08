import { NgModule } from '@angular/core';
import { CarSearchFormComponent } from 'src/components/forms/car-search-form/car-search-form.component';
import { MotocycleSearchFormComponent } from 'src/components/forms/motocycle-search-form-component/motocycle-search-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CreateOfferFormComponent } from './create-offer-form/create-offer-form.component';

@NgModule({
  declarations: [CarSearchFormComponent, MotocycleSearchFormComponent, CreateOfferFormComponent],
  imports: [DropdownModule, FormsModule, ReactiveFormsModule, ButtonModule],
  exports: [CarSearchFormComponent, MotocycleSearchFormComponent, CreateOfferFormComponent],
  providers: [],
})
export class AppFormsModule {}
