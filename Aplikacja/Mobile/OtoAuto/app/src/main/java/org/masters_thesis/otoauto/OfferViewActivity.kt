package org.masters_thesis.otoauto

import android.os.Bundle
import android.view.MotionEvent
import android.view.View
import android.widget.ListView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.viewpager2.widget.ViewPager2
import org.masters_thesis.otoauto.components.vehicleDetailsList.VehicleDetailsListAdapter
import org.masters_thesis.otoauto.components.vehicleImagesPager.VehicleImagesPagerAdapter
import org.masters_thesis.otoauto.logic.offer.OfferService
import org.masters_thesis.otoauto.model.OfferActivityComponentModel
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class OfferViewActivity : AppCompatActivity() {
    private val offerService: OfferService = OfferService()
    private var offerId: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_offer_view)
        offerId = intent.getIntExtra("offerId", 1)
        val offersCall = offerService.getOfferById(offerId)
        val listView = initListView();
        val vehicleViewPager = findViewById<ViewPager2>(R.id.viewPager)
        handleRequestCall(offersCall, listView, vehicleViewPager)
    }

    private fun initListView(): ListView {
        val listView = findViewById<ListView>(R.id.vehicleDetailsList)
        listView.setOnTouchListener(View.OnTouchListener { view, motionEvent ->
            return@OnTouchListener motionEvent.action == MotionEvent.ACTION_MOVE
        })
        listView.divider = null
        return listView;
    }

    private fun handleRequestCall(
        offersCall: Call<OfferActivityComponentModel?>,
        listView: ListView,
        vehicleViewPager: ViewPager2
    ) {
        offersCall.enqueue(object : Callback<OfferActivityComponentModel?> {
            override fun onResponse(
                call: Call<OfferActivityComponentModel?>,
                response: Response<OfferActivityComponentModel?>
            ) {
                if (response.isSuccessful && response.body() != null) {
                    val offerActivityComponentModel = response.body()!!
                    val adapter = VehicleDetailsListAdapter(applicationContext, offerActivityComponentModel.vehicleAttributes)
                    listView.adapter = adapter;
                    val viewPagerAdapter = VehicleImagesPagerAdapter(offerActivityComponentModel.offerImages)
                    vehicleViewPager.adapter = viewPagerAdapter
                    fillTextViews(offerActivityComponentModel)
                }
            }

            override fun onFailure(call: Call<OfferActivityComponentModel?>, t: Throwable) {
                println(t.printStackTrace());
            }
        })
    }

    private fun fillTextViews(offerActivityComponentModel: OfferActivityComponentModel) {
        val titleTextView = findViewById<TextView>(R.id.offerTitle)
        titleTextView.text = offerActivityComponentModel.offerTitle;
        val yearTextView = findViewById<TextView>(R.id.yearOfProductionTextView)
        yearTextView.text = offerActivityComponentModel.yearOfProduction
        val yearTextView2 = findViewById<TextView>(R.id.yearOfProductionTextView2)
        yearTextView2.text = offerActivityComponentModel.yearOfProduction
        val fuelTypeTextView = findViewById<TextView>(R.id.fuelTypeTextView)
        fuelTypeTextView.text = offerActivityComponentModel.fuelType
        val fuelTypeTextView2 = findViewById<TextView>(R.id.fuelTypeTextView2)
        fuelTypeTextView2.text = offerActivityComponentModel.fuelType
        val engineCapacityTextView = findViewById<TextView>(R.id.engineCapacityTextView)
        engineCapacityTextView.text = offerActivityComponentModel.engineCapacity
        val engineCapacityTextView2 = findViewById<TextView>(R.id.engineCapacityTextView2)
        engineCapacityTextView2.text = offerActivityComponentModel.engineCapacity
        val priceTextView = findViewById<TextView>(R.id.offerPriceTextView)
        priceTextView.text = offerActivityComponentModel.offerPrice
        val mileageTextView = findViewById<TextView>(R.id.mileageTextView)
        mileageTextView.text = offerActivityComponentModel.mileage
    }
}