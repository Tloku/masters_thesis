import './vehicle-images-gallery.scss'
import { Galleria } from 'primereact/galleria';
import { OfferImage } from '../../models/offer-image';


export const VehicleImagesGalleryComponent: React.FC<{vehicleImages: OfferImage[]}> = ({vehicleImages}) => {
    const itemTemplate = (item: OfferImage) => {
        return <img className='main-gallery-image' src={'data:image/jpg;base64,' + item.imageBytes } style={{ width: '550px', height: '400px' }} />
    }

    const thumbnailTemplate = (item: OfferImage) => {
        return <div className="grid grid-nogutter justify-content-center">
            <img className='gallery-image' src={'data:image/jpg;base64,' + item.imageBytes } style={{ width: '150px', height: '100px' }}  />
        </div>
    }

    return <>    
        <div className="gallery-wrapper">
            <Galleria 
                style={{ maxWidth: '700px', maxHeight: '500px' }}
                value={vehicleImages} 
                numVisible={4} 
                item={itemTemplate}
                thumbnailsPosition={'bottom'}
                thumbnail={thumbnailTemplate}
                showItemNavigators
                />
        </div>
    </>
}