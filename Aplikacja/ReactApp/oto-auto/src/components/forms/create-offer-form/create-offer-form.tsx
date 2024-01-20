import './create-offer-form.scss';
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { SelectButton } from 'primereact/selectbutton';
import { BasicInfoForm, CreateOfferFormStateModel, MainFeaturesForm } from "../../../redux/model/create-offer-form.model";


export const CreateOfferFormComponent: React.FC = () => {
    const stateOptions = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];

    const initialFormikValues: CreateOfferFormStateModel = {
        dealerDataForm: undefined,
        offerImages: undefined,
        priceDataForm:undefined,
        equipmentTypeForm: undefined,
        additionalTechnicalDataForm: undefined,
        vehicleDescription: undefined,
        technicalDataForm: undefined,
        vehicleType: undefined,
        basicInfo: undefined,
        mainFeatures: {
            imported: false,
            destroyed: false
        } 
    } 

    const formik = useFormik({
        initialValues: {initialFormikValues},
        validate: () => {
        },
        onSubmit: () => {
            formik.resetForm();
        }
    });
    const formikBasicInfoValues: BasicInfoForm | undefined = formik.values.initialFormikValues.basicInfo;
    const formikMainFeaturesValues: MainFeaturesForm | undefined = formik.values.initialFormikValues.mainFeatures;


    return <div className="create-offer-form-wrapper">
        <div className="title">
            
        </div>

        <div className="vehicle-details">
            <h1>Dane pojazdu</h1> 

            <div className="main-features">
                <form>
                    <h2>Cechy główne</h2>
                    <div className="row">
                        <h3>Uszkodzony</h3>
                        <SelectButton
                            options={stateOptions}
                            value={formikMainFeaturesValues?.destroyed}
                            className='main-feature-button'
                            onChange={(e) => {
                                console.log(e.value)
                                // formikMainFeaturesValues!.destroyed = e.value
                                formik.setFieldValue('mainFeatures.destroyed', e.value) }
                            }
                        />
                        {/* <p-selectButton styleClass="main-feature-button" formControlName="destroyed" [options]="stateOptions"></p-selectButton> */}
                    </div>
                    <div className="row">
                        <h3>Importowany</h3>
                        <SelectButton
                            options={stateOptions}
                            value={formikMainFeaturesValues?.imported}
                            className='main-feature-button'
                            onChange={(e) => formikMainFeaturesValues!.imported = e.value}
                        />
                        {/* <p-selectButton formControlName="imported" [options]="stateOptions"></p-selectButton> */}
                    </div>
                </form>
            </div>

            <div className="basic-info">
                <h2>Informacje podstawowe</h2>
                <form>
                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="vin"
                                name="vin"
                                value={formikBasicInfoValues?.vin}
                            />
                            <label htmlFor="vin">VIN</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="mileage"
                                name="mileage"
                                value={formikBasicInfoValues?.mileage}
                            />
                            <label htmlFor="mileage">Przebieg</label>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>   
}