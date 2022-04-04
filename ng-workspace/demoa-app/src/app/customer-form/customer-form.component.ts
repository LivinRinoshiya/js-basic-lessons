import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  //data model
  CustomerModel:any;
  constructor() {console.log("Customer Form Loaded") }

  ngOnInit(): void {
    this.CustomerModel = {
      firstName: '',
      lastName: '',
      email: 'steve.Jobs@gmail.com'
    }
  }
saveCustomer (customerFormGroup:any) {
  if (customerFormGroup.value) 
  {
    console.log(customerFormGroup.value);
  }
}
}
