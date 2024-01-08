package org.masters_thesis.otoauto.activities

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.Spinner
import android.widget.Toast
import androidx.appcompat.app.ActionBar
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import com.google.gson.Gson
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.components.followedFilters.FollowedFiltersService
import org.masters_thesis.otoauto.logic.listeners.FilterComponentSpinnersListener
import org.masters_thesis.otoauto.model.FilterOffersModel

class FilteredOffersActivity: AppCompatActivity() {
    private lateinit var filterButton: Button
    private lateinit var filtersModel: FilterOffersModel
    private var followedFilterService: FollowedFiltersService = FollowedFiltersService(this)

    private lateinit var bodyTypeSpinner: Spinner
    private lateinit var brandSpinner: Spinner
    private lateinit var fuelTypeSpinner: Spinner
    private lateinit var priceFromEditText: EditText
    private lateinit var priceToEditText: EditText
    private lateinit var yearFromEditText: EditText
    private lateinit var yearToEditText: EditText
    private lateinit var mileageFromEditText: EditText
    private lateinit var mileageToEditText: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_filtered_offers)
        filtersModel = Gson().fromJson(intent.getStringExtra("filters"), FilterOffersModel::class.java)
        initFilterOfferComponent()
        setFiltersData(filtersModel)
        initSaveFilterButton()
        setToolbar()
    }

    private fun setToolbar() {
        val toolbar: Toolbar = findViewById(R.id.filteredOffersToolbar)
        setSupportActionBar(toolbar)

        supportActionBar?.title = "Przefiltrowane ogłoszenia"
        val actionBar: ActionBar? = supportActionBar
        actionBar?.setDisplayHomeAsUpEnabled(true)
        actionBar?.setDisplayShowHomeEnabled(true)

        toolbar.setNavigationOnClickListener {
            onBackPressed()
        }
    }

    private fun initSaveFilterButton() {
        val saveFilterButton: Button = findViewById(R.id.save_filters_button)

        saveFilterButton.setOnClickListener { v ->
            val filtersModel = collectFiltersData()
            followedFilterService.addFollowedFilter(filtersModel)
            Toast.makeText(this, "Dodano filtr", Toast.LENGTH_SHORT).show()
        }
    }

    private fun collectFiltersData(): FilterOffersModel {
        return FilterOffersModel(
            null,
            bodyType = bodyTypeSpinner.selectedItem.toString(),
            brand = brandSpinner.selectedItem.toString(),
            priceFrom = priceFromEditText.text.toString(),
            priceTo = priceToEditText.text.toString(),
            yearFrom = yearFromEditText.text.toString(),
            yearTo = yearToEditText.text.toString(),
            fuelType = fuelTypeSpinner.selectedItem.toString(),
            mileageFrom = mileageFromEditText.text.toString(),
            mileageTo = mileageToEditText.text.toString()
        )
    }

    private fun setFiltersData(filtersModel: FilterOffersModel) {
        val bodyTypes = resources.getStringArray(R.array.body_type_array)
        val brandTypes = resources.getStringArray(R.array.brand_array)
        val fuelTypes = resources.getStringArray(R.array.fuel_type_array)

        bodyTypeSpinner.setSelection(bodyTypes.indexOf(filtersModel.bodyType))
        brandSpinner.setSelection(brandTypes.indexOf(filtersModel.brand))
        priceFromEditText.setText(filtersModel.priceFrom)
        priceToEditText.setText(filtersModel.priceTo)
        yearFromEditText.setText(filtersModel.yearFrom)
        yearToEditText.setText(filtersModel.yearTo)
        fuelTypeSpinner.setSelection(fuelTypes.indexOf(filtersModel.fuelType))
        mileageFromEditText.setText(filtersModel.mileageFrom)
        mileageToEditText.setText(filtersModel.mileageTo)
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
        mileageFromEditText = filterComponent.findViewById<EditText>(R.id.mileageMin)
        mileageToEditText = filterComponent.findViewById<EditText>(R.id.mileageMax)

        yearFromEditText = filterComponent.findViewById<EditText>(R.id.yearMin)
        yearToEditText = filterComponent.findViewById<EditText>(R.id.yearMax)

        priceFromEditText = filterComponent.findViewById<EditText>(R.id.priceMin)
        priceToEditText = filterComponent.findViewById<EditText>(R.id.priceMax)
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
}