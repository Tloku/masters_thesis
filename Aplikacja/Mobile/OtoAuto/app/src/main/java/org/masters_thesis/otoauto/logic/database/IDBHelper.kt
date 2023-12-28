package org.masters_thesis.otoauto.logic.database

import org.masters_thesis.otoauto.model.FilterOffersModel

interface IDBHelper {
    fun addFollowedFilter(followedFilter: FilterOffersModel)

    fun deleteFollowedFilter(id: Int)

    fun getFollowedFilters(): List<FilterOffersModel>
}