import { DataService } from './DataService';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// NG6
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CustomerDataService extends DataService {
  
  url: string;
  constructor(private client: HttpClient) { 

    super();
    this.url = environment.customers_url;
  }
  
  getCustomers(): Observable<any> {
    console.log("[CustomerDataService getCustomers]");
      return this.client
                .get(this.url);
  }
  saveCustomer(customer: import("../model/customer").Customer) {
    throw new Error("Method not implemented.");
  }
  updateCustomer(customer: import("../model/customer").Customer) {
    throw new Error("Method not implemented.");
  }
  deleteCustomer(id: number) {
    throw new Error("Method not implemented.");
  }

  
}
