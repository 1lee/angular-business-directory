import { Component, OnInit } from '@angular/core';
import { Business } from '../business.model';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  businesses: Business[] = [
    new Business('A Test Business', 'A test description for a fake business', 'https://hbr.org/resources/images/article_assets/2022/08/Hero-Image-1024x576.png'),
    new Business('A Test Business', 'A test description for a fake business', 'https://hbr.org/resources/images/article_assets/2022/08/Hero-Image-1024x576.png')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
