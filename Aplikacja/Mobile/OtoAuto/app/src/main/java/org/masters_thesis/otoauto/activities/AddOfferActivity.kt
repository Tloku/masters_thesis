package org.masters_thesis.otoauto.activities

import android.content.ClipData
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.Spinner
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
import org.masters_thesis.otoauto.components.offerCardComponent.OfferCardComponentAdapter
import org.masters_thesis.otoauto.logic.equipment.EquipmentService
import org.masters_thesis.otoauto.logic.equipment.models.EquipmentTypeDto
import org.masters_thesis.otoauto.logic.equipment.models.GetEquipmentResponse
import org.masters_thesis.otoauto.logic.offer.OfferService
import org.masters_thesis.otoauto.model.OfferCardComponentModel
import org.masters_thesis.otoauto.model.OfferImage
import org.masters_thesis.otoauto.model.createOffer.AdditionalTechnicalDataForm
import org.masters_thesis.otoauto.model.createOffer.BasicInfo
import org.masters_thesis.otoauto.model.createOffer.CreateOfferRequest
import org.masters_thesis.otoauto.model.createOffer.CreateOfferResponse
import org.masters_thesis.otoauto.model.createOffer.DealerDataForm
import org.masters_thesis.otoauto.model.createOffer.EquipmentTypeForm
import org.masters_thesis.otoauto.model.createOffer.MainFeatures
import org.masters_thesis.otoauto.model.createOffer.OfferImages
import org.masters_thesis.otoauto.model.createOffer.PriceDataForm
import org.masters_thesis.otoauto.model.createOffer.TechnicalDataForm
import org.masters_thesis.otoauto.model.createOffer.VehicleDescription
import org.masters_thesis.otoauto.model.createOffer.VehicleType
import org.masters_thesis.otoauto.model.equipments.Equipment
import org.masters_thesis.otoauto.model.equipments.EquipmentType
import org.masters_thesis.otoauto.model.equipments.Values
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.io.ByteArrayOutputStream
import java.io.IOException
import java.io.InputStream
import java.util.Base64
import java.util.UUID


