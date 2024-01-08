package org.masters_thesis.otoauto.model.createOffer

data class CreateOfferRequest (
    val additionalTechnicalDataForm: AdditionalTechnicalDataForm?,
    val basicInfo: BasicInfo?,
    val dealerDataForm: DealerDataForm?,
    val equipmentTypeForm: EquipmentTypeForm?,
    val mainFeatures: MainFeatures?,
    val offerImages: List<OfferImages>?,
    val priceDataForm: PriceDataForm?,
    val technicalDataForm: TechnicalDataForm?,
    val vehicleDescription: VehicleDescription?,
    val vehicleType: VehicleType?
)