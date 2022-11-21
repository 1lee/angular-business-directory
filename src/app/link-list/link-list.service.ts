import { Subject } from 'rxjs';

import { Link } from '../shared/link.model';


export class LinkListService {
  linksChanged = new Subject<Link[]>();
  startedEditing = new Subject<number>();

  private links: Link[] = [
    new Link('Google search', 'http://www.google.com'),
    new Link('Amazon', 'http://www.amazon.com')
  ];

  updateLinkSubscription() {
    this.linksChanged.next(this.links.slice())

  }

  getLinks() {
    return this.links.slice()
  }

  getLink(index: number) {
    return this.links[index]
  }

  addLink(link: Link) {
    this.links.push(link)
    this.updateLinkSubscription()
  }

  addLinks(links: Link[]) {
    this.links.push(...links)
    this.updateLinkSubscription()
  }

  updateLink(index: number, newLink: Link) {
    this.links[index] = newLink;
    this.updateLinkSubscription()
  }

  deleteLink(index: number) {
    this.links.splice(index, 1);
    this.updateLinkSubscription();
  }


}
