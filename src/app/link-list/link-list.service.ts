import { Subject } from 'rxjs';

import { Link } from '../shared/link.model';


export class LinkListService {
  linksChanged = new Subject<Link[]>();

  private links: Link[] = [
    new Link('Google search', 'http://www.google.com'),
    new Link('Amazon', 'http://www.amazon.com')
  ];

  addLink(link: Link) {
    this.links.push(link)
    this.linksChanged.next(this.links.slice())
  }

  addLinks(links: Link[]) {
    this.links.push(...links)
    this.linksChanged.next(this.links.slice())

  }

  getLinks() {
    return this.links.slice()
  }
}
