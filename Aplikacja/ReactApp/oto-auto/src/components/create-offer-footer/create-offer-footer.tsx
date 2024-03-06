import { Button } from 'primereact/button';
import './create-offer-footer.scss'
import { useSelector } from 'react-redux';
import { CreateOfferFormStateModel } from '../../redux/model/create-offer-form.model';
import { RootState } from '../../redux/store/store';
import { OfferRestService } from '../../api/rest-service/offer-rest-service';
import { CreateOfferResponse } from '../../api/models/create-offer-response';
import { useNavigate } from 'react-router-dom';


export const CreateOfferFooter: React.FC = () => {
    const formDraft: CreateOfferFormStateModel = useSelector((state: RootState) => state.createOfferForm);
    const navigate = useNavigate();

    const createOffer = async () => {
        const response = await OfferRestService.createOffer(formDraft);
        const data = response.data as CreateOfferResponse
        navigate(`/offer/${data.offerId}`)
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