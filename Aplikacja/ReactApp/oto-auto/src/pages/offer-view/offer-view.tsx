import "./offer-view.scss"
import { useEffect } from "react"
import { OfferDetailsComponent } from "../../components/offer-details/offer-details"
import { VehicleImagesGalleryComponent } from "../../components/vehicle-images-gallery/vehicle-images-gallery"
import { useParams } from "react-router-dom"
import { OfferViewPriceComponent } from "../../components/offer-view-price/offer-view-price"
import { useDispatch, useSelector } from "react-redux"
import { getOfferById } from "../../redux/state/offerSlice"
import { ThunkDispatch } from "redux-thunk"
import { RootState } from "../../redux/store/store"
import { AnyAction } from "@reduxjs/toolkit"

export const OfferViewComponent: React.FC = () => {
    const params = useParams()
    const offer = useSelector((state: RootState) => state.offerCard.offer);
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

    useEffect(() => {
        if (!params) 
            return

        const id: number = parseInt(params.id!);
        dispatch(getOfferById(id))
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