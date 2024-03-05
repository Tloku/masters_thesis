import './additional-properties.component.scss'
import { useFormik } from 'formik';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { CreateOfferFormStateModel, Equipment, EquipmentForm, EquipmentItemsForm, EquipmentType, EquipmentValuesForm } from '../../../redux/model/create-offer-form.model';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit/react';
import { RootState } from '../../../redux/store/store';
import { getEquipmentTypes } from '../../../redux/state/equipmentSlice';
import { clearCreateOfferForm, saveAdditionalPropertiesValues } from '../../../redux/state/create-offer-form.slice';

const stateOptions: any[] = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];

export const AdditionalProperties: React.FC = () => {
    const equipmentTypes: EquipmentType[] = useSelector((state: RootState) => state.equipmentType.equipmentTypes)
    const formDraft: CreateOfferFormStateModel = useSelector((state: RootState) => state.createOfferForm);
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

    const formik = useFormik({
        initialValues: formDraft,
        onSubmit: () => {
            formik.resetForm();
            dispatch(clearCreateOfferForm());
        }
    });

    useEffect(() => {
        dispatch(saveAdditionalPropertiesValues(formik.values.additionalProperties!))
    }, [formik.values.additionalProperties])

    useEffect(() => {
        dispatch(getEquipmentTypes())
    }, [dispatch])
    
    useEffect(() => {
        if (!equipmentTypes || equipmentTypes.length == 0) {
            return;
        }
        const equipmentForms: EquipmentForm[] = [];
        equipmentTypes.forEach((equipmentType: EquipmentType) => {
            equipmentForms.push(createEquipmentForm(equipmentType));
        })

        formik.setFieldValue("additionalProperties.equipmentForm.equipmentTypes", equipmentForms)
    }, [equipmentTypes])


    const equipmentFormik: EquipmentForm[] | undefined = formik.values.additionalProperties?.equipmentForm?.equipmentTypes;

    const createEquipmentForm = (equipmentType: EquipmentType) => {
        const equipmentValues: EquipmentValuesForm = {
            values: []
        }

        const equipmentForm: EquipmentForm = {
            type: equipmentType.type,
            equipments: equipmentValues 
        }
        const array: EquipmentItemsForm[] = []
        equipmentType.equipments.forEach((equipment: Equipment) => {
            array.push({
                id: equipment.id,
                name: equipment.name,
                value: false
            })
        })

        equipmentValues.values = array
        return equipmentForm
    }

    const handleEquipmentValueChange = (indexForm: number, eqIndex: number, value: boolean) => {
        const updatedEquipmentFormik = equipmentFormik!.map((form: EquipmentForm, idx: number) => {
            if (idx !== indexForm) return form;
            
            const updatedEquipments = {
                ...form.equipments,
                values: form.equipments.values.map((eq: EquipmentItemsForm, idx: number) => {
                    if (idx !== eqIndex) return eq;
                    return { ...eq, value };
                })
            };
            
            return { ...form, equipments: updatedEquipments };
        });
        formik.setFieldValue('additionalProperties.equipmentForm.equipmentTypes', updatedEquipmentFormik);
    }

    return <div className="additional-properites-wrapper">
        <Accordion multiple>
            <AccordionTab header="Dane techniczne">
                <form>
                    <div className="technical-data">
                        <div className="row">
                            <h3>Kierownica po prawej (anglik)</h3>
                            <SelectButton
                                className="technical-data-button"
                                options={stateOptions}
                            ></SelectButton>
                        </div>
                    </div>
                </form>

                <form>
                    <div className="additional-technical-data">
                        <div className="row">
                            <span className="p-float-label">
                                <InputText 
                                    id="drive"
                                    value={formik.values.additionalProperties?.additionalTechnicalDataForm?.drive}
                                    onChange={(e) => formik.setFieldValue('additionalProperties.additionalTechnicalDataForm.drive', e.target.value)}
                                />
                                <label htmlFor="drive">Napęd</label>
                            </span>

                            <span className="p-float-label">
                                <InputText 
                                    id="emission"
                                    value={formik.values.additionalProperties?.additionalTechnicalDataForm?.emission}
                                    onChange={(e) => formik.setFieldValue('additionalProperties.additionalTechnicalDataForm.emission', e.target.value)}
                                />
                                <label htmlFor="emission">Emisja CO2</label>
                            </span>
                        </div>

                        <div className="row">
                            <span className="p-float-label">
                                <InputText 
                                    id="colorType"
                                    value={formik.values.additionalProperties?.additionalTechnicalDataForm?.colorType}
                                    onChange={(e) => formik.setFieldValue('additionalProperties.additionalTechnicalDataForm.colorType', e.target.value)}
                                />
                                <label htmlFor="colorType">Rodzaj koloru</label>
                            </span>

                            <span className="p-float-label">
                                <InputText 
                                    id="numberOfSeats"
                                    value={formik.values.additionalProperties?.additionalTechnicalDataForm?.numberOfSeats}
                                    onChange={(e) => formik.setFieldValue('additionalProperties.additionalTechnicalDataForm.numberOfSeats', e.target.value)}
                                />
                                <label htmlFor="numberOfSeats">Liczba miejsc</label>
                            </span>
                        </div>
                    </div>
                </form>
            </AccordionTab>

            <AccordionTab header="Wyposażenie">
                <div className="equipment-wrapper">
                    <form>
                        <Accordion multiple>
                            { equipmentFormik && equipmentFormik.map((eq: EquipmentForm, indexForm: number) => 
                                <AccordionTab key={indexForm} header={eq.type} >
                                    <div className="equipment-checkbox-wrapper">
                                        {eq.equipments.values.map((equipment: EquipmentItemsForm, eqIndex: number) => 
                                            <div key={eqIndex} className='equipment-checkbox'>
                                                <input 
                                                    type='checkbox'
                                                    checked={equipment.value}
                                                    onChange={(e) => {handleEquipmentValueChange(indexForm, eqIndex, e.target.checked)}}
                                                />
                                                <label>
                                                    {equipment.name}
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </AccordionTab>
                            )}
                        </Accordion>
                    </form>
                </div>
            </AccordionTab>
            <AccordionTab header="Historia"></AccordionTab>
        </Accordion>
    </div>
}