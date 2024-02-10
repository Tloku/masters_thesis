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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { AdditionalPropertiesComponent } from './additional-properties/additional-properties.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CarSearchFormExtendedComponent } from './car-search-form-extended/car-search-form-extended';

@NgModule({
  declarations: [
    CarSearchFormComponent,
    MotocycleSearchFormComponent,
    CreateOfferFormComponent,
    ImageUploaderComponent,
    ImageDragAndDropDirective,
    AdditionalPropertiesComponent,
    CarSearchFormExtendedComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectButtonModule,
    InputTextModule,
    InputTextareaModule,
    AccordionModule,
    CheckboxModule,
  ],
  exports: [
    CarSearchFormExtendedComponent,
    CarSearchFormComponent,
    MotocycleSearchFormComponent,
    CreateOfferFormComponent
  ],
  providers: [],
})
export class AppFormsModule {}
