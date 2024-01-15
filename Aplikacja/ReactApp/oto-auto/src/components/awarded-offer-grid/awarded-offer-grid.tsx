import { useEffect, useState } from 'react'
import './awarded-offer-grid.scss'
import { OfferCardComponentModel } from '../../redux/model/offer-card-component.model'
import { AwardedOffer } from '../awarded-offer/awarded-offer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { getAwardedOffers } from '../../redux/state/offerSlice'


export const AwardedOfferGridComponent: React.FC = () => {
    // const [offers, setOffers] = useState<OfferCardComponentModel[] | undefined>(undefined)
    const offers: OfferCardComponentModel[] = useSelector<OfferCardComponentModel[]>((state: RootState) => state.offerCard.offerCardsComponent)
    const dispatch = useDispatch()
    useEffect(() => {
    //   OfferRestService.getAwardedOffers()
    //     .then((response: AxiosResponse<OfferCardComponentModel[]>) => {
    //         setOffers(response.data as OfferCardComponentModel[]);
    //     })  
        dispatch(getAwardedOffers())
    }, [])

    return <>
        <div className="wrapper">
            <span className="awarded-offers-label">Wyróżnione oferty</span>
            <div className="offers">
                { offers && offers.length > 0 && offers.map(
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