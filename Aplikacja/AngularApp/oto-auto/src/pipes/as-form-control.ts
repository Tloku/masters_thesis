import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'asFormControl'
})
export class AsFormControlPipe implements PipeTransform {
  transform(value: AbstractControl): FormControl {
    let x = new FormControl(value)
    console.log(x);
    return x;
  }
}