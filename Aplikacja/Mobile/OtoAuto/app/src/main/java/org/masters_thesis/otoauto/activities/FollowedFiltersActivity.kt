package org.masters_thesis.otoauto.activities

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.components.followedFilters.FollowedFiltersAdapter
import org.masters_thesis.otoauto.components.followedFilters.FollowedFiltersService
import org.masters_thesis.otoauto.model.FilterOffersModel

class FollowedFiltersActivity: AppCompatActivity() {
    private val followedFilterService: FollowedFiltersService = FollowedFiltersService(this)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_followed_filters)
        initFollowedFiltersAdapter()
    }

    private fun initFollowedFiltersAdapter() {
        val recyclerView = findViewById<RecyclerView>(R.id.followedFiltersRecyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        val list = followedFilterService.getFollowedFilters()
        recyclerView.adapter = FollowedFiltersAdapter(
            list as MutableList<FilterOffersModel>,
            ::deleteFollowedFilterById
        )
    }

    private fun deleteFollowedFilterById(id: Int) {
        followedFilterService.deleteFollowedFilterById(id)
    }
}