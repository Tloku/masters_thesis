import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OfferImage } from 'src/store/offer/offer-image.model';
import { OffersSelector } from 'src/store/offer/offers.selector';

@Component({
  selector: 'vehicle-images-gallery',
  templateUrl: './vehicle-images-gallery.component.html',
  styleUrls: ['./vehicle-images-gallery.component.css'],
})
export class VehicleImagesGalleryComponent {
    @Select(OffersSelector.vehicleImages)
    vehicleImages$!: Observable<OfferImage[]>;
}
