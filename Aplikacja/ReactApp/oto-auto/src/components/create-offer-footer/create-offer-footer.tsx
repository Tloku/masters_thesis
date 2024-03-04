import { Button } from 'primereact/button';
import './create-offer-footer.scss'


export const CreateOfferFooter: React.FC = () => {

    const createOffer = () => {

    }

    return <div className='wrapper'>
        <div className="button-wrapper">
            <Button 
                onClick={createOffer}
                label="Dodaj ogłoszenie"
                className='create-offer'    
            ></Button>
        </div>
    </div>;
}