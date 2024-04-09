import { CreateOfferFormStateModel } from "../model/create-offer-form.model";


const createOfferModule = {
    state: () => (initialCreateOfferFormStateValue),
    mutations: {
       
    },
    actions: {  
        
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