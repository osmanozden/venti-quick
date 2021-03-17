import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() companyList: any [] = [];

  constructor() {
    this.companyList = [
      { name: 'Muhammet', age: 35, address: 'Sao Paulo' },
      { name: 'Mehmet', age: 12, address: 'Miami' },
      { name: 'Osman', age: 22, address: 'New York' }
    ];
  }

  ngOnInit() {
  }

}
