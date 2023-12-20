import { useEffect, useState } from 'react'
import { OfferRestService } from '../../api/rest-service/offer-rest-service'
import './awarded-offer-grid.scss'
import { OfferCardComponentModel } from '../../redux/model/offer-card-component.model'
import { AxiosResponse } from 'axios'
import { AwardedOffer } from '../awarded-offer/awarded-offer'
import React from 'react'


export const AwardedOfferGridComponent: React.FC = () => {
    const [offers, setOffers] = useState<OfferCardComponentModel[] | undefined>(undefined)

    useEffect(() => {
      OfferRestService.getAwardedOffers()
        .then((response: AxiosResponse<OfferCardComponentModel[]>) => {
            setOffers(response.data as OfferCardComponentModel[]);
        })  
    }, [])

    return <>
        <div className="wrapper">
            <span className="awarded-offers-label">Wyróżnione oferty</span>
            <div className="offers">
                { offers && offers.map(
                    (offer: OfferCardComponentModel) => (
                        <React.Fragment key={offer.offerId}>
                            <AwardedOffer offer={offer} />
                        </React.Fragment>
                    )
                )}    
            </div>
        </div>
    </>
}