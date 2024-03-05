import './create-offer-form.scss';
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { SelectButton } from 'primereact/selectbutton';
import { InputTextarea } from 'primereact/inputtextarea';
import { BasicInfoForm, CreateOfferFormStateModel, DealerDataForm, MainFeaturesForm, OfferImagesForm, PriceDataForm, TechnicalDataForm, VehicleDescriptionForm } from "../../../redux/model/create-offer-form.model";
import { ImageUploader } from '../image-uploader/image-uploader';
import { AdditionalProperties } from '../additional-properties/additional-properties.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { useEffect } from 'react';
import { clearCreateOfferForm, saveFormValues } from '../../../redux/state/create-offer-form.slice';

const stateOptions = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];

export const CreateOfferFormComponent: React.FC = () => {
    const dispatch = useDispatch()
    const formDraft: CreateOfferFormStateModel = useSelector((state: RootState) => state.createOfferForm);


    const formik = useFormik({
        initialValues: formDraft,
        onSubmit: () => {
            formik.resetForm();
            dispatch(clearCreateOfferForm());
        }
    });

    useEffect(() => {
        dispatch(saveFormValues(formik.values))
    }, [formik.values])

    const formikBasicInfoValues: BasicInfoForm | undefined = formik.values.basicInfo;
    const formikMainFeaturesValues: MainFeaturesForm | undefined = formik.values.mainFeatures;
    const formikTechnicalDataValues: TechnicalDataForm | undefined = formik.values.technicalDataForm;
    const formikVehicleDescriptionValues: VehicleDescriptionForm | undefined = formik.values.vehicleDescription;
    const formikPriceDataValues: PriceDataForm | undefined = formik.values.priceDataForm;
    const formikDealerDataForm: DealerDataForm | undefined = formik.values.dealerDataForm;

    return <div className="create-offer-form-wrapper">
        <div className="title">
            <h1>Stwórz ogłoszenie</h1> 
            <span className="p-float-label">
                <InputText 
                    id="type"
                    name="type"
                    value={formik.values.vehicleType?.type}
                    onChange={(e) => {
                        formik.setFieldValue('vehicleType.type', e.target.value);
                    }}
                />
                <label htmlFor="type">Wybierz rodzaj samochodu</label>
            </span>
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
                            onChange={() => formik.setFieldValue('mainFeatures.destroyed', !formikMainFeaturesValues?.destroyed)}
                        />
                    </div>
                    <div className="row">
                        <h3>Importowany</h3>
                        <SelectButton
                            options={stateOptions}
                            value={formikMainFeaturesValues?.imported}
                            className='main-feature-button'
                            onChange={() => formik.setFieldValue('mainFeatures.imported', !formikMainFeaturesValues?.imported)}
                        />
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
                                onChange={(e) => {
                                    formik.setFieldValue('basicInfo.vin', e.target.value);
                                }}
                            />
                            <label htmlFor="vin">VIN</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="mileage"
                                name="mileage"
                                value={formikBasicInfoValues?.mileage}
                                onChange={(e) => {
                                    formik.setFieldValue('basicInfo.mileage', e.target.value);
                                }}
                            />
                            <label htmlFor="mileage">Przebieg</label>
                        </span>
                    </div>
                </form>
            </div>

            <div className="technical-data">
                <h2>Dane techniczne</h2>
                <form>
                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="yearOfProduction"
                                name="yearOfProduction"
                                value={formikTechnicalDataValues?.yearOfProduction}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.yearOfProduction', e.target.value);
                                }}
                            />
                            <label htmlFor="yearOfProduction">Rok produkcji</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="brand"
                                name="brand"
                                value={formikTechnicalDataValues?.brand}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.brand', e.target.value);
                                }}
                            />
                            <label htmlFor="brand">Marka pojazdu</label>
                        </span>
                    </div>

                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="model"
                                name="model"
                                value={formikTechnicalDataValues?.model}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.model', e.target.value);
                                }}
                            />
                            <label htmlFor="model">Model pojazdu</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="fuelType"
                                name="fuelType"
                                value={formikTechnicalDataValues?.fuelType}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.fuelType', e.target.value);
                                }}
                            />
                            <label htmlFor="fuelType">Rodzaj paliwa</label>
                        </span>
                    </div>

                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="horsePower"
                                name="horsePower"
                                value={formikTechnicalDataValues?.horsePower}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.horsePower', e.target.value);
                                }}
                            />
                            <label htmlFor="horsePower">Moc</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="engineCapacity"
                                name="engineCapacity"
                                value={formikTechnicalDataValues?.engineCapacity}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.engineCapacity', e.target.value);
                                }}
                            />
                            <label htmlFor="engineCapacity">Pojemność skokowa</label>
                        </span>
                    </div>

                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="numberOfDoors"
                                name="numberOfDoors"
                                value={formikTechnicalDataValues?.numberOfDoors}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.numberOfDoors', e.target.value);
                                }}
                            />
                            <label htmlFor="numberOfDoors">Liczba drzwi</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="transmission"
                                name="transmission"
                                value={formikTechnicalDataValues?.transmission}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.transmission', e.target.value);
                                }}
                            />
                            <label htmlFor="transmission">Skrzynia biegów</label>
                        </span>
                    </div>

                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="version"
                                name="version"
                                value={formikTechnicalDataValues?.version}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.version', e.target.value);
                                }}
                            />
                            <label htmlFor="version">Wersja</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="generation"
                                name="generation"
                                value={formikTechnicalDataValues?.generation}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.generation', e.target.value);
                                }}
                            />
                            <label htmlFor="generation">Generacja</label>
                        </span>
                    </div>

                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="bodyType"
                                name="bodyType"
                                value={formikTechnicalDataValues?.bodyType}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.bodyType', e.target.value);
                                }}
                            />
                            <label htmlFor="bodyType">Typ nadwozia</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="color"
                                name="color"
                                value={formikTechnicalDataValues?.color}
                                onChange={(e) => {
                                    formik.setFieldValue('technicalDataForm.color', e.target.value);
                                }}
                            />
                            <label htmlFor="color">Kolor</label>
                        </span>
                    </div>
                </form>
            </div>

            <div className="image-form">
                <h2>Zdjęcia</h2>
                <ImageUploader></ImageUploader>
            </div>      

            <div className="vehicle-description">
                <h2>Dane techniczne</h2>
                <form>
                    <span className="p-float-label">
                        <InputText 
                            id="title"
                            name="title"
                            value={formikVehicleDescriptionValues?.title}
                            onChange={(e) => {
                                formik.setFieldValue('vehicleDescription.title', e.target.value);
                            }}
                        />
                        <label htmlFor="title">Tytuł ogłoszenia</label>
                    </span>

                    <span className="p-float-label">
                        <InputTextarea
                            rows={8}
                            id="description"
                            name="description"
                            value={formikVehicleDescriptionValues?.description}
                            onChange={(e) => {
                                formik.setFieldValue('vehicleDescription.description', e.target.value);
                            }}
                            autoResize />
                        <label htmlFor="description">Opis pojazdu</label>
                    </span>
                </form>
            </div>

            <div className="additional-properties">
                <h2>Wyświetl dodatkowe szczegóły</h2>
                <AdditionalProperties></AdditionalProperties>
            </div>

            <div className="price">
                <h2>Cena</h2>
                <form>
                    <div className="row">
                        <h3>Cena netto</h3>
                        <SelectButton
                            options={stateOptions}
                            value={formikPriceDataValues?.net}
                            className='net-button'
                            onChange={() => formik.setFieldValue('priceDataForm.net', !formikPriceDataValues?.net)}
                        />
                    </div>

                    <div className="price-input-row">
                        <span className="p-float-label">
                            <InputText 
                                id="price"
                                name="price"
                                value={formikPriceDataValues?.price}
                                onChange={(e) => {
                                    formik.setFieldValue('priceDataForm.price', e.target.value);
                                }}
                            />
                            <label htmlFor="price">Cena</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="currency"
                                name="currency"
                                value={formikPriceDataValues?.currency}
                                onChange={(e) => {
                                    formik.setFieldValue('priceDataForm.currency', e.target.value);
                                }}
                            />
                            <label htmlFor="currency">Waluta</label>
                        </span>
                    </div>
                </form>
            </div>

            <div className="dealer-data">
                <h2>Dane sprzedającego</h2>
                <form>
                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="name"
                                name="name"
                                value={formikDealerDataForm?.name}
                                onChange={(e) => {
                                    formik.setFieldValue('dealerDataForm.name', e.target.value);
                                }}
                            />
                            <label htmlFor="currency">Imię</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="address"
                                name="address"
                                value={formikDealerDataForm?.address}
                                onChange={(e) => {
                                    formik.setFieldValue('dealerDataForm.address', e.target.value);
                                }}
                            />
                            <label htmlFor="currency">Adres</label>
                        </span>
                    </div>

                    <div className="half-row">
                        <span className="p-float-label"> 
                            <InputText 
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formikDealerDataForm?.phoneNumber}
                                onChange={(e) => {
                                    formik.setFieldValue('dealerDataForm.phoneNumber', e.target.value);
                                }}
                                />
                            <label htmlFor="phoneNumber">Numer telefonu</label>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>   
}