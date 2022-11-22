import { Injectable } from '@angular/core'
import { LinkListService } from '../link-list/link-list.service';
import { Link } from '../shared/link.model';
import { Business } from './business.model';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class BusinessService {
  businessesChanged = new Subject<Business[]>();

  private businesses: Business[] = [
    new Business('A Test Business',
      'A test description for a fake business',
      'https://hbr.org/resources/images/article_assets/2022/08/Hero-Image-1024x576.png',
      [new Link('Funk Biscuit Co.', 'www.funkbiscuitcoltd.whiskers'), new Link('Neberwordies Thiscklist', 'www.Neberwordiesusa.org')]),
    new Business('Another Test Business',
      'Another test description for a fake business',
      'https://hbr.org/resources/images/article_assets/2022/08/Hero-Image-1024x576.png', [new Link('Sugar Pork Gummy Alliance', 'www.getsugargummiedtoday.grease')])

  ];

  constructor(private linklistService: LinkListService) { }

  getBusiness(index: number) {
    return this.businesses[index];
  }

  getBusinesses() {
    // use slice to return a new copy of array instead of referencing
    return this.businesses.slice()
  }

  addLinksToLinkList(links: Link[]) {
    this.linklistService.addLinks(links);
  }

  addBusiness(business: Business) {
    this.businesses.push(business);
    this.businessesChanged.next(this.businesses.slice());
  }

  updateBusiness(index: number, newBusiness: Business) {
    this.businesses[index] = newBusiness;
    this.businessesChanged.next(this.businesses.slice());
  }

  deleteBusiness(index: number) {
    this.businesses.splice(index, 1);
    this.businessesChanged.next(this.businesses.slice());
  }
}
