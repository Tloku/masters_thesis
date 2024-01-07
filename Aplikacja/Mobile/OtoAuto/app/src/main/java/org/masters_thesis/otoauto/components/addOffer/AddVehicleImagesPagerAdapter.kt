package org.masters_thesis.otoauto.components.addOffer

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import androidx.recyclerview.widget.RecyclerView
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.model.OfferImage
import java.util.Base64

class AddVehicleImagesPagerAdapter(private var images: MutableList<OfferImage>)
    : RecyclerView.Adapter<AddVehicleImagesPagerAdapter.AddVehicleImagesPagerViewHolder>() {

    inner class AddVehicleImagesPagerViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView)

    override fun onCreateViewHolder(
        parent: ViewGroup,
        viewType: Int
    ): AddVehicleImagesPagerViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.vehicle_images_pager, parent, false)
        return AddVehicleImagesPagerViewHolder(view)
    }

    override fun onBindViewHolder(holder: AddVehicleImagesPagerViewHolder, position: Int) {
        val image = images[position]
        val imageView = holder.itemView.findViewById<ImageView>(R.id.vehicleImagePagerItem)
        val imageBytesDecoded = Base64.getDecoder().decode(image.imageBytes)
        val bmp: Bitmap = BitmapFactory.decodeByteArray(imageBytesDecoded, 0, imageBytesDecoded.size)
        imageView.setImageBitmap(bmp);
    }

    override fun getItemCount(): Int {
        return images.size
    }

    fun updateImageList(images: List<OfferImage>) {
        this.images.addAll(images)
        notifyItemRangeChanged(0, this.images.size)
    }
}