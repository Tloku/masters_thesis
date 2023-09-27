package org.masters_thesis.otoauto.logic.offer.api

import org.masters_thesis.otoauto.model.OfferActivityComponentModel
import org.masters_thesis.otoauto.model.OfferCardComponentModel
import org.masters_thesis.otoauto.model.OfferModel
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Path

interface OfferController {

    @GET("/api/offer/with_vehicles")
    fun getOffersWithVehicles(): Call<List<OfferModel>>

    @GET("/api/offer/with_vehicle/{offerId}")
    fun getOfferWithVehicleByOfferId(@Path("offerId") offerId: Int): Call<OfferModel?>

    @GET("/api/offer/awarded")
    fun getAwardedOffers(): Call<List<OfferCardComponentModel?>>

    @GET("/api/offer/{offerId}")
    fun getOfferById(@Path("offerId") offerId: Int): Call<OfferActivityComponentModel?>
}