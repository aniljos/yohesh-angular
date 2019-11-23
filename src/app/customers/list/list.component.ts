import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import {DataService} from '../services/DataService';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {

  data: Array<Customer>;
  nCustomer: Customer;
  editableCustomer: Customer = null;
  searchKey: string;

  constructor(private service: DataService) {

      service.getCustomers()
                  .subscribe(data => {
                     this.data = data;
                  });

      this.nCustomer = new Customer();
      // this.data = new Array<Customer>();
      // this.data.push(new Customer(1, "Google", "Mumbai"));
      // this.data.push(new Customer(2, "FB", "Mumbai"));
      // this.data.push(new Customer(3, "MS", "BLR"));
      // this.data.push(new Customer(4, "HP", "HYD"));

   }

   add(){

      this.service
            .saveCustomer(this.nCustomer)
            .subscribe(() => {
               this.data.push(this.nCustomer);
               this.nCustomer = new Customer();

            }, (error) => {
               alert("Save failed")
            })

    
   }
   delete(evt, index){

    this.data.splice(index, 1);
    evt.preventDefault();

   }
   edit(evt, customer){

      this.editableCustomer = customer;
      evt.preventDefault();
   }
   editComplete(updatedCustomer){

      Object.assign(this.editableCustomer, updatedCustomer);
      this.editableCustomer = null;
   }
   editCancelled(msg){

      this.editableCustomer = null;
      alert(msg);
   }

  ngOnInit() {
  }

}
