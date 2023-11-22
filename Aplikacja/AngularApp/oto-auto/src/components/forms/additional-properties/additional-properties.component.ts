import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { Observable, map } from "rxjs";
import { Equipment } from "src/api/models/equipment";
import { EquipmentType } from "src/api/models/equipment-type";
import { GetEquipmentTypes } from "src/store/actions/equipment-actions";
import { EquipmentSelector } from "src/store/selectors/equipment.selector";


@Component({
    selector: 'additional-properties',
    templateUrl: './additional-properties.component.html',
    styleUrls: ['./additional-properties.component.css'],
})
export class AdditionalPropertiesComponent implements OnInit {
    stateOptions: any[] = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];
    @Select(EquipmentSelector.equipmentTypes)
    equipmentTypes$!: Observable<EquipmentType[]>;

    constructor(
        private _fb: FormBuilder,
        private _store: Store
    ) {}

    technicalDataForm!: FormGroup;
    additionalTechnicalDataForm!: FormGroup;

    equipmentForm: FormGroup = this._fb.group({
        equipmentTypes: this._fb.array([])
    })

    getEquipmentTypesFromEquipmentForm(): FormArray {
        return this.equipmentForm.get('equipmentTypes') as FormArray
    }

    getEquipmentValues(equipmentFormGroup: FormGroup): FormArray {
        return equipmentFormGroup.get('values') as FormArray
    }

    equipmentFormGroupArray: FormGroup[] = [];

    ngOnInit(): void {
        this._store.dispatch(new GetEquipmentTypes());
        this.technicalDataForm = this._createTechnicalDataForm();
        this.additionalTechnicalDataForm = this._createAdditionalTechnicalData()
        // this.equipmentFormGroupArray.push(equipmentFormToPush.get("equipments") as FormGroup)  

        this.equipmentForm.valueChanges.subscribe(value => console.log(value))

        this.equipmentTypes$.pipe(
            map((equipmentTypes: EquipmentType[]) => {
                equipmentTypes.forEach((equipmentType: EquipmentType) => {
                    let form = this.getEquipmentTypesFromEquipmentForm();
                    form.push(this._createEquipmentForm(equipmentType));
                })
            })
        ).subscribe()
    }

    private _createAdditionalTechnicalData(): FormGroup {
        return this._fb.group({
            drive: this._fb.control<string>('', [Validators.required]),
            emission: this._fb.control<string>('', [Validators.required]),
            colorType: this._fb.control<string>('', [Validators.required]),
            numberOfSeats: this._fb.control<string>('', [Validators.required])
        })
    }

    private _createTechnicalDataForm(): FormGroup {
        return this._fb.group({
            isWheelOnTheRightSide: this._fb.control<boolean>(false)
        })
    }

    private _createEquipmentForm(equipmentTypes: EquipmentType): FormGroup {
        var equipmentForm: FormGroup = this._fb.group({
            type: equipmentTypes.type,
            equipments: this._fb.group({
                values: this._fb.array([])
            })
        })

        var equipmentFormGroup: FormGroup = equipmentForm.get('equipments') as FormGroup

        equipmentTypes.equipments.forEach(
            (equipment: Equipment) => {
                let formArray = equipmentFormGroup.get('values') as FormArray;
                formArray.push(this._fb.group({
                    id: equipment.id,
                    name: equipment.name,
                    value: [false]
                }))
            }
        )
        return equipmentForm
    }

    
  getFormArrayControls(formArray: AbstractControl | null): AbstractControl[] {
    if (formArray instanceof FormArray) {
      return formArray.controls;
    }
    return [];
  }

  getFormControl(control: AbstractControl | null): FormControl {
    debugger;
    if (control instanceof FormControl) {
      return control;
    }

    return new FormControl(false);
  }

  handleCheckboxClick(checkbox: FormControl) {
    checkbox.patchValue(!checkbox.value)
  }
}