import { NgModule } from '@angular/core';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CompanyRoutingModule, NzTableModule, NzDividerModule, CommonModule],
  declarations: [CompanyComponent],
  exports: [CompanyComponent]
})
export class CompanyModule { }
