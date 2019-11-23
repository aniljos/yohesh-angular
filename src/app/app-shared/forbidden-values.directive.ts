import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[forbiddenNames]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValuesDirective, multi: true}]
})
export class ForbiddenValuesDirective implements Validator {
  
  @Input() forbiddenNames: Array<String>;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    
    let value = control.value;
    if(value){

        let result =  this.forbiddenNames.find(name => name === value);
        return result ? {forbiddenName: true}: null;

    }else{
        return null;
    }
  }
  // registerOnValidatorChange?(fn: () => void): void {
    
  // }
}
