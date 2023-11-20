import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
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
    value: boolean = false;

    @Select(EquipmentSelector.equipmentTypes)
    equipmentTypes$!: Observable<EquipmentType[]>;

    constructor(private _store: Store) {}
    
    ngOnInit(): void {
        this._store.dispatch(new GetEquipmentTypes());
    }

}