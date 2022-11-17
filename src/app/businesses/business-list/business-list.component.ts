import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {
  @Output() businessWasSelected = new EventEmitter<Business>()
  businesses: Business[];

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businesses = this.businessService.getBusinesses();
  }

  onBusinessSelected(business: Business) {
    this.businessWasSelected.emit(business)
  }

}
