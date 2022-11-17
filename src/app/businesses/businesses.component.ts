import { Component, OnInit } from '@angular/core';
import { Business } from './business.model';
import { BusinessService } from './business.service';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
  providers: [BusinessService]
})

export class BusinessesComponent implements OnInit {
  selectedBusiness: Business;

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.businessSelected.subscribe((business: Business) => {
      this.selectedBusiness = business
    })
  }

}
