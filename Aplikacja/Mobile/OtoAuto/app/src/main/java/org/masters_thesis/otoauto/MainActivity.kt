package org.masters_thesis.otoauto

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import org.masters_thesis.otoauto.components.offerCardComponent.OfferCardComponentAdapter
import org.masters_thesis.otoauto.components.offerCardComponent.OfferCardComponentService
import org.masters_thesis.otoauto.logic.offer.OfferCardService
import org.masters_thesis.otoauto.model.OfferCardComponentModel
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity() {
    private val offerCardComponentService: OfferCardComponentService = OfferCardComponentService()
    private val offerCardService: OfferCardService = OfferCardService()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initOfferAdapter()
    }

    private fun initOfferAdapter() {
        val recyclerView = findViewById<RecyclerView>(R.id.offerCardRecyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        val offersCall = offerCardService.getAwardedOffersCall()
        handleRequestCall(offersCall, recyclerView)
    }

    private fun handleRequestCall(offersCall: Call<List<OfferCardComponentModel?>>, recyclerView: RecyclerView) {
        offersCall.enqueue(object : Callback<List<OfferCardComponentModel?>> {
            override fun onResponse(
                call: Call<List<OfferCardComponentModel?>>,
                response: Response<List<OfferCardComponentModel?>>
            ) {
                if (response.isSuccessful && response.body() != null) {
                    val offerCardsComponentModel = response.body()
                    for (responseOffer in offerCardsComponentModel!!) {
                        offerCardComponentService.setOfferCardDatasetOfferCardData(responseOffer)
                    }
                    val offerAdapter = OfferCardComponentAdapter(offerCardsComponentModel);
                    recyclerView.adapter = offerAdapter
                }
            }

            override fun onFailure(call: Call<List<OfferCardComponentModel?>>, t: Throwable) {
                TODO("Not yet implemented")
            }
        })
    }

//    private fun initOfferCard(): OfferCardComponentModel {
//        var offerCardMainImageView = findViewById<ImageView>(R.id.offerMainImage)
//        var offerTitleTextView = findViewById<TextView>(R.id.offerTitleTextView)
//        var yearOfProductionTextView = findViewById<TextView>(R.id.yearOfProductionTextView)
//        var mileageTextView = findViewById<TextView>(R.id.mileageTextView)
//        var fuelTypeTextView = findViewById<TextView>(R.id.fuelTypeTextView)
//        var engineCapacityTextView = findViewById<TextView>(R.id.engineCapacityTextView)
//        var offerPriceTextView = findViewById<TextView>(R.id.offerPriceTextView)
//        var offerCurrencyTextView = findViewById<TextView>(R.id.offerCurrencyTextView)
//        return OfferCardComponentModel(
//            offerCardMainImageView,
//            offerTitleTextView,
//            yearOfProductionTextView,
//            mileageTextView,
//            fuelTypeTextView,
//            engineCapacityTextView,
//            offerPriceTextView,
//            offerCurrencyTextView
//        )
//    }
}