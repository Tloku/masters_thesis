package org.masters_thesis.otoauto.logic.offer

import org.masters_thesis.otoauto.model.OfferCardComponentModel
import org.masters_thesis.otoauto.model.OfferModel
import retrofit2.Call


class OfferCardService {
    private val offerMediator: OfferMediator = OfferMediator()


    fun getOfferCardCall(): Call<OfferModel?> {
        return offerMediator.getCallOffersWithVehiclesDataRequest()
    }

    fun getAwardedOffersCall(): Call<List<OfferCardComponentModel?>> {
        return offerMediator.getAwardedOffers();
    }

//    fun setOfferCardData(model: OfferCardComponentModel, offer: OfferModel?) {
//        if (offer == null) {
//            return;
//        }
//
//        model.offerTitleTextView.text = offer.name;
//        model.yearOfProductionTextView.text = offer.vehicle.yearOfProduction;
//        model.mileageTextView.text = offer.vehicle.mileage.plus(" ").plus(offer.vehicle.mileageUnit)
//        model.fuelTypeTextView.text = offer.vehicle.fuelTypeId.toString();
//        model.engineCapacityTextView.text = offer.vehicle.engineCapacity.toString().plus(" cm3")
//        model.offerPriceTextView.text = offer.price
//        model.offerCurrencyTextView.text = offer.currency
//    }
}