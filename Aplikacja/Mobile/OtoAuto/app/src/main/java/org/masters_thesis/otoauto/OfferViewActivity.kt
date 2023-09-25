package org.masters_thesis.otoauto

import android.os.Bundle
import android.view.MotionEvent
import android.view.View
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity
import androidx.viewpager2.widget.ViewPager2
import org.masters_thesis.otoauto.components.vehicleDetailsList.VehicleDetailsListAdapter
import org.masters_thesis.otoauto.components.vehicleImagesPager.VehicleImagesPagerAdapter

class OfferViewActivity : AppCompatActivity() {
    private var offerId: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_offer_view)
        offerId = intent.getIntExtra("offerId", 1)
        val listView = findViewById<ListView>(R.id.vehicleDetailsList)

        listView.setOnTouchListener(View.OnTouchListener { view, motionEvent ->
            return@OnTouchListener motionEvent.action == MotionEvent.ACTION_MOVE
        })

        listView.divider = null
        val adapter = VehicleDetailsListAdapter(this, emptyList())
        listView.adapter = adapter;


        val vehicleViewPager = findViewById<ViewPager2>(R.id.viewPager)
        val viewPagerAdapter = VehicleImagesPagerAdapter(emptyList())
        vehicleViewPager.adapter = viewPagerAdapter
    }
}