package org.masters_thesis.otoauto

import android.os.Bundle
import android.view.MenuItem
import android.widget.Toast
import androidx.appcompat.app.ActionBar
import androidx.appcompat.app.ActionBarDrawerToggle
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.core.view.GravityCompat
import androidx.drawerlayout.widget.DrawerLayout
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.navigation.NavigationView
import org.masters_thesis.otoauto.components.offerCardComponent.OfferCardComponentAdapter
import org.masters_thesis.otoauto.components.offerCardComponent.OfferCardComponentService
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

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initDrawer()
        initOfferAdapter()
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
        val toggle = ActionBarDrawerToggle(this, drawerLayout, toolbar, R.string.open_nav, R.string.close_nav)
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
        Toast.makeText(this, item.title, Toast.LENGTH_SHORT).show()
        return true;
    }
}