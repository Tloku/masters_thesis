package org.masters_thesis.otoauto.logic.database

import org.masters_thesis.otoauto.model.FollowedFiltersModel

interface IDBHelper {
    fun addFollowedFilter(followedFilter: FollowedFiltersModel)

    fun deleteFollowedFilter(id: Int)

    fun getFollowedFilters(): List<FollowedFiltersModel>
}