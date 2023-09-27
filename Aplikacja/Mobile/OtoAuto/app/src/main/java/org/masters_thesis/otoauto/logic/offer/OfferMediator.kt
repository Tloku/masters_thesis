package org.masters_thesis.otoauto.logic.offer

import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import org.masters_thesis.otoauto.BuildConfig
import org.masters_thesis.otoauto.logic.offer.api.OfferController
import org.masters_thesis.otoauto.model.OfferActivityComponentModel
import org.masters_thesis.otoauto.model.OfferCardComponentModel
import org.masters_thesis.otoauto.model.OfferModel
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class OfferMediator: OfferAdapter {
    private val url: String = BuildConfig.SERVER_ENDPOINT_URL;
    private val retrofit: Retrofit
    private val offerController: OfferController

    init {
        retrofit = getInstance()
        offerController = retrofit.create(OfferController::class.java)
    }


    override fun getCallOffersWithVehiclesDataRequest(): Call<OfferModel?> {
        return try {
            offerController.getOfferWithVehicleByOfferId(643)
        } catch (ex: Exception) {
            throw NoSuchElementException()
        }
    }

    override fun getAwardedOffers(): Call<List<OfferCardComponentModel?>> {
        return try {
            offerController.getAwardedOffers()
        } catch (ex: Exception) {
            throw RuntimeException()
        }
    }

    override fun getOfferById(id: Int): Call<OfferActivityComponentModel?> {
        return try{
            offerController.getOfferById(id);
        } catch (ex: Exception) {
            throw RuntimeException()
        }
    }

    private fun getInstance(): Retrofit {
        val mHttpLoggingInterceptor = HttpLoggingInterceptor()
            .setLevel(HttpLoggingInterceptor.Level.BODY)

        val mOkHttpClient = OkHttpClient
            .Builder()
            .addInterceptor(mHttpLoggingInterceptor)
            .build()

        return Retrofit.Builder()
            .baseUrl(url)
            .addConverterFactory(GsonConverterFactory.create())
            .client(mOkHttpClient)
            .build()
    }
}