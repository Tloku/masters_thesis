import './create-offer-form.scss';
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { SelectButton } from 'primereact/selectbutton';
import { InputTextarea } from 'primereact/inputtextarea';
import { BasicInfoForm, CreateOfferFormStateModel, DealerDataForm, MainFeaturesForm, OfferImagesForm, PriceDataForm, TechnicalDataForm, VehicleDescriptionForm } from "../../../redux/model/create-offer-form.model";
import { ImageUploader } from '../image-uploader/image-uploader';
import { AdditionalProperties } from '../additional-properties/additional-properties.component';

const createOfferForm: CreateOfferFormStateModel = {
    dealerDataForm: undefined,
    offerImages: [],
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
const stateOptions = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];

export const CreateOfferFormComponent: React.FC = () => {
    const formik = useFormik({
        initialValues: {createOfferForm},
        validate: () => {
        },
        onSubmit: () => {
            formik.resetForm();
        }
    });
    const formikBasicInfoValues: BasicInfoForm | undefined = formik.values.createOfferForm.basicInfo;
    const formikMainFeaturesValues: MainFeaturesForm | undefined = formik.values.createOfferForm.mainFeatures;
    const formikTechnicalDataValues: TechnicalDataForm | undefined = formik.values.createOfferForm.technicalDataForm;
    const formikVehicleDescriptionValues: VehicleDescriptionForm | undefined = formik.values.createOfferForm.vehicleDescription;
    const formikPriceDataValues: PriceDataForm | undefined = formik.values.createOfferForm.priceDataForm;
    const formikDealerDataForm: DealerDataForm | undefined = formik.values.createOfferForm.dealerDataForm;
    const formikOfferImages: OfferImagesForm[] | undefined = formik.values.createOfferForm.offerImages;

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
                            onChange={() => formik.setFieldValue('createOfferForm.mainFeatures.destroyed', !formikMainFeaturesValues?.destroyed)}
                        />
                    </div>
                    <div className="row">
                        <h3>Importowany</h3>
                        <SelectButton
                            options={stateOptions}
                            value={formikMainFeaturesValues?.imported}
                            className='main-feature-button'
                            onChange={() => formik.setFieldValue('createOfferForm.mainFeatures.imported', !formikMainFeaturesValues?.imported)}
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

            <div className="technical-data">
                <h2>Dane techniczne</h2>
                <form>
                    <div className="row">
                        <span className="p-float-label">
                            <InputText 
                                id="yearOfProduction"
                                name="yearOfProduction"
                                value={formikTechnicalDataValues?.yearOfProduction}
                            />
                            <label htmlFor="yearOfProduction">Rok produkcji</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="brand"
                                name="brand"
                                value={formikTechnicalDataValues?.brand}
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
                            />
                            <label htmlFor="model">Model pojazdu</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="fuelType"
                                name="fuelType"
                                value={formikTechnicalDataValues?.fuelType}
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
                            />
                            <label htmlFor="horsePower">Moc</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="engineCapacity"
                                name="engineCapacity"
                                value={formikTechnicalDataValues?.engineCapacity}
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
                            />
                            <label htmlFor="numberOfDoors">Liczba drzwi</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="transmission"
                                name="transmission"
                                value={formikTechnicalDataValues?.transmission}
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
                            />
                            <label htmlFor="version">Wersja</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="generation"
                                name="generation"
                                value={formikTechnicalDataValues?.generation}
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
                                />
                            <label htmlFor="bodyType">Typ nadwozia</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="color"
                                name="color"
                                value={formikTechnicalDataValues?.color}
                            />
                            <label htmlFor="color">Kolor</label>
                        </span>
                    </div>
                </form>
            </div>

            <div className="image-form">
                <h2>Zdjęcia</h2>
                <ImageUploader form={formikOfferImages}></ImageUploader>
            </div>      

            <div className="vehicle-description">
                <h2>Dane techniczne</h2>
                <form>
                    <span className="p-float-label">
                        <InputText 
                            id="title"
                            name="title"
                            value={formikVehicleDescriptionValues?.title}
                        />
                        <label htmlFor="title">Tytuł ogłoszenia</label>
                    </span>

                    <span className="p-float-label">
                        <InputTextarea
                            rows={8}
                            id="description"
                            name="description"
                            value={formikVehicleDescriptionValues?.description}
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
                            onChange={() => formik.setFieldValue('createOfferForm.priceDataForm.net', !formikPriceDataValues?.net)}
                        />
                    </div>

                    <div className="price-input-row">
                        <span className="p-float-label">
                            <InputText 
                                id="price"
                                name="price"
                                value={formikPriceDataValues?.price}
                            />
                            <label htmlFor="price">Cena</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="currency"
                                name="currency"
                                value={formikPriceDataValues?.currency}
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
                            />
                            <label htmlFor="currency">Imię</label>
                        </span>

                        <span className="p-float-label">
                            <InputText 
                                id="address"
                                name="address"
                                value={formikDealerDataForm?.address}
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
                                />
                            <label htmlFor="phoneNumber">Numer telefonu</label>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>   
}