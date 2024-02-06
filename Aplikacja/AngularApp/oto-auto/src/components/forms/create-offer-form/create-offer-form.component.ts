import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { debounceTime, tap } from 'rxjs';
import { BasicInfoForm, DealerDataForm, MainFeaturesForm, PriceDataForm, TechnicalDataForm, VehicleDescriptionForm, VehicleTypeForm } from 'src/api/models/form/create-offer-form';
import { UpdateBasicInfoForm, UpdateDealerDataForm, UpdateMainFeaturesForm, UpdatePriceDataForm, UpdateTechnicalDataForm, UpdateVehicleDescriptionForm, UpdateVehicleTypeForm } from 'src/store/create-offer/create-offer-form.actions';

@Component({
  selector: 'create-offer-form',
  templateUrl: './create-offer-form.component.html',
  styleUrls: ['./create-offer-form.component.css'],
})
export class CreateOfferFormComponent implements OnInit {
  stateOptions: any[] = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];
  vehicleTypeOptions: any[] = [
    'Samochód osobowy', 'Motocykl'
  ]

  vehicleTypeForm!: FormGroup
  mainFeaturesForm!: FormGroup
  basicInfoForm!: FormGroup
  technicalDataForm!: FormGroup
  vehicleDescriptionForm!: FormGroup
  priceDataForm!: FormGroup
  dealerDataForm!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _store: Store
  ) {}

  ngOnInit(): void {
    this.vehicleTypeForm = this._createVehicleTypeForm();
    this.mainFeaturesForm = this._createMainFeaturesForm();
    this.basicInfoForm = this._createBasicInfoForm();
    this.technicalDataForm = this._createTechnicalDataForm();
    this.vehicleDescriptionForm = this._createVehicleDescriptionForm();
    this.priceDataForm = this._createPriceDataForm();
    this.dealerDataForm = this._createDealerDataForm();


    this.vehicleTypeForm.valueChanges.pipe(
      debounceTime(300),
      tap((value: VehicleTypeForm) => this._store.dispatch(new UpdateVehicleTypeForm(value))) 
    ).subscribe()

    this.mainFeaturesForm.valueChanges.pipe(
      debounceTime(300),
      tap((value: MainFeaturesForm) => this._store.dispatch(new UpdateMainFeaturesForm(value))) 
    ).subscribe()
    
    this.basicInfoForm.valueChanges.pipe(
      debounceTime(300),
      tap((value: BasicInfoForm) => this._store.dispatch(new UpdateBasicInfoForm(value))) 
    ).subscribe()

    this.technicalDataForm.valueChanges.pipe(
      debounceTime(300),
      tap((value: TechnicalDataForm) => this._store.dispatch(new UpdateTechnicalDataForm(value))) 
    ).subscribe()

    this.vehicleDescriptionForm.valueChanges.pipe(
      debounceTime(300),
      tap((value: VehicleDescriptionForm) => this._store.dispatch(new UpdateVehicleDescriptionForm(value))) 
    ).subscribe()

    this.priceDataForm.valueChanges.pipe(
      debounceTime(300),
      tap((value: PriceDataForm) => this._store.dispatch(new UpdatePriceDataForm(value))) 
    ).subscribe()

    this.dealerDataForm.valueChanges.pipe(
      debounceTime(300),
      tap((value: DealerDataForm) => this._store.dispatch(new UpdateDealerDataForm(value))) 
    ).subscribe()
  }

  private _createDealerDataForm(): FormGroup {
    return this._fb.group<DealerDataForm>({
      name: this._fb.control(''),
      address: this._fb.control(''),
      phoneNumber: this._fb.control(''),
    })
  }

  private _createPriceDataForm(): FormGroup {
    return this._fb.group<PriceDataForm>({
      net: this._fb.control<boolean>(false),
      price: this._fb.control(''),
      currency: this._fb.control(''),
    });
  }

  private _createVehicleDescriptionForm(): FormGroup {
    return this._fb.group<VehicleDescriptionForm>({
      title: this._fb.control(''),
      description: this._fb.control(''),
    })
  }

  private _createTechnicalDataForm(): FormGroup {
    return this._fb.group<TechnicalDataForm>({
      yearOfProduction: this._fb.control(''),
      brand: this._fb.control(''),
      model: this._fb.control(''),
      fuelType: this._fb.control(''),
      horsePower: this._fb.control(''),
      engineCapacity: this._fb.control(''),
      numberOfDoors: this._fb.control(''),
      transmission: this._fb.control(''),
      version: this._fb.control(''),
      generation: this._fb.control(''),
      bodyType: this._fb.control(''),
      color: this._fb.control(''),
    })
  }

  private _createVehicleTypeForm(): FormGroup {
    return this._fb.group<VehicleTypeForm>({
      type: this._fb.control<string>('')
    })
  }

  private _createBasicInfoForm(): FormGroup {
    return this._fb.group<BasicInfoForm>({
      vin: this._fb.control<string>(''),
      mileage: this._fb.control<string>('')
    })
  }

  private _createMainFeaturesForm(): FormGroup {
    return this._fb.group<MainFeaturesForm>({
      destroyed: this._fb.control<boolean>(false),
      imported: this._fb.control<boolean>(false)
  })
  }
}
