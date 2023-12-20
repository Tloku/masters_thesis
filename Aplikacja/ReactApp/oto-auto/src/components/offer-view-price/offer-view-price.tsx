import { OfferActivityComponentModel } from '../../redux/model/offer-card-component.model'
import './offer-view-price.scss'
import { Button } from 'primereact/button'


export const OfferViewPriceComponent: React.FC<{offer: OfferActivityComponentModel}> = ({offer}) => {


    return <>
        <div className="offer-view-price-wrapper">
            <div className="offer-title">
                <h2>
                    { offer.offerTitle }
                </h2>
            </div>

            <div className="offer-info">
                <span> { offer.yearOfProduction } </span>
                <span> { offer.mileage } </span>
                <span> { offer.fuelType } </span>
                <span> { offer.engineCapacity } </span>
            </div>

            <span className="offer-price"> { offer.offerPrice } </span>

            <div className="loan-wrapper">
                <div className="value">
                    Lub od <br/>
                    <span>
                        { getLoanFromNumber(offer.offerPrice)  } PLN
                    </span> /mc
                </div>

                <div>
                    <Button label="Sprawdź stawkę" />
                </div>
            </div>
        </div>
    </>
}


function getNumberFromString(num: string): number {
    return parseInt(num.replace(" ", ""));
}

function getLoanFromNumber(num: string): number {
    return Math.round(getNumberFromString(num) / 12)
}