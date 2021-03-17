import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  const companyList;

  constructor() {
    this.companyList.push({'name':'Mehmet'});
  }

  ngOnInit() {
  }

}
