import { EventEmitter } from '@angular/core'
import { Link } from '../shared/link.model';
import { Business } from './business.model'

export class BusinessService {
  businessSelected = new EventEmitter<Business>()

  private businesses: Business[] = [
    new Business('A Test Business',
      'A test description for a fake business',
      'https://hbr.org/resources/images/article_assets/2022/08/Hero-Image-1024x576.png',
      [new Link('Funk Biscuit Co.', 'www.funkbiscuitcoltd.whiskers'), new Link('Neberwordies Thiscklist', 'www.Neberwordiesusa.org')]),
    new Business('Another Test Business',
      'Another test description for a fake business',
      'https://hbr.org/resources/images/article_assets/2022/08/Hero-Image-1024x576.png', [new Link('Sugar Pork Gummy Alliance', 'www.getsugargummiedtoday.grease')])

  ];

  getBusinesses() {
    // use slice to return a new copy of array instead of referencing
    return this.businesses.slice()
  }

}
