import { Directive, EventEmitter, HostBinding, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[imgDragDrop]'
})
export class ImageDragAndDropDirective { 

    @Output() 
    draggedFiles: EventEmitter<File[]> = new EventEmitter()


    @HostListener('drop', ['$event'])
    public onImageDrop(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this.draggedFiles.emit(event.dataTransfer.files)
    }

    @HostListener('dragover', ['$event'])
    public onDragOver(event: any) {
        event.preventDefault();
        event.stopPropagation();
    }

     
    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: any) {
        event.preventDefault();
        event.stopPropagation();
    }
}
