
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import './car-search-form.scss'

export const CarSearchForm: React.FC = () => {

    return <>
        <div className="car-form-wrapper">
            <form>
                <div className="car-form-container">
                    <span className="p-float-label">
                        <Dropdown editable id="body-type" />
                        <label htmlFor="body-type">Typ nadwozia</label>
                    </span>

                    <span className="p-float-label">
                        <Dropdown editable id="brand" />
                        <label htmlFor="brand">Marka pojazdu</label>
                    </span>

                    <span className="p-float-label">
                        <Dropdown editable id="model" />
                        <label htmlFor="model">Marka pojazdu</label>
                    </span>

                    <span className="p-float-label">
                        <Dropdown editable id="generation" />
                        <label htmlFor="generation">Generacja</label>
                    </span>

                    <div className="range">
                        <span className="label">Cena</span>
                        <span className="short">
                            <Dropdown className='short' editable id="price-from" placeholder='Od'/>
                        </span>
                        <span className="short">
                            <Dropdown className='short' editable id="price-to" placeholder='Do'/>
                        </span>
                    </div>

                    <div className="range">
                        <span className="label">Rok produkcji</span>
                        <span className="short">
                            <Dropdown className='short' editable id="year-from" placeholder='Od'/>
                        </span>
                        <span className="short">
                            <Dropdown className='short' editable id="year-to" placeholder='Do'/>
                        </span>
                    </div>

                    <span className="p-float-label">
                        <Dropdown editable id="fuel-type" />
                        <label htmlFor="fuel-type">Rodzaj paliwa</label>
                    </span>

                    <div className="range">
                        <span className="label">Przebieg</span>
                        <span className="short">
                            <Dropdown className='short' editable id="mileage-from" placeholder='Od'/>
                        </span>
                        <span className="short">
                            <Dropdown className='short' editable id="mileage-to" placeholder='Do'/>
                        </span>
                    </div>

                    <Button className='advanced-search' label="Wyszukiwanie zaawansowane"></Button>
                    <Button className='show-offers' label="Pokaż ogłoszenia"></Button>
                </div>
            </form>
        </div>
    </>
}