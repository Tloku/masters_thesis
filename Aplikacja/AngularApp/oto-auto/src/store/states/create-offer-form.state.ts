import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { CreateOfferFormStateModel } from "src/api/models/form/create-offer-form";
import { UpdateAdditionalTechnicalDataForm, UpdateBasicInfoForm, UpdateDealerDataForm, UpdateEquipmentTypeForm, UpdateMainFeaturesForm, UpdateOfferImagesForm, UpdatePriceDataForm, UpdateTechnicalDataForm, UpdateVehicleTypeForm, UpdateVehicleDescriptionForm } from "../actions/create-offer-form.actions";

@State<CreateOfferFormStateModel>({
    name: 'createOffer',
    defaults: {
        dealerDataForm: undefined,
        offerImages: undefined,
        priceDataFrom: undefined,
        equipmentTypeForm: undefined,
        additionalTechnicalDataForm: undefined,
        vehicleDescription: undefined,
        technicalDataForm: undefined,
        vehicleType: undefined,
        basicInfo: undefined,
        mainFeatures: undefined
    }
  })
@Injectable()
export class CreateOfferFormState {
 
    @Action(UpdateBasicInfoForm)
    updateBasicInfoForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateBasicInfoForm) {
        const state = ctx.getState();
        debugger;
        ctx.setState({
            ...state,
            basicInfo: action.basicInfo
        })
    }

    @Action(UpdateDealerDataForm)
    updateDealerDataForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateDealerDataForm) {
        const state = ctx.getState();
        debugger;
        ctx.setState({
            ...state,
            dealerDataForm: action.dealerDataForm
        })
    }

    @Action(UpdateOfferImagesForm)
    updateOfferImagesForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateOfferImagesForm) {
        const state = ctx.getState();
        const offerImages = state.offerImages;
        if (offerImages) {
            offerImages.push(action.offerImagesForm)
            ctx.setState({
                ...state,
                offerImages: offerImages
            })
            return;
        }

        ctx.setState({
            ...state,
            offerImages: [action.offerImagesForm]
        })
    
    }

    @Action(UpdatePriceDataForm)
    updatePriceDataForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdatePriceDataForm) {
        const state = ctx.getState();
        debugger;
        ctx.setState({
            ...state,
            priceDataFrom: action.priceDataForm
        })
    }

    @Action(UpdateAdditionalTechnicalDataForm)
    updateAdditionalTechnicalDataForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateAdditionalTechnicalDataForm) {
        const state = ctx.getState();
        debugger;
        ctx.setState({
            ...state,
            additionalTechnicalDataForm: action.additionalTechnicalData
        })
    }

    @Action(UpdateEquipmentTypeForm)
    updateEquipmentTypeForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateEquipmentTypeForm) {
        const state = ctx.getState();
        debugger;
        ctx.setState({
            ...state,
            equipmentTypeForm: action.equipmentTypes
        })
    }

    @Action(UpdateVehicleDescriptionForm)
    updateVehicleDescriptionForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateVehicleDescriptionForm) {
        const state = ctx.getState();
        debugger;
        ctx.setState({
            ...state,
            vehicleDescription: action.vehicleDescription
        })
    }

    @Action(UpdateTechnicalDataForm)
    updateTechnicalDataForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateTechnicalDataForm) {
        const state = ctx.getState();
        debugger;
        ctx.setState({
            ...state,
            technicalDataForm: action.technicalData
        })
    }

    @Action(UpdateVehicleTypeForm)
    updateVehicleTypeForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateVehicleTypeForm) {
        const state = ctx.getState();

        debugger;
        ctx.setState({
            ...state,
            vehicleType: action.vehicleType
        })
    }

    @Action(UpdateMainFeaturesForm)
    updateMainFeaturesForm(ctx: StateContext<CreateOfferFormStateModel>, action: UpdateMainFeaturesForm) {
        const state = ctx.getState();
        debugger;
        ctx.setState({
            ...state,
            mainFeatures: action.mainFeatures
        })
    }
}