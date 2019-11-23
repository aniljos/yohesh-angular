import { Customer } from '../model/customer';
import { Observable } from 'rxjs';

export abstract class DataService{

    abstract getCustomers() : Observable<any>;
    abstract saveCustomer(customer: Customer): any;
    abstract updateCustomer(customer: Customer): any;
    abstract deleteCustomer(id: number): any;
}