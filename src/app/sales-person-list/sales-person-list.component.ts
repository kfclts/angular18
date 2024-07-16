import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  // create an array if object
  salespPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "aa@gmail.com", 50000),
    new SalesPerson("John", "Doe", "jd@gmail.com", 40000),
    new SalesPerson("Claire", "Murphy", "cm@gmail.com", 90000),
    new SalesPerson("Mai", "Truonh", "mt@gmail.com", 60000),
  ]
}
