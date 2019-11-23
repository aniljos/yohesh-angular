import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

    public static ForbiddenNames(names: Array<String>): ValidatorFn{

        return function(control: AbstractControl): ValidationErrors| null{

            let value = control.value;
            if(value){

                let result =  names.find(name => name === value);
                return result ? {forbiddenName: true}: null;

            }else{
                return null;
            }
        }
    }
}
