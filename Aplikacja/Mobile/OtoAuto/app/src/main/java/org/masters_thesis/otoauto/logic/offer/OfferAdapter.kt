package org.masters_thesis.otoauto.logic.offer

import org.masters_thesis.otoauto.model.OfferCardComponentModel
import org.masters_thesis.otoauto.model.OfferModel
import retrofit2.Call

interface OfferAdapter {
    fun getCallOffersWithVehiclesDataRequest(): Call<OfferModel?>

    fun getAwardedOffers(): Call<List<OfferCardComponentModel?>>
}
