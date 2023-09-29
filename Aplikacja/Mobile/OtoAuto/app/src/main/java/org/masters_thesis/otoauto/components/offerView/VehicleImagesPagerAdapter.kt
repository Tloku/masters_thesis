package org.masters_thesis.otoauto.components.offerView

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

class VehicleImagesPagerAdapter(private val images: List<OfferImage>) : RecyclerView.Adapter<VehicleImagesPagerAdapter.VehicleImagesPagerViewHolder>() {

    inner class VehicleImagesPagerViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView)

    override fun onCreateViewHolder(
        parent: ViewGroup,
        viewType: Int
    ): VehicleImagesPagerViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.vehicle_images_pager, parent, false)
        return VehicleImagesPagerViewHolder(view)
    }

    override fun onBindViewHolder(holder: VehicleImagesPagerViewHolder, position: Int) {
        val image = images[position]
        val imageView = holder.itemView.findViewById<ImageView>(R.id.vehicleImagePagerItem)
        val imageBytesDecoded = Base64.getDecoder().decode(image.imageBytes)
        val bmp: Bitmap = BitmapFactory.decodeByteArray(imageBytesDecoded, 0, imageBytesDecoded.size)
        imageView.setImageBitmap(bmp);
    }

    override fun getItemCount(): Int {
        return images.size
    }
}