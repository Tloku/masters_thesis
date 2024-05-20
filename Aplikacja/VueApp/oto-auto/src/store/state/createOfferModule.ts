import { AdditionalPropertiesFormModel, AdditionalTechnicalDataForm, CreateOfferFormStateModel, OfferImagesForm } from "../model/create-offer-form.model";

const createOfferModule = {
    state: () => (initialCreateOfferFormStateValue),
    mutations: {
        saveFormValues (state: CreateOfferFormStateModel, action: CreateOfferFormStateModel) {
            state.basicInfo = action.basicInfo;
            state.dealerDataForm = action.dealerDataForm;
            state.mainFeatures = action.mainFeatures;
            state.priceDataForm = action.priceDataForm;
            state.vehicleDescription = action.vehicleDescription;
            state.vehicleType = action.vehicleType;
            state.technicalDataForm = action.technicalDataForm
        },
        saveImageValues (state: CreateOfferFormStateModel, action: OfferImagesForm[]) {
            state.offerImages = action
        },
        saveAdditionalPropertiesValues (state: CreateOfferFormStateModel, action: AdditionalPropertiesFormModel) {
            state.equipmentTypeForm = action.equipmentForm
        },
        saveAdditionalTechnicalData (state: CreateOfferFormStateModel, action: AdditionalTechnicalDataForm) {
            state.additionalTechnicalDataForm = action
        },
        clearCreateOfferForm (state: CreateOfferFormStateModel) {
            console.log(state);
            state = initialCreateOfferFormStateValue
        }
    },
    actions: {  
        saveFormValues (context, action: CreateOfferFormStateModel) {
            context.commit('saveFormValues', action)
        },
        saveImageValues (context, action: OfferImagesForm[]) {
            context.commit('saveImageValues', action)
        },
        saveAdditionalPropertiesValues (context, action: AdditionalPropertiesFormModel) {
            context.commit('saveAdditionalPropertiesValues', action)
        },
        saveAdditionalTechnicalData (context, action: AdditionalTechnicalDataForm) {
           context.commit('saveAdditionalTechnicalData', action)
        },
        clearCreateOfferForm (context) {
            context.commit('clearCreateOfferForm')
        }
    },
    getters: {

    }
  }


export default createOfferModule;


const initialCreateOfferFormStateValue: CreateOfferFormStateModel = {
    dealerDataForm: {
        name: '',
        address: '',
        phoneNumber: '',
    },
    offerImages: [],
    priceDataForm: {
        net: false,
        price: '',
        currency: '', 
    },
    additionalTechnicalDataForm: {
        drive: '',
        emission: '',
        colorType: '',
        numberOfSeats: '' 
    },
    vehicleDescription: {
        title: '',
        description: '',
    },
    technicalDataForm: {
        yearOfProduction: '',
        brand: '',
        model: '',
        fuelType: '',
        horsePower: '',
        engineCapacity: '',
        numberOfDoors: '',
        transmission: '',
        version: '',
        generation: '',
        bodyType: '',
        color: '',
    },
    vehicleType: {
        type: ''
    },
    basicInfo: {
        vin: '',
        mileage: '' 
    },
    mainFeatures: {
        imported: false,
        destroyed: false
    },
    equipmentTypeForm: {
        equipmentTypes: []
    }
}