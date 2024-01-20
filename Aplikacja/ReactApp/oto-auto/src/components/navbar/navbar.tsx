import React from "react"
import './navbar.scss'
import { NavigateFunction, useNavigate } from "react-router-dom"

export const NavbarComponent: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

    return <>
        <nav className="navigation">
            <div className="logo">
                OTOAUTO
            </div>

            <ul>
                <li>Aktualności</li>
                <li>Obserwowane</li>
                <li>Zaloguj się</li>
                <li onClick={() => onCreateOfferClick(navigate)}>Wystaw ogłoszenie</li>
            </ul>
        </nav>
    </>
}

function onCreateOfferClick(navigate: NavigateFunction): void  {
    navigate('/new-offer');
} 