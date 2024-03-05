import { Button } from 'primereact/button';
import './create-offer-footer.scss'
import { useSelector } from 'react-redux';
import { CreateOfferFormStateModel } from '../../redux/model/create-offer-form.model';
import { RootState } from '../../redux/store/store';


export const CreateOfferFooter: React.FC = () => {
    const formDraft: CreateOfferFormStateModel = useSelector((state: RootState) => state.createOfferForm);


    const createOffer = () => {
        console.log(formDraft);
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