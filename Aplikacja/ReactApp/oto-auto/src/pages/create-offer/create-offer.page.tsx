import { CreateOfferFormComponent } from '../../components/forms/create-offer-form/create-offer-form';
import './create-offer.page.scss'


export const CreateOfferPage: React.FC = () => {
    

    return <>
        <div className="create-offer-wrapper">
            <div className="form-component">
                <CreateOfferFormComponent></CreateOfferFormComponent>

                {/* <div className="footer"> */}
                    {/* <create-offer-footer></create-offer-footer> */}
                {/* </div>     */}
            </div>

            <div className="tips-component">

            </div>
        </div>
    </>;
}