class AddOfferActivity : AppCompatActivity() {
    private val equipmentService: EquipmentService = EquipmentService()
    private val offerService: OfferService = OfferService()
    private lateinit var  additionalPropertiesAdapter: AdditionalPropertiesAdapter
    private lateinit var equipmentRecyclerView: RecyclerView;
    private lateinit var vehicleViewPager: ViewPager2
    private lateinit var imagePicker: ActivityResultLauncher<Intent>
    private lateinit var viewPagerAdapter: AddVehicleImagesPagerAdapter
    private lateinit var equipmentTypesDto: List<EquipmentTypeDto>


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add_offer)
        initVehicleImagesAdapter()
        setImagePicker()
        setEquipmentRecyclerView()
        setVehicleImagesComponent()
        setToolbar()
        setCreateOfferButton()
    }

    private fun setCreateOfferButton() {
        val createButton = findViewById<Button>(R.id.createOfferButton)

        createButton.setOnClickListener { v ->
            val request: CreateOfferRequest = prepareCreateOfferForm()
            val call = offerService.createOffer(request)
            call.enqueue(object : Callback<CreateOfferResponse> {
                override fun onResponse(
                    call: Call<CreateOfferResponse>,
                    response: Response<CreateOfferResponse>
                ) {
                    if (response.isSuccessful && response.body() != null) {
                        Toast.makeText(baseContext, "Utworzono ofertę", Toast.LENGTH_SHORT).show()
                        onBackPressed()
                    }
                }

                override fun onFailure(call: Call<CreateOfferResponse>, t: Throwable) {
                    println(t.printStackTrace());
                }
            })
        }
    }

    private fun prepareCreateOfferForm(): CreateOfferRequest {
        val basicInfo: BasicInfo = getBasicInfo()
        val dealerDataForm: DealerDataForm = getDealerDataForm()
        val equipmentTypeForm: EquipmentTypeForm = getEquipmentTypeForm()
        val mainFeatures: MainFeatures = getMainFeatures()
        val offerImages: List<OfferImages> = getOfferImages()
        val priceDataForm: PriceDataForm = getPriceDataForm()
        val technicalDataForm: TechnicalDataForm = getTechnicalDataForm()
        val vehicleDescription: VehicleDescription = getVehicleDescription()
        val vehicleType: VehicleType = getVehicleType()

        return CreateOfferRequest(
            AdditionalTechnicalDataForm("black", "manual", "200", "5"),
            basicInfo,
            dealerDataForm,
            equipmentTypeForm,
            mainFeatures,
            offerImages,
            priceDataForm,
            technicalDataForm,
            vehicleDescription,
            vehicleType
        )
    }

    private fun getVehicleType(): VehicleType {
        val vehicleTypeLayout: LinearLayout = findViewById(R.id.vehicleTypeComponent)
        val vehicleTypeSpinner: Spinner = vehicleTypeLayout.findViewById(R.id.vehicleTypeSpinner)
        return VehicleType(vehicleTypeSpinner.selectedItem.toString())
    }

    private fun getVehicleDescription(): VehicleDescription {
        val vehicleDescriptionLayout: LinearLayout = findViewById(R.id.vehicleDescriptionComponent)
        val description: EditText = vehicleDescriptionLayout.findViewById(R.id.descriptionEditText)
        val title: EditText = vehicleDescriptionLayout.findViewById(R.id.titleEditText)
        return VehicleDescription(title.text.toString(), description.text.toString())
    }

    private fun getTechnicalDataForm(): TechnicalDataForm {
        val technicalDataLayout: LinearLayout = findViewById(R.id.technicalDataComponent)
        val yearOfProduction: EditText = technicalDataLayout.findViewById(R.id.yearOfProductionEditText)
        val brand: EditText = technicalDataLayout.findViewById(R.id.brandEditText)
        val model: EditText = technicalDataLayout.findViewById(R.id.modelEditText)
        val fuelType: EditText = technicalDataLayout.findViewById(R.id.fuelTypeEditText)
        val horsePower: EditText = technicalDataLayout.findViewById(R.id.horsePowerEditText)
        val engineCapacity: EditText = technicalDataLayout.findViewById(R.id.engineCapacityEditText)
        val numberOfDoors: EditText = technicalDataLayout.findViewById(R.id.numberOfDoorsEditText)
        val driveType: EditText = technicalDataLayout.findViewById(R.id.driveTypeEditText)
        val version: EditText = technicalDataLayout.findViewById(R.id.versionEditText)
        val generation: EditText = technicalDataLayout.findViewById(R.id.generationEditText)
        val bodyType: EditText = technicalDataLayout.findViewById(R.id.bodyTypeEditText)
        val color: EditText = technicalDataLayout.findViewById(R.id.colorEditText)

        return TechnicalDataForm(
            bodyType.text.toString(),
            brand.text.toString(),
            color.text.toString(),
            engineCapacity.text.toString(),
            fuelType.text.toString(),
            generation.text.toString(),
            horsePower.text.toString(),
            model.text.toString(),
            numberOfDoors.text.toString(),
            driveType.text.toString(),
            version.text.toString(),
            yearOfProduction.text.toString()
        )
    }

    private fun getPriceDataForm(): PriceDataForm {
        val priceLayout: LinearLayout = findViewById(R.id.priceComponent)
        val price: EditText = priceLayout.findViewById(R.id.priceEditText)
        val currency: EditText = priceLayout.findViewById(R.id.currencyEditText)
        return PriceDataForm(price.text.toString(), currency.text.toString(), true)
    }

    private fun getOfferImages(): List<OfferImages> {
        val offerImages: List<OfferImage> =  viewPagerAdapter.getOfferImages()
        return offerImages.map {
            oi -> OfferImages(
                UUID.randomUUID().toString(),
                oi.imageBytes!!,
                oi.isMainImage
            )
        }.toList()
    }

    private fun getMainFeatures(): MainFeatures {
        val mainFeaturesLayout: LinearLayout = findViewById(R.id.mainFeaturesComponent)
        val hasCrashedSpinner: Spinner = mainFeaturesLayout.findViewById(R.id.has_crashed_spinner)
        val isImportedSpinner: Spinner = mainFeaturesLayout.findViewById(R.id.is_imported_spinner)

        return MainFeatures(
            hasCrashedSpinner.selectedItem.toString() == "Tak",
            isImportedSpinner.selectedItem.toString() == "Tak"
        )
    }

    private fun getEquipmentTypeForm(): EquipmentTypeForm {
        val values: List<Values> = additionalPropertiesAdapter.getEquipmentValues()
        val equipmentTypes: List<EquipmentType> = equipmentTypesDto.map {
            etd ->
                EquipmentType(etd.type, Equipment(
                    etd.equipments.map {
                            e -> Values(e.id, e.name, false)
                    }.toList()
                ))
        }.toList()

        equipmentTypes.map {
            et -> et.equipment.values.map {
                eqVal -> eqVal.value = values.first {
                    v -> v.id == eqVal.id
                }.value
        }}

        return EquipmentTypeForm(equipmentTypes)
    }

    private fun getDealerDataForm(): DealerDataForm {
        val dealerDataLayout: LinearLayout = findViewById(R.id.dealerDataComponent)
        val name: EditText = dealerDataLayout.findViewById(R.id.nameEditText)
        val address: EditText = dealerDataLayout.findViewById(R.id.addressEditText)
        val phoneNumber: EditText = dealerDataLayout.findViewById(R.id.phoneNumberEditText)

        return DealerDataForm(
            name.text.toString(),
            address.text.toString(),
            phoneNumber.text.toString()
        )
    }

    private fun getBasicInfo(): BasicInfo {
        val basicInfoLayout: LinearLayout = findViewById(R.id.basicInfoComponent)
        val vin: EditText = basicInfoLayout.findViewById(R.id.vinEditText)
        val mileage: EditText = basicInfoLayout.findViewById(R.id.mileageEditText)
        return BasicInfo(
            vin.text.toString(),
            mileage.text.toString()
        )
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
                    equipmentTypesDto = equipmentResponse.equipmentTypes
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