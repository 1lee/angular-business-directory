import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
  business: Business;
  id: number;

  constructor(private businessService: BusinessService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.business = this.businessService.getBusiness(this.id)
    })
  }

  onAddToLinkList() {
    this.businessService.addLinksToLinkList(this.business.links)
  }

  onEditBusiness() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onDeleteBusiness() {
    this.businessService.deleteBusiness(this.id);
    this.router.navigate(['/businesses'])
  }
}
