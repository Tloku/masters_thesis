import React from "react"
import './main-page.scss'
import { MainSearchEngineComponent } from "../../components/main-search-engine/main-search-engine"
import { AwardedOfferGridComponent } from "../../components/awarded-offer-grid/awarded-offer-grid"


export const MainPage: React.FC = () => {

    return <>
        <div className="container">
            <div className="search-engine">
                <MainSearchEngineComponent />
            </div>

            <div className="awarded-offers">
                <AwardedOfferGridComponent />
            </div>
        </div>
    </>
}