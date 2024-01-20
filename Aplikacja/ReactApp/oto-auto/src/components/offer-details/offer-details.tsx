import React from 'react'
import './offer-details.scss'
import { VehicleDetailsRow } from '../../models/vehicle-details-row'

export const OfferDetailsComponent: React.FC<{vehicleAttributes: VehicleDetailsRow[]}> = ({vehicleAttributes}) => {

    return <>
        <div className="offer-details-wrapper">
            <h2 className="title">Szczegóły</h2>
            <div className="vehicle-details-wrapper">
                {
                    vehicleAttributes && vehicleAttributes.map(
                        (row: VehicleDetailsRow) => (
                            <div  className="vehicle-details-row">
                                <span className="attribute">{ row.attribute } </span>
                                <span className="value">{ row.value }</span>
                            </div>   
                        )
                    )
                }
            </div>
        </div>
    </>
}