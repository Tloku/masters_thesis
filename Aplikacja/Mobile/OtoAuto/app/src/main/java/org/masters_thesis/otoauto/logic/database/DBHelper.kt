package org.masters_thesis.otoauto.logic.database

import android.content.ContentValues
import android.content.Context
import android.database.Cursor
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import org.masters_thesis.otoauto.model.FilterOffersModel

class DBHelper(context: Context, factory: SQLiteDatabase.CursorFactory?) :
    SQLiteOpenHelper(context, DATABASE_NAME, factory, 1), IDBHelper {

    override fun onCreate(db: SQLiteDatabase?) {
        val query = "CREATE TABLE $TABLE_NAME (\n" +
                "    id INTEGER PRIMARY KEY,\n" +
                "    $BODY_TYPE TEXT,\n" +
                "    $BRAND TEXT,\n" +
                "    $PRICE_FROM TEXT,\n" +
                "    $PRICE_TO TEXT,\n" +
                "    $YEAR_FROM TEXT,\n" +
                "    $YEAR_TO TEXT,\n" +
                "    $FUEL_TYPE TEXT,\n" +
                "    $MILEAGE_FROM TEXT,\n" +
                "    $MILEAGE_TO TEXT\n" +
                ");"

        db?.execSQL(query)
    }

    override fun onUpgrade(db: SQLiteDatabase?, p1: Int, p2: Int) {
        db?.execSQL("DROP TABLE IF EXISTS $TABLE_NAME")
        onCreate(db)
    }

    override fun addFollowedFilter(followedFilter: FilterOffersModel) {
        val values = ContentValues()

        values.put(BODY_TYPE, followedFilter.bodyType)
        values.put(BRAND, followedFilter.brand)
        values.put(PRICE_FROM, followedFilter.priceFrom)
        values.put(PRICE_TO, followedFilter.priceTo)
        values.put(YEAR_FROM, followedFilter.yearFrom)
        values.put(YEAR_TO, followedFilter.yearTo)
        values.put(FUEL_TYPE, followedFilter.fuelType)
        values.put(MILEAGE_FROM, followedFilter.mileageFrom)
        values.put(MILEAGE_TO, followedFilter.mileageTo)

        val db = writableDatabase

        db.insert(TABLE_NAME, null, values)
        db.close()
    }

    override fun deleteFollowedFilter(id: Int) {
        val db = writableDatabase
        db?.execSQL("DELETE FROM $TABLE_NAME WHERE id = $id")
        db.close()
    }

    override fun getFollowedFilters(): List<FilterOffersModel> {
        val db = readableDatabase
        val cursor: Cursor = db.rawQuery("SELECT * FROM $TABLE_NAME", null)
        return getFollowedFiltersModelListFromCursor(cursor)
    }

    private fun getFollowedFiltersModelListFromCursor(cursor: Cursor): List<FilterOffersModel> {
        val followedFilterList = mutableListOf<FilterOffersModel>()

        cursor.use { usedCursor ->
            while (usedCursor.moveToNext()) {
                var index: Int = usedCursor.getColumnIndex(BODY_TYPE)
                val bodyType = usedCursor.getString(index)

                index = usedCursor.getColumnIndex("id")
                val id = usedCursor.getInt(index)

                index = usedCursor.getColumnIndex(BRAND)
                val brand = usedCursor.getString(index)

                index = usedCursor.getColumnIndex(PRICE_FROM)
                val priceFrom = usedCursor.getString(index)

                index = usedCursor.getColumnIndex(PRICE_TO)
                val priceTo = usedCursor.getString(index)

                index = usedCursor.getColumnIndex(YEAR_FROM)
                val yearFrom = usedCursor.getString(index)

                index = usedCursor.getColumnIndex(YEAR_TO)
                val yearTo = usedCursor.getString(index)

                index = usedCursor.getColumnIndex(FUEL_TYPE)
                val fuelType = usedCursor.getString(index)

                index = usedCursor.getColumnIndex(MILEAGE_FROM)
                val mileageFrom = usedCursor.getString(index)

                index = usedCursor.getColumnIndex(MILEAGE_TO)
                val mileageTo = usedCursor.getString(index)

                followedFilterList.add(FilterOffersModel(
                    id, bodyType, brand, priceFrom, priceTo, yearFrom, yearTo, fuelType, mileageFrom, mileageTo
                ))
            }
        }

        return followedFilterList
    }

    companion object FollowedFilterTableRow {
        val DATABASE_NAME = "OTO_AUTO"
        val TABLE_NAME = "FollowedFilters"

        val BODY_TYPE = "bodyType"
        val BRAND = "brand"
        val PRICE_FROM = "priceFrom"
        val PRICE_TO = "priceTo"
        val YEAR_FROM = "yearFrom"
        val YEAR_TO = "yearTo"
        val FUEL_TYPE = "fuelType"
        val MILEAGE_FROM = "mileageFrom"
        val MILEAGE_TO = "mileageTo"
    }
}