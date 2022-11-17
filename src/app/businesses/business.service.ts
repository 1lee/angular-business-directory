import { EventEmitter } from '@angular/core'
import { Business } from './business.model'

export class BusinessService {
  businessSelected = new EventEmitter<Business>()

  private businesses: Business[] = [
    new Business('A Test Business', 'A test description for a fake business', 'https://hbr.org/resources/images/article_assets/2022/08/Hero-Image-1024x576.png'),
    new Business('Another Test Business', 'Another test description for a fake business', 'https://hbr.org/resources/images/article_assets/2022/08/Hero-Image-1024x576.png')

  ];

  getBusinesses() {
    // use slice to return a new copy of array instead of referencing
    return this.businesses.slice()
  }

}
