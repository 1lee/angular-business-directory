import { Component, OnInit, OnDestroy } from '@angular/core';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit, OnDestroy {
  businesses: Business[];
  subscription: Subscription;

  constructor(private businessService: BusinessService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.subscription = this.businessService.businessesChanged.subscribe((businesses: Business[]) => {
      this.businesses = businesses;
    })

    this.businesses = this.businessService.getBusinesses();
  }

  onNewBusiness() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
