import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../model/customer';

@Pipe({
  name: 'custFilter'
})
export class CustFilterPipe implements PipeTransform {

  transform(input: Array<Customer>, searckKey: string): Array<Customer> {


    if(!searckKey){
        return input;
    }
    else{
      return input.filter(item => 
                    item.id.toString() === searckKey 
                      || item.name.toLowerCase().includes(searckKey.toLowerCase()) 
                      || item.location.toLowerCase().includes(searckKey.toLowerCase()));
    }
  }

}
