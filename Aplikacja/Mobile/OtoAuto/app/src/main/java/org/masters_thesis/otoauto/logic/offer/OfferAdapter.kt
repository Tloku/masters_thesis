package org.masters_thesis.otoauto.logic.offer

import org.masters_thesis.otoauto.model.OfferActivityComponentModel
import org.masters_thesis.otoauto.model.OfferCardComponentModel
import org.masters_thesis.otoauto.model.OfferModel
import org.masters_thesis.otoauto.model.createOffer.CreateOfferRequest
import org.masters_thesis.otoauto.model.createOffer.CreateOfferResponse
import retrofit2.Call

interface OfferAdapter {
    fun getCallOffersWithVehiclesDataRequest(): Call<OfferModel?>

    fun getAwardedOffers(): Call<List<OfferCardComponentModel?>>

    fun getOfferById(id: Int): Call<OfferActivityComponentModel?>

    fun createOffer(createOfferRequest: CreateOfferRequest): Call<CreateOfferResponse>
}
