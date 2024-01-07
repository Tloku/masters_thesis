package org.masters_thesis.otoauto.activities

import android.content.ClipData
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.view.View
import android.widget.Button
import android.widget.LinearLayout
import android.widget.Toast
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.ActionBar
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.viewpager2.widget.ViewPager2
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.components.addOffer.AddVehicleImagesPagerAdapter
import org.masters_thesis.otoauto.components.addOffer.additionalProperties.AdditionalPropertiesAdapter
import org.masters_thesis.otoauto.components.offerView.VehicleImagesPagerAdapter
import org.masters_thesis.otoauto.logic.equipment.EquipmentService
import org.masters_thesis.otoauto.logic.equipment.models.GetEquipmentResponse
import org.masters_thesis.otoauto.model.OfferImage
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.io.ByteArrayOutputStream
import java.io.IOException
import java.io.InputStream
import java.util.Base64


class AddOfferActivity : AppCompatActivity() {
    private val equipmentService: EquipmentService = EquipmentService()
    private lateinit var  additionalPropertiesAdapter: AdditionalPropertiesAdapter
    private lateinit var equipmentRecyclerView: RecyclerView;
    private lateinit var vehicleViewPager: ViewPager2
    private lateinit var imagePicker: ActivityResultLauncher<Intent>
    private lateinit var viewPagerAdapter: AddVehicleImagesPagerAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add_offer)
        initVehicleImagesAdapter()
        setImagePicker()
        setEquipmentRecyclerView()
        setVehicleImagesComponent()
        setToolbar()
    }

    private fun initVehicleImagesAdapter() {
        val imageComponent = findViewById<LinearLayout>(R.id.vehicleImagesComponent)
        vehicleViewPager = imageComponent.findViewById(R.id.addOfferViewPager)
        viewPagerAdapter = AddVehicleImagesPagerAdapter(mutableListOf())
        vehicleViewPager.adapter = viewPagerAdapter
    }

    private fun setVehicleImagesComponent() {
        val vehicleImageComponent = findViewById<LinearLayout>(R.id.vehicleImagesComponent)
        val addImageButton = vehicleImageComponent.findViewById<Button>(R.id.addImageButton)

        addImageButton.setOnClickListener { v ->
            selectImages()
        }
    }

    private fun setImagePicker() {
        imagePicker =
            registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
                val selectedImages: ArrayList<Uri> = ArrayList()
                if (result.resultCode == RESULT_OK) {
                    if (result.data?.clipData != null) {
                        val clipData: ClipData = result.data!!.clipData!!

                        for (i in 0 until clipData.itemCount) {
                            val uri: Uri = clipData.getItemAt(i).uri
                            selectedImages.add(uri)
                        }
                    } else {
                        val uri: Uri = result.data?.data!!
                        selectedImages.add(uri)
                    }
                }

                updateAddVehicleImagesPagerAdapter(selectedImages)
            }
    }

    private fun updateAddVehicleImagesPagerAdapter(images: ArrayList<Uri>) {
        val offerImages = mapImagesURIToOfferImages(images)
        viewPagerAdapter.updateImageList(offerImages)
        if (offerImages.isNotEmpty()) {
            vehicleViewPager.visibility = View.VISIBLE;
        }
    }

    private fun mapImagesURIToOfferImages(images: ArrayList<Uri>): List<OfferImage> {
        return images.mapIndexed { index, img ->
            OfferImage(encodeImageToBase64(img), index == 0)
        }.toList()
    }

    private fun selectImages() {
        val intent = Intent(Intent.ACTION_GET_CONTENT)
        intent.type = "image/*"
        intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true)

        imagePicker.launch(intent)
    }


    private fun setToolbar() {
        val toolbar: Toolbar = findViewById(R.id.addOfferToolbar)
        setSupportActionBar(toolbar)

        supportActionBar?.title = "Stwórz ogłoszenie"
        val actionBar: ActionBar? = supportActionBar
        actionBar?.setDisplayHomeAsUpEnabled(true)
        actionBar?.setDisplayShowHomeEnabled(true)

        toolbar.setNavigationOnClickListener {
            onBackPressed()
        }
    }

    private fun setEquipmentRecyclerView() {
        val additionalPropertiesLayout = findViewById<LinearLayout>(R.id.additionalPropertiesComponent)
        equipmentRecyclerView = additionalPropertiesLayout.findViewById<RecyclerView>(R.id.equipmentRecyclerView)
        equipmentRecyclerView.layoutManager = GridLayoutManager(this, 2)
        additionalPropertiesAdapter = AdditionalPropertiesAdapter(this, mutableListOf())
        equipmentRecyclerView.adapter = additionalPropertiesAdapter
        fetchEquipmentValues()
    }


    private fun fetchEquipmentValues() {
        val call = equipmentService.getEquipmentValues()
        handleEquipmentResponse(call)
    }

    private fun handleEquipmentResponse(call: Call<GetEquipmentResponse?>) {
        call.enqueue(object : Callback<GetEquipmentResponse?> {
            override fun onResponse(
                call: Call<GetEquipmentResponse?>,
                response: Response<GetEquipmentResponse?>
            ) {
                if (response.isSuccessful && response.body() != null) {
                    val equipmentResponse: GetEquipmentResponse = response.body()!!
                    val values = equipmentService.mapEquipmentResponseToValues(equipmentResponse)
                    additionalPropertiesAdapter.updateEquipmentList(values)
                }
            }

            override fun onFailure(call: Call<GetEquipmentResponse?>, t: Throwable) {
                println(t.printStackTrace());
            }
        })
    }

    @Throws(IOException::class)
    private fun getImageBytes(uri: Uri): ByteArray {
        val inputStream: InputStream? = contentResolver.openInputStream(uri)
        val buffer = ByteArrayOutputStream()

        if (inputStream != null) {
            var bytesRead: Int
            val data = ByteArray(1024)

            while (inputStream.read(data, 0, data.size).also { bytesRead = it } != -1) {
                buffer.write(data, 0, bytesRead)
            }

            inputStream.close()
        }

        return buffer.toByteArray()
    }

    private fun encodeImageToBase64(uri: Uri): String {
        val imageBytes: ByteArray = getImageBytes(uri)
        return imageBytes.toBase64()
    }

    private fun ByteArray.toBase64(): String =
        String(Base64.getEncoder().encode(this))

}