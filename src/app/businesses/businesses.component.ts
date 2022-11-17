import { Component, OnInit } from '@angular/core';
import { Business } from './business.model';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {
selectedBusiness: Business;
  constructor() { }

  ngOnInit(): void {
  }

}
