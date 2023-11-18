import { Component, OnInit, signal } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

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

  public offerImagesData = signal<string[]>([]);
  
  ngOnInit(): void {
    this.offerImages$.pipe(
      map((files: File[]) => {
        this.importNewImages(files)
      }),
      catchError(async (error) => new Error(error))
    ).subscribe()
  }

  private importNewImages(files: File[]) {
    Array.from(files).forEach((file: File) => {
      if (!this._determineMimeTypeIsImage(file)) {
        return; //TODO WYŚWIETL KOMUNIKAT 
      }
      
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (_event) => {
        if (reader.result) {
          this.offerImagesData().push(reader.result.toString())
        }
      }
    })
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
} 