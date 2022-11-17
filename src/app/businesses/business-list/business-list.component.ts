import { Component, OnInit } from '@angular/core';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {
  businesses: Business[];

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businesses = this.businessService.getBusinesses();
  }


}
