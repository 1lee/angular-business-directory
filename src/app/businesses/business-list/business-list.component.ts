import { Component, OnInit } from '@angular/core';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {
  businesses: Business[];

  constructor(private businessService: BusinessService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.businesses = this.businessService.getBusinesses();
  }

  onNewBusiness() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
