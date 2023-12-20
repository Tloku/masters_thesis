import "./offer-view.scss"
import { useEffect, useState } from "react"
import { OfferDetailsComponent } from "../../components/offer-details/offer-details"
import { VehicleImagesGalleryComponent } from "../../components/vehicle-images-gallery/vehicle-images-gallery"
import { OfferRestService } from "../../api/rest-service/offer-rest-service"
import { AxiosResponse } from "axios"
import { OfferActivityComponentModel } from "../../redux/model/offer-card-component.model"
import { useParams } from "react-router-dom"
import { OfferViewPriceComponent } from "../../components/offer-view-price/offer-view-price"

export const OfferViewComponent: React.FC = () => {
    const params = useParams()
    const [offer, setOffer] = useState<OfferActivityComponentModel | undefined>(undefined);

    useEffect(() => {
        if (!params) 
            return

        OfferRestService.getOfferById(parseInt(params.id!))
          .then((response: AxiosResponse<OfferActivityComponentModel>) => {
            setOffer(response.data as OfferActivityComponentModel);
          })  
      }, [params])

    return <>
        { 
        offer && 
            <div className="offer-view-wrapper">
                <div className="offer-view-details">
                    <div className="gallery">
                        <VehicleImagesGalleryComponent vehicleImages={offer?.offerImages} />
                    </div>
                    <OfferDetailsComponent vehicleAttributes={offer?.vehicleAttributes} />
                </div>
    
                <div className="offer-view-price">
                    <OfferViewPriceComponent offer={offer} />
                </div>
            </div>
        
        }
    </>
}