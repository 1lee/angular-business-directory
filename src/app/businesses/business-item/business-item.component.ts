import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business-item',
  templateUrl: './business-item.component.html',
  styleUrls: ['./business-item.component.css']
})
export class BusinessItemComponent implements OnInit {
  @Input() business: Business;

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.businessService.businessSelected.emit(this.business)
  }
}
