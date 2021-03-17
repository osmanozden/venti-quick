import {Component, Input, OnInit} from '@angular/core';
import { VentiService } from 'src/app/service/venti.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyList: any [] = [];

  constructor(private ventiService :VentiService ) {
    
  }
  ngOnInit() {
    this.companyList = this.ventiService.getCompanyList()
  }
}