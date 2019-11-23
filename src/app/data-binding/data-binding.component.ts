import {Component} from '@angular/core';

@Component({
    selector: "data-binding",
    templateUrl: './data-binding.component.html'
})
export class DataBindingComponent{

    user: {firstName: string, lastName: string};
    count: number;
    message = "Hello";

    constructor(){
        this.user = {firstName: "Anil", lastName: "Joseph"};
        this.count = 10;
    }

    inc(evt){
        console.log(evt);
        this.count++;
    }

}