package org.masters_thesis.otoauto.components.followedFilters

import android.content.Context
import org.masters_thesis.otoauto.logic.database.DBHelper
import org.masters_thesis.otoauto.logic.database.IDBHelper
import org.masters_thesis.otoauto.model.FilterOffersModel

class FollowedFiltersService(context: Context) {
    private val dbHelper: IDBHelper = DBHelper(context, null)

    fun getFollowedFilters(): List<FilterOffersModel> {
        return dbHelper.getFollowedFilters()
    }

    fun addFollowedFilter(followedFilter: FilterOffersModel) {
        dbHelper.addFollowedFilter(followedFilter)
    }

    fun deleteFollowedFilterById(id: Int) {
        dbHelper.deleteFollowedFilter(id)
    }
}