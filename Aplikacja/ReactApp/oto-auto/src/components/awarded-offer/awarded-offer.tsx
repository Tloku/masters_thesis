import { NavigateFunction, useNavigate } from 'react-router-dom'
import { OfferCardComponentModel } from '../../redux/model/offer-card-component.model'
import './awarded-offer.scss'

export const AwardedOffer: React.FC<{offer:OfferCardComponentModel}> = ({key, offer}) => {
    const navigate: NavigateFunction = useNavigate();
    
    if (!offer) {
        return <></>
    }

    return <>
        <div
            className="offer-content" 
            onClick={() => onOfferClick(navigate, offer.offerId)} >
            <img 
                className="car-pic"
                src={`data:image/jpeg;base64,${offer.offerMainImage.imageBytes}`} 
                alt="car" />
            <span 
                className="offer-name">
                { offer.offerTitle }
            </span>
            <div className="offer-info">
                <span> { offer.yearOfProduction } </span>
                <span> { offer.mileage + " " + offer.mileageUnit } </span>
                <span> { offer.fuelType } </span>
                <span> { offer.engineCapacity + "cm3" } </span>
            </div>
            <span className="offer-price">
                { offer.offerPrice + " " + offer.offerCurrency } 
            </span>
        </div>
    </>
}

function onOfferClick(navigate: NavigateFunction, offerId: number): void {
    navigate('/offer/' + offerId)
} 