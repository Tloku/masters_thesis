/* eslint-disable @typescript-eslint/no-unused-vars */
import { RefObject, useEffect, useRef, useState } from 'react';
import './image-uploader.scss'



export const ImageUploader: React.FC = () => {
    const [offerImagesData, setOfferImagesData] = useState<string[]>([])
    const dropZone: RefObject<HTMLDivElement> = useRef(null);


    useEffect(() => {
        if (dropZone && dropZone.current) {
            dropZone.current.addEventListener("dragover", handleDragOver)
            dropZone.current.addEventListener("drop", onImageDrop)
        }
        
        return () => {
            dropZone!.current!.removeEventListener("dragover", handleDragOver)
            dropZone!.current!.removeEventListener("drop", onImageDrop)
        }
    }, [])

    const onImageDrop = (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        const {files} = event.dataTransfer!;
        console.log(files)
    }
    

    return <div className='image-uploader-wrapper' ref={dropZone}>
        {
        !offerImagesData.length && 
        <div className="image-drop-zone">
            <div className="button">
                <input
                    type="file"
                    id="fileDropRef"
                    multiple 
                />
                <label htmlFor="fileDropRef">Dodaj zdjęcia</label>

                <h4>lub upuść pliki tutaj</h4>
            </div>
        
            <div className="info-label">
                <h6>Dodaj do 40 zdjęć w formatach jpg, png lub gif</h6>
            </div> 
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

const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };