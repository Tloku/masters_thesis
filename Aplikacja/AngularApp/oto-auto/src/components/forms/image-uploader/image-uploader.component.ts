import { Component, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { OfferImagesForm } from 'src/api/models/form/create-offer-form';
import { UpdateOfferImagesForm } from 'src/store/create-offer/create-offer-form.actions';

@Component({
  selector: 'image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
})
export class ImageUploaderComponent implements OnInit { 

  private offerImages = new BehaviorSubject<File[]>([])
  get offerImages$(): Observable<File[]> {
    return this.offerImages.asObservable();
  }
  offerImagesFormArray: FormArray = this._fb.array([])
  public offerImagesData = signal<string[]>([]);
  

  constructor(
    private _fb: FormBuilder,
    private _store: Store
  ) {}


  ngOnInit(): void {
    this.offerImages$.pipe(
      map((files: File[]) => {
        this.importNewImages(files)
      }),
      catchError(async (error) => new Error(error))
    ).subscribe()
  }

  private importNewImages(files: File[]) {
    Array.from(files).forEach((file: File, index: number) => {
      if (!this._determineMimeTypeIsImage(file)) {
        return; //TODO WYŚWIETL KOMUNIKAT 
      }
      
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (_event) => {
        if (reader.result) {
          this.offerImagesData().push(reader.result.toString())
          this.addImageToForm(file, reader.result.toString())
        }
      }
    })
  }

  private addImageToForm(file: File, blob: string) {
    let offerImage: OfferImagesForm = {
      name: file.name,
      blob: blob,
      isMainImage: this.offerImagesData().length == 1
    }
    this._store.dispatch(new UpdateOfferImagesForm(offerImage))

    this.offerImagesFormArray.push(
      this._fb.group<OfferImagesForm>(offerImage)
    )
  }

  private _determineMimeTypeIsImage(file: File): boolean {
    if (file.type.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return false; 
    }
    return true;
  }

  processFile(imageInput: any) {}

  onDraggedFile(event: File[]) {
    this.offerImages.next(event);
  }

  _getOfferImagesFormArray(): OfferImagesForm[] {
    return this.offerImagesFormArray.controls.map((control) => {
      const formGroup = control as FormGroup;
      return {
        name: formGroup.get('name')?.value,
        blob: formGroup.get('blob')?.value,
        isMainImage: formGroup.get('isMainImage')?.value,
      } as OfferImagesForm;
    });
  }
} 