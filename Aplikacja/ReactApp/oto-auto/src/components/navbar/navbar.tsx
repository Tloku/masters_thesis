import React from "react"
import './navbar.scss'

export const NavbarComponent: React.FC = () => {
    
    return <>
        <nav className="navigation">
            <div className="logo">
                OTOAUTO
            </div>

            <ul>
                <li>Aktualności</li>
                <li>Obserwowane</li>
                <li>Zaloguj się</li>
                <li>Wystaw ogłoszenie</li>
            </ul>
        </nav>
    </>
}