/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './image-uploader.scss'



export const ImageUploader: React.FC = () => {
    const [offerImagesData, setOfferImagesData] = useState<string[]>([])


    return <div className='image-uploader-wrapper'>
        {
        !offerImagesData.length && 
        <div className="image-drop-zone">

        </div>
        }
        
        {
            offerImagesData.length > 0 && 
            <div className="not-empty-image-list">
                
            </div>
        }

    </div>
}

function determineMimeTypeIsImage(file: File): boolean {
    if (file.type.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return false; 
    }
    return true;
}
