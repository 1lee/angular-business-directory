import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
  @Input() business: Business;

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
  }

  onAddToLinkList() {
    this.businessService.addLinksToLinkList(this.business.links)
  }
}
