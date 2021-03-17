import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentiService {
  companyList: any [] = [];
  getCompanyList():any{
    return this.companyList;
  }
  constructor() {
    this.companyList = 
    [{ name: 'Muhammet',surname:"Ozden" ,age: 35, address: 'Sao Paulo' },
    { name: 'Osman',surname:"Asaf" , age: 22, address: 'Zeytinburnu' },
    { name: 'Mehmet',surname:"Yaman" , age: 35, address: 'Sao Paulo' },
    { name: 'Bekir',surname:"Sinmaz" , age: 22, address: 'Istanbul' },
    ];
  }
}