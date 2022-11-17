import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../business.model';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
@Input() business: Business;

  constructor() { }

  ngOnInit(): void {
  }

}
