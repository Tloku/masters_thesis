import { NgModule } from '@angular/core';
import { CarSearchFormComponent } from 'src/components/forms/car-search-form/car-search-form.component';
import { MotocycleSearchFormComponent } from 'src/components/forms/motocycle-search-form-component/motocycle-search-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CarSearchFormComponent, MotocycleSearchFormComponent],
  imports: [DropdownModule, FormsModule, ReactiveFormsModule, ButtonModule],
  exports: [CarSearchFormComponent, MotocycleSearchFormComponent],
  providers: [],
})
export class AppFormsModule {}
