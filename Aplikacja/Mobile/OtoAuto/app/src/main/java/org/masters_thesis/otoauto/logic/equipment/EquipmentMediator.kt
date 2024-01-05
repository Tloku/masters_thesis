package org.masters_thesis.otoauto.logic.equipment

import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import org.masters_thesis.otoauto.BuildConfig
import org.masters_thesis.otoauto.logic.equipment.api.EquipmentController
import org.masters_thesis.otoauto.logic.equipment.models.GetEquipmentResponse
import org.masters_thesis.otoauto.logic.offer.api.OfferController
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class EquipmentMediator: EquipmentAdapter {
    private val url: String = BuildConfig.SERVER_ENDPOINT_URL;
    private val retrofit: Retrofit
    private val equipmentController: EquipmentController

    init {
        retrofit = getInstance()
        equipmentController = retrofit.create(EquipmentController::class.java)
    }

    override fun getEquipmentTypes(): Call<GetEquipmentResponse?> {
        return try{
            equipmentController.getEquipmentTypes()
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