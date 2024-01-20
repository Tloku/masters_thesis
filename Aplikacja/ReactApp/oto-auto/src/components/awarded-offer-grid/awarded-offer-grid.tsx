import { useEffect } from 'react'
import './awarded-offer-grid.scss'
import { OfferCardComponentModel } from '../../redux/model/offer-card-component.model'
import { AwardedOffer } from '../awarded-offer/awarded-offer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { getAwardedOffers } from '../../redux/state/offerSlice'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'


export const AwardedOfferGridComponent: React.FC = () => {     
    const offers: OfferCardComponentModel[] = useSelector((state: RootState) => state.offerCard.offerCardsComponent)
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

    useEffect(() => {
        dispatch(getAwardedOffers())
    }, [dispatch])

    return <>
        <div className="awarderd-offer-grid-wrapper">
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