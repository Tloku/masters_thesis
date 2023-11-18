import { NgModule } from '@angular/core';
import { CarSearchFormComponent } from 'src/components/forms/car-search-form/car-search-form.component';
import { MotocycleSearchFormComponent } from 'src/components/forms/motocycle-search-form-component/motocycle-search-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CreateOfferFormComponent } from './create-offer-form/create-offer-form.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageDragAndDropDirective } from 'src/directives/image-drag-and-drop';

@NgModule({
  declarations: [
    CarSearchFormComponent,
    MotocycleSearchFormComponent,
    CreateOfferFormComponent,
    ImageUploaderComponent,
    ImageDragAndDropDirective
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectButtonModule,
    InputTextModule
  ],
  exports: [
    CarSearchFormComponent,
    MotocycleSearchFormComponent,
    CreateOfferFormComponent
  ],
  providers: [],
})
export class AppFormsModule {}
