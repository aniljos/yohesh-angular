import { Component, OnInit, Input, 
    OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {
 

  @Input()
  customer: Customer;
  temp: Customer;

  @Output()
  saved: EventEmitter<Customer> = new EventEmitter();
  @Output()
  cancelled:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges: ", changes);

    this.temp = new Customer();
    Object.assign(this.temp, this.customer);

  }

  save(){
    //Object.assign(this.customer, this.temp);

    this.saved.emit(this.temp);
  }

  cancel(){
    this.cancelled.emit("Operation cancelled");
  }

}
