package org.masters_thesis.otoauto.activities

import android.content.Intent
import android.os.Bundle
import android.view.MenuItem
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.Spinner
import androidx.appcompat.app.ActionBar
import androidx.appcompat.app.ActionBarDrawerToggle
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.core.view.GravityCompat
import androidx.drawerlayout.widget.DrawerLayout
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.navigation.NavigationView
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.components.offerCardComponent.OfferCardComponentAdapter
import org.masters_thesis.otoauto.components.offerCardComponent.OfferCardComponentService
import org.masters_thesis.otoauto.logic.listeners.FilterComponentSpinnersListener
import org.masters_thesis.otoauto.logic.offer.OfferService
import org.masters_thesis.otoauto.model.OfferCardComponentModel
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity(), NavigationView.OnNavigationItemSelectedListener {
    private val offerCardComponentService: OfferCardComponentService = OfferCardComponentService()
    private val offerCardService: OfferService = OfferService()
    private lateinit var drawerLayout: DrawerLayout
    private lateinit var navigationView: NavigationView
    private lateinit var filterButton: Button
    private lateinit var bodyTypeSpinner: Spinner
    private lateinit var brandSpinner: Spinner
    private lateinit var fuelTypeSpinner: Spinner

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initFilterOfferComponent()
        initDrawer()
        initOfferAdapter()
    }

    private fun initFilterOfferComponent() {
        val filterComponent = findViewById<View>(R.id.filter_offers_layout)
        initBodyTypeSpinner(filterComponent)
        initBrandSpinner(filterComponent)
        initFuelTypeSpinner(filterComponent)
        initEditTexts(filterComponent)
        initFilterButton(filterComponent)
    }

    private fun initFilterButton(filterComponent: View) {
        filterButton = filterComponent.findViewById<Button>(R.id.filter_button)
        filterButton.setOnClickListener {
            filterOffers()
        }
    }

    private fun filterOffers() {
        val intent = Intent(this, FilteredOffersActivity::class.java)
        startActivity(intent)
    }

    private fun initEditTexts(filterComponent: View) {
        val mileageMin = filterComponent.findViewById<EditText>(R.id.mileageMin)
        val mileageMax = filterComponent.findViewById<EditText>(R.id.mileageMax)

        val yearMin = filterComponent.findViewById<EditText>(R.id.yearMin)
        val yearMax = filterComponent.findViewById<EditText>(R.id.yearMax)

        val priceMin = filterComponent.findViewById<EditText>(R.id.priceMin)
        val priceMax = filterComponent.findViewById<EditText>(R.id.priceMax)
    }

    private fun initBodyTypeSpinner(filterComponent: View) {
        bodyTypeSpinner = filterComponent.findViewById<Spinner>(R.id.body_type_spinner)
        bodyTypeSpinner.onItemSelectedListener = FilterComponentSpinnersListener(this)
    }

    private fun initFuelTypeSpinner(filterComponent: View) {
        fuelTypeSpinner = filterComponent.findViewById<Spinner>(R.id.fuel_type_spinner)
        fuelTypeSpinner.onItemSelectedListener = FilterComponentSpinnersListener(this)
    }

    private fun initBrandSpinner(filterComponent: View) {
        brandSpinner = filterComponent.findViewById<Spinner>(R.id.brand_spinner)
        brandSpinner.onItemSelectedListener = FilterComponentSpinnersListener(this)
    }

    private fun initDrawer() {
        drawerLayout = findViewById<DrawerLayout>(R.id.main_drawer)
        navigationView = findViewById<NavigationView>(R.id.nav_view)
        val toolbar: Toolbar = findViewById(R.id.toolbar)
        setSupportActionBar(toolbar)
        val actionBar: ActionBar? = supportActionBar
        actionBar?.setDisplayHomeAsUpEnabled(true)
        actionBar?.setHomeAsUpIndicator(R.drawable.menu)
        navigationView.bringToFront()
        val toggle = ActionBarDrawerToggle(this, drawerLayout, toolbar,
            R.string.open_nav,
            R.string.close_nav
        )
        drawerLayout.addDrawerListener(toggle)
        toggle.syncState()
        navigationView.setNavigationItemSelectedListener(this)
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
                println(t.printStackTrace());
            }
        })
    }

    override fun onBackPressed() {
        if (drawerLayout.isDrawerOpen(GravityCompat.START)) {
            drawerLayout.closeDrawer(GravityCompat.START)
            return
        }

        super.onBackPressed()
    }

    override fun onNavigationItemSelected(item: MenuItem): Boolean {
        drawerLayout.closeDrawer(GravityCompat.START)
        when (item.itemId) {
            R.id.followed -> {
                val intent = Intent(this, FollowedFiltersActivity::class.java)
                startActivity(intent)
            }
            R.id.addOffer -> {
                val intent = Intent(this, AddOfferActivity::class.java)
                startActivity(intent)
            }
        }

        return true;
    }
}