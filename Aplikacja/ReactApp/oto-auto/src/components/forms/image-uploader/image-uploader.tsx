/* eslint-disable @typescript-eslint/no-unused-vars */
import { RefObject, useEffect, useRef, useState } from 'react';
import './image-uploader.scss'
import { OfferImagesForm } from '../../../redux/model/create-offer-form.model';

interface ImageUploaderProps {
    form: OfferImagesForm[] | undefined
}


export const ImageUploader: React.FC<ImageUploaderProps> = (props) => {
    const [offerImagesData, setOfferImagesData] = useState<string[]>([])
    const dropZone: RefObject<HTMLDivElement> = useRef(null);
    const dropButton: RefObject<HTMLDivElement> = useRef(null);


    useEffect(() => {
        if (dropZone && dropZone.current) {
            dropZone.current.addEventListener("dragover", handleDragOver)
            dropZone.current.addEventListener("drop", onImageDrop)
        }

        if (dropButton && dropButton.current) {
            dropButton.current.addEventListener("dragover", handleDragOver)
            dropButton.current.addEventListener("drop", onImageDrop)
        }
        
        return () => {
            if (dropZone && dropZone.current) { 
                dropZone!.current!.removeEventListener("dragover", handleDragOver)
                dropZone!.current!.removeEventListener("drop", onImageDrop)
            }
            if (dropButton && dropButton.current) {
                dropButton!.current!.removeEventListener("dragover", handleDragOver)
                dropButton!.current!.removeEventListener("drop", onImageDrop)
            }
        }
    }, [])

    const onImageDrop = (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        const {files} = event.dataTransfer!;
        importNewImages(files)
    }
    
    const importNewImages = (files: FileList) => {
        Array.from(files).forEach((file: File, index: number) => {
            if (!determineMimeTypeIsImage(file)) {
              return; //TODO WYŚWIETL KOMUNIKAT 
            }
            
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (_event) => {
              if (reader.result) {
                setOfferImagesData(prevImagesData => [...prevImagesData, reader.result!.toString()]);
                addImagesToForm(file, reader.result.toString());
               }  
            }
          })
    }

    const addImagesToForm = (file: File, blob: string) => {
        const offerImage: OfferImagesForm = {
            name: file.name,
            blob: blob,
            isMainImage: offerImagesData.length == 1
          }
          props.form!.push(offerImage);
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
                <ol>
                    {offerImagesData.map((image, index) => (
                        <li key={index}>
                            <div className={index === 0 ? "main-image-container" : "image-container"}>
                                <img 
                                    className="uploaded-car-pic"
                                    src={image}
                                    alt="car"
                                ></img>
                            </div>
                        </li>
                    ))}
                    <li>
                        <div className="upload-file-button" ref={dropButton}>
                            <input
                                type="file"
                                id="fileDropListRef"
                                multiple
                            />
                            <label htmlFor="fileDropListRef">+</label>
                        </div>
                    </li>
                </ol>
